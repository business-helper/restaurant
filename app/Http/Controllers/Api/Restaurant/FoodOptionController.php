<?php

namespace App\Http\Controllers\Api\Restaurant;

use App\Model\FoodSize;
use App\Model\MenuOptionItem;
use App\Model\MenuOptionTag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\OptionTag;
use App\Model\OptionItem;
use App\Model\FoodCategory;
use Illuminate\Support\Facades\Auth;
use Validator;

class FoodOptionController extends Controller
{

    public function getInformationForOption($restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;

        $result=Array();
        $result['size']=Array();
        $sizes=FoodSize::where('restaurant_id',$restaurant_id)->get();
        $i=0;
        foreach ($sizes as $size){
            $result['size'][$i]['id']=$size->id;
            $result['size'][$i]['name']=$size->name;
            $result['size'][$i]['min']=0;
            $result['size'][$i]['max']=null;
            $result['size'][$i]['enabled']=false;
            $i++;
        }
        return response()->json($result);
    }


    public function addOption(Request $request,$restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $min=$request->input('min_number');
        $max=$request->input('max_number');
        $title=$request->input('title');
        $sizes=$request->input('sizes');

        $option_items=$request->input('option_items');
        $option_tag=new OptionTag;
        $option_tag->restaurant_id=$restaurant_id;
        $option_tag->title=$title;
        $option_tag->min=$min;
        $option_tag->max=$max;

        $size_min_max=Array();
        foreach ($sizes as $size){
            if ($size['enabled']){
                $temp=Array();
                $temp['size_id']=$size['id'];
                $temp['min']=$size['min'];
                $temp['max']=$size['max'];
                $size_min_max[]=$temp;
            }
        }

        $option_tag->size_min_max=$size_min_max;
        $option_tag->save();

        $tag_id=$option_tag->id;

        foreach ($option_items as $temp){
            $option_item=new OptionItem;
            $option_item->tag_id=$tag_id;
            $option_item->max=$temp['max'];
            $option_item->name=$temp['name'];
            $option_item->price=$temp['price'];
            $option_item->save();
        }
    }

    public function updateOption(Request $request){
        $option_id=$request->input('tag_id');
        $min=$request->input('min_number');
        $max=$request->input('max_number');
        $title=$request->input('title');
        $sizes=$request->input('sizes');
        $option_items=$request->input('option_items');

        $option_tag=OptionTag::find($option_id);
        $option_tag->title=$title;
        $option_tag->min=$min;
        $option_tag->max=$max;

        $size_min_max=Array();
        foreach ($sizes as $size){
            if ($size['enabled']){
                $temp=Array();
                $temp['size_id']=$size['id'];
                $temp['min']=$size['min'];
                $temp['max']=$size['max'];
                $size_min_max[]=$temp;
            }
        }

        $option_tag->size_min_max =$size_min_max;
        $option_tag->save();
        $previous_option_item_ids=Array();
        foreach ($option_items as $temp){
            if ($temp['item_id']!=-1)
                $previous_option_item_ids[]=$temp['item_id'];
        }

        // Removing Option Items that being deleted from edit
        OptionItem::where('tag_id',$option_id)->whereNotIn('id',$previous_option_item_ids)->delete();

        foreach ($option_items as $temp){
            if ($temp['item_id']!=-1)
                $option_item=OptionItem::find($temp['item_id']);
            else
                $option_item=new OptionItem;
            $option_item->tag_id=$option_id;
            $option_item->max=$temp['max'];
            $option_item->name=$temp['name'];
            $option_item->price=$temp['price'];
            $option_item->save();
        }
    }


    public function getOptionList($restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $option_tags=OptionTag::where('restaurant_id',$restaurant_id)->get();
        $result=Array();
        $i=0;
        foreach ($option_tags as $option_tag){
            $result[$i]['no']=$i+1;
            $result[$i]['id']=$option_tag->id;
            $result[$i]['title']=$option_tag->title;
            $result[$i]['min']=$option_tag->min;
            $result[$i]['max']=$option_tag->max;
            $option_items=OptionItem::where('tag_id',$option_tag->id)->get();
            $result[$i]['item_number']=count($option_items);
            $i++;
        }
        return response()->json($result);
    }


    public function deleteOption($id){
        $option_item_ids=OptionTag::where('id',$id)->get()->pluck('id')->toArray();
        OptionTag::where('id',$id)->delete();
        OptionItem::where('tag_id',$id)->delete();
        MenuOptionTag::where('option_tag_id',$id)->delete();
        MenuOptionItem::whereIn('option_id',$option_item_ids)->delete();

        return response()->json(['success'=>'success']);
    }



    public function getOption($id,$restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $result=Array();
        $result['option_tag']=Array();
        $option_tag=OptionTag::find($id);
        $result['option_tag']['title']=$option_tag->title;
        $result['option_tag']['min_number']=$option_tag->min;
        $result['option_tag']['max_number']=$option_tag->max;

        $result['option_tag']['sizes']=Array();
        $applied_sizes=$option_tag->size_min_max;
        if (is_null($applied_sizes))
            $applied_sizes=Array();


        $sizes=FoodSize::Where('restaurant_id',$restaurant_id)->get();
        $i=0;
        foreach ($sizes as $size){
            $result['option_tag']['sizes'][$i]['id']=$size->id;
            $result['option_tag']['sizes'][$i]['name']=$size->name;
            $result['option_tag']['sizes'][$i]['enabled']=false;
            $result['option_tag']['sizes'][$i]['min']=0;
            $result['option_tag']['sizes'][$i]['max']=null;

            for ($j=count($applied_sizes)-1;$j>=0;$j--){
                if ($size->id==$applied_sizes[$j]['size_id']){
                    $result['option_tag']['sizes'][$i]['enabled']=true;
                    $result['option_tag']['sizes'][$i]['min']=$applied_sizes[$j]['min'];
                    $result['option_tag']['sizes'][$i]['max']=$applied_sizes[$j]['max'];;
                    array_splice($applied_sizes,$j,1);
                    break;
                }
            }
            $i++;
        }

        $result['option_items']=Array();
        $option_items=OptionItem::where('tag_id',$id)->get();
        $i=0;
        foreach ($option_items as $option_item){
            $result['option_items'][$i]['max']=$option_item->max;
            $result['option_items'][$i]['name']=$option_item->name;
            $result['option_items'][$i]['price']=$option_item->price;
            $result['option_items'][$i]['item_id']=$option_item->id;
            $i++;
        }
        return response()->json($result);
    }





}
