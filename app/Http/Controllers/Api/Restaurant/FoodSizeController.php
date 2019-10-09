<?php

namespace App\Http\Controllers\Api\Restaurant;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\FoodSize;
use App\Model\MenuSize;
use App\Model\OptionTag;
use App\Model\MenuOptionTag;
use Illuminate\Support\Facades\Auth;
use Validator;

class FoodSizeController extends Controller
{
    public function addSize(Request $request,$restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $record=new FoodSize();
        $record->name=$request->input('name');
        $record->restaurant_id=$restaurant_id;
        $record->save();
        return response()->json(['success'=>'success']);
    }



    public function updateSize(Request $request){
        $id=$request->input('size_id');
        $record=FoodSize::find($id);
        $record->name=$request->input('name');
        $record->save();
        return response()->json(['success'=>'success']);
    }



    public function getSizeList($restaurant_id=null){
        if(is_null($restaurant_id))
            $restaurant_id=Auth::guard('restaurant-api')->user()->id;
        $result=Array();
        $temps=FoodSize::where('restaurant_id',$restaurant_id)->get();
        $i=0;
        foreach ($temps as $temp)
        {
            $result[$i]['no']=$i+1;
            $result[$i]['id']=$temp->id;
            $result[$i]['name']=$temp->name;
            $i++;
        }
        return response()->json($result);
    }

    public function getSize($id){
        $data=FoodSize::find($id)->toArray();
        return response()->json($data);
    }


    public function deleteSize($id){
        FoodSize::where('id',$id)->delete();
        MenuSize::where('size_id',$id)->delete();
        $option_tags=OptionTag::where('size_min_max','LIKE',"%".'"size_id":'.$id.",%")->get();
        foreach ($option_tags as $option_tag){
            $size_min_max=$option_tag->size_min_max;
            for ($i=0;$i<count($size_min_max);$i++){
                if ($size_min_max[$i]['size_id']==$id){
                    array_splice($size_min_max,$i,1);
                    break;
                }
            }
            $option_tag->size_min_max=$size_min_max;
            $option_tag->save();
        }

        $menu_option_tags=MenuOptionTag::where('size_min_max','LIKE',"%".'"size_id":'.$id.",%")->get();
        foreach ($menu_option_tags as $option_tag){
            $size_min_max=$option_tag->size_min_max;
            for ($i=0;$i<count($size_min_max);$i++){
                if ($size_min_max[$i]['size_id']==$id){
                    array_splice($size_min_max,$i,1);
                    break;
                }
            }
            $option_tag->size_min_max=$size_min_max;
            $option_tag->save();
        }
        return response()->json('success');
    }
}
