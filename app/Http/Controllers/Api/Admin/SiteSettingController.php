<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\FoodMenu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\HomeSlider;
use App\Model\ReviewSection;
use App\Model\Offers;
use App\Model\AboutUs;

use App\Model\MapKey;
use App\Model\Locations;
use App\Model\OnlineOrderPage;
use App\Model\LocationBrands;
use App\Model\OpenningHours;

use App\Traits\ImageOperation;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;
use phpDocumentor\Reflection\Location;

class SiteSettingController extends Controller
{
    use ImageOperation ;
    public function add_logo_title(Request $request){
        $temps=GeneralSetting::get();
        if ($temps->first())
            $setting=$temps->first();
        else
            $setting=new GeneralSetting;

        if (!is_null($setting->logo))
            File::delete('public/Images/Icons/'.$setting->logo);
        if (!is_null($setting->fav_icon))
            File::delete('public/Images/Icons/'.$setting->fav_icon);



        if ($request->get('logo_image')){
            $file=$request->get('logo_image');
            $file_name = 'logo'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('logo_image'))->save(public_path('Images/Icons/').$file_name);
            $setting->logo=$file_name;
        }
        if ($request->get('fav_icon')){
            $file=$request->get('fav_icon');
            $file_name = 'fav'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('fav_icon'))->save(public_path('Images/Icons/').$file_name);
            $setting->fav_icon=$file_name;
        }
        $setting->site_title=$request->input('title');
        $setting->save();
        return response()->json($request->all());
    }

    public function get_logo_title(){
        $result=Array();
        $temps=GeneralSetting::get();
        if ($temps->first()){
            $setting=$temps->first();
            if ($setting->logo)
                $result['logo']=url('public/Images/Icons/'.$setting->logo);
            if ($setting->fav_icon)
                $result['fav_icon']=url('public/Images/Icons/'.$setting->fav_icon);
            $result['title']=$setting->site_title;
            return response()->json($result);
        }
    }


    public function addSiteSlider(Request $request){
        $menu_id=$request->input('menu_id');
        $menu_name=$request->input('menu_name');
        $description=$request->input('description');
        $order=$request->input('order');
        $slider_id=$request->input('slider_id');
        if (!is_null($slider_id))
            $home_slider=HomeSlider::find($slider_id);
        else
            $home_slider=new HomeSlider;

        if (is_null($order))
            $order=0;
        $type=$request->input('slider_type');


        if ($request->get('resultImageURL')){
            $file=$request->get('resultImageURL');
            $file_name = 'slider'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('resultImageURL'))->save(public_path('Images/Sliders/').$file_name);
            $home_slider->image=$file_name;
        }

        $sliders=HomeSlider::where('order','>=',$order)->get();

        foreach ($sliders as $slider){
            $slider->order=$slider->order+1;
            $slider->save();
        }

        $home_slider->menu_id=$menu_id;
        $home_slider->menu_name=$menu_name;
        $home_slider->description=$description;
        $home_slider->order=$order;
        $home_slider->type=$type;
        $home_slider->save();
        return 'success';
    }

    public function getHomeSliderList(){
        $result=Array();
        $sliders=HomeSlider::orderBy('order')->get();
        $i=0;
        foreach ($sliders as $slider){
            $result[$i]['id']=$slider->id;
            $result[$i]['image']=url('public/Images/Sliders/'.$slider->image);
            $result[$i]['no']=$i+1;
            $result[$i]['name']=$slider->menu_name;
            $result[$i]['description']=$slider->description;
            $result[$i]['order']=$slider->order;
            $result[$i]['type']="Type ".($slider->type+1);
            $i++;
        }
        return response()->json($result);
    }

    public function deleteSiteSlider($id){
        $slider=HomeSlider::find($id);
        $order=$slider->order;
        $slider->delete();
        $temps=HomeSlider::where('order','>',$order)->get();
        foreach ($temps as $temp){
            $temp->order=$temp->order-1;
            $temp->save();
        }
        return 'success';
    }

    public function getSlider($id){
        $result=Array();
        $result['menu']=Array();
        $slider=HomeSlider::find($id);
        $result['slider']=$slider;
        if ($slider->image)
            $slider->image=url('public/Images/Sliders/'.$slider->image);

        $menus=FoodMenu::all();
        $i=0;
        foreach ($menus as $menu){
            $result['menu'][$i]['id']=$menu->id;
            $result['menu'][$i]['name']=$menu->name;
            $result['menu'][$i]['image']=null;
            if ($menu->image){
                $result['menu'][$i]['image']=url('public/Images/FoodMenus/'.$menu->image);
            }
            if ($slider->menu_id==$menu->id){
                $result['slider']['menu_index']=$i;
            }
            $i++;
        }
        return response()->json($result);
    }

    public function addReview(Request $request){
        $temps=ReviewSection::all();
        if ($temps->first())
            $review=$temps->first();
        else
            $review=new ReviewSection;

        $title=$request->input('title');
        $description=$request->input('description');
        $mark=$request->input('mark');
        $sub_reviews=$request->input('subreview');

        $review->title=$title;
        $review->description=$description;
        $review->marks=$mark;
        if ($request->get('resultImageURL')){
            $file=$request->get('resultImageURL');
            $file_name = 'slider'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('resultImageURL'))->save(public_path('Images/Sliders/').$file_name);
            $review->background_image=$file_name;
        }

        $temp=Array();
        $i=0;
        foreach ($sub_reviews as $sub_review){
            $temp[$i]['title']=$sub_review['title'];
            $temp[$i]['user_name']=$sub_review['user_name'];
            $temp[$i]['mark']=$sub_review['mark'];
            if ($sub_review['profile_image']){
                $file=$sub_review['profile_image'];
                $file_name = 'slider'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
                \Image::make($sub_review['profile_image'])->save(public_path('Images/Sliders/').$file_name);
                $temp[$i]['profile_image']=$file_name;
            }

            $i++;
        }
        $review->sub_review=$temp;
        $review->save();
    }

    public function getReview(){
        $result=Array();
        $temps=ReviewSection::get();
        if ($temps->first()){
            $review=$temps->first();
            $result['title']=$review->title;
            $result['description']=$review->description;
            $result['mark']=$review->marks;
            if ($review->background_image)
                $result['image']=url('public/Images/Sliders/'.$review->background_image);
            $sub_review=$review->sub_review;
            $i=0;
            foreach($sub_review as $item){
                $result['subreview'][$i]['title']=$item['title'];
                $result['subreview'][$i]['user_name']=$item['user_name'];
                $result['subreview'][$i]['mark']=$item['mark'];
                $result['subreview'][$i]['profile_image']=null;
                if ($item['profile_image'])
                    $result['subreview'][$i]['profile_image']=url('public/Images/Sliders/'.$item['profile_image']);
                $i++;
            }
        }

        return response()->json($result);

    }

    public function get_offer_list(){
        $result=Array();
        $offers=Offers::all();
        $i=0;
        foreach ($offers as $offer){
            $result[$i]['no']=$i+1;
            $result[$i]['id']=$offer->id;
            $result[$i]['title']=$offer->title;
            $result[$i]['description']=$offer->description;
            $result[$i]['image']=null;
            if ($offer->image){
                $result[$i]['image']=url('public/Images/Offers/'.$offer->image);
            }

            $items=$offer->items;
            if (is_null($items))
                $result[$i]['item_number']=0;
            else
                $result[$i]['item_number']=count($items);

            $result[$i]['order']=$offer->order;
            $i++;
        }
        return response()->json($result);
    }


    public function addOffer(Request $request){
        $title=$request->input('title');
        $description=$request->input('description');
        $items=$request->input('items');
        $order=$request->input('order');
        $offer_id=$request->input('offer_id');
        if ($offer_id)
            $offer=Offers::find($offer_id);
        else
            $offer=new Offers;
        $offer->title=$title;
        $offer->description=$description;
        $offer->order=$order;

        if ($request->get('resultImageURL')){
            $file=$request->get('resultImageURL');
            $file_name = 'offer'.time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('resultImageURL'))->save(public_path('Images/Offers/').$file_name);
            $offer->image=$file_name;
        }

        $temp=Array();
        $i=0;
        foreach ($items as $item){
            $temp[$i]['title']=$item['title'];
            $temp[$i]['enabled']=$item['enabled'];
            $i++;
        }
        $offer->items=$temp;

        $temps=Offers::where('order','>=',$order)->get();
        foreach ($temps as $temp){
            $temp->order=$temp->order+1;
            $temp->save();
        }
        $offer->save();
        return 'success';
    }

    public function deleteOffer($id){
        $offer=Offers::find($id);
        $order=$offer->order;

        if (!is_null($offer->image))
            File::delete('public/Images/Offers/'.$offer->image);
        $offer->delete();

        $temps=Offers::where('order','>',$order)->get();
        foreach ($temps as $temp){
            $temp->order=$temp->order-1;
            $temp->save();
        }
        return 'success';
    }

    public function getOffer($id){
        $result=Array();
        $offer=Offers::find($id);

        $result['title']=$offer->title;
        $result['description']=$offer->description;
        $result['order']=$offer->order;
        $result['items']=Array();
        $result['image']=null;
        if ($offer->image)
            $result['image']=url('public/Images/Offers/'.$offer->image);

        $items=$offer->items;
        $i=0;
        foreach ($items as $item){
            $result['items'][$i]['title']=$item['title'];
            $result['items'][$i]['enabled']=$item['enabled'];
            $i++;
        }
        return response()->json($result);

    }

    public function addLocations(Request $request){
        $temps=MapKey::all();
        if ($temps->first())
            $map_key=$temps->first();
        else
            $map_key=new MapKey;
        $map_key->key=$request->input('map_key');
        $map_key->mark_image=$this->uploadImage($request->input('resultImageURL'),'Settings','marker');
        $map_key->save();

        $locations=$request->input('locations');

        // Delete Non existing locations
        $previous_locations=Locations::get()->pluck('id')->toArray();
        foreach ($previous_locations as $previous_location){
            $exisiting=false;
            foreach ($locations as $location){
                if ($previous_location==$location['id']){
                    $exisiting=true;
                    break;
                }
            }
            if ($exisiting==false){
                $food_menus=FoodMenu::where('location_ids','Like',"%[$previous_location,%")->orWhere('location_ids','Like',"%,$previous_location,%")->orWhere('location_ids','Like',"%,$previous_location]%")->get();
                foreach ($food_menus as $food_menu){
                    $location_ids=$food_menu->location_ids;
                    for($i=0;$i<count($location_ids);$i++){
                        if ($location_ids[$i]==$previous_location){
                            array_splice($location_ids,$i,1);
                            break;
                        }
                    }
                    $food_menu->location_ids=$location_ids;
                    $food_menu->save();
                }
                OpenningHours::where('location_id',$previous_location)->delete();
                LocationBrands::where('location_id',$previous_location)->delete();
                Locations::where('id',$previous_location)->delete();
            }
        }

        foreach ($locations as $location){
            if (is_null($location['id']))
                $record_location=new Locations;
            else
                $record_location=Locations::find($location['id']);

            $record_location->name=$location['restaurant_name'];
            $record_location->address=$location['restaurant_address'];
            $record_location->lat=$location['lat'];
            $record_location->lng=$location['lng'];
            $record_location->phone=$location['phone'];
            $record_location->email=$location['email'];
            $record_location->save();
        }


    }

    public function getLocation(){
        $result=Array();
        $result['map_key']='';
        $result['marker_image']='';
        $result['locations']=Array();

        $temps=MapKey::get();
        if ($temps->first()){
            $map_key=$temps->first();
            $result['map_key']=$map_key->key;
            $result['marker_image']=$this->getImage($map_key->mark_image,'Settings');
        }

        $temps=Locations::all();
        $i=0;
        foreach ($temps as $temp){
            $result['locations'][$i]['id']=$temp->id;
            $result['locations'][$i]['restaurant_name']=$temp->name;
            $result['locations'][$i]['restaurant_address']=$temp->address;
            $result['locations'][$i]['lat']=$temp->lat;
            $result['locations'][$i]['lng']=$temp->lng;
            $result['locations'][$i]['phone']=$temp->phone;
            $result['locations'][$i]['email']=$temp->email;
            $i++;
        }
        return response()->json($result);
    }


    public function addAboutUsInformation(Request $request){
        $temps=AboutUs::all();
        if ($temps->first())
            $about_us_information=$temps->first();
        else
            $about_us_information=new AboutUs;

        $about_us_information->review_mark=$request->input('review_mark');
        $about_us_information->review_title=$request->input('review_title');
        $about_us_information->review_content=$request->input('review_content');
        $about_us_information->review_user_name=$request->input('review_user_name');
        $about_us_information->background_image=$this->uploadImage($request->input('resultBackgroundURL'),'Review','background');
        $about_us_information->bottom_image=$this->uploadImage($request->input('resultBottomURL'),'Review','bottom');
        $about_us_information->save();
        return 'Success';
    }

    public function getAboutUsInformation(){
        $result=Array();
        $temps=AboutUs::all();
        if ($temps->first()){
            $about_us_information=$temps->first();
            $result['review_title']=$about_us_information->review_title;
            $result['review_mark']=$about_us_information->review_mark;
            $result['review_content']=$about_us_information->review_content;
            $result['review_user_name']=$about_us_information->review_user_name;
            $result['background_image']=$this->getImage($about_us_information->background_image,'Review');
            $result['bottom_image']=$this->getImage($about_us_information->bottom_image,'Review');
        }
        return response()->json($result);
    }

    public function addLocationBrands(Request $request){
        $temps=OnlineOrderPage::get();
        if ($temps->first())
            $online_order_page=$temps->first();
        else
            $online_order_page=new OnlineOrderPage;

        $online_order_page->brand_text=$request->input('brand_text');
        $online_order_page->brand_image=$this->uploadImage($request->get('resultImageURL'),'Settings','brand');
        $online_order_page->save();

        LocationBrands::truncate();
        $locations=$request->input('locations');
        foreach ($locations as $location){
            $location_brand=new LocationBrands;
            $location_brand->location_id=$location['location_id'];
            $location_brand->brand_image=$this->uploadImage($location['resultImageURL'],'Settings','location_brand');
            $location_brand->save();
        }
    }

    public function getLocationBrands(){
        $result=Array();
        $result['brand']=Array();
        $result['locations']=Array();

        $temps=OnlineOrderPage::all();
        if($temps->first()){
            $result['brand']['brand_text']=$temps->first()->brand_text;
            if (!is_null($temps->first()->brand_image))
                $result['brand']['brand_image']=$this->getImage($temps->first()->brand_image,'Settings');
        }

        $locations=Locations::get();
        $i=0;
        foreach ($locations as $location){
            $result['locations'][$i]=$location->toArray();
            $result['locations'][$i]['brand_image']='';
            $temps=LocationBrands::where('location_id',$location->id)->get();
            if ($temps->first()){
                if (!is_null($temps->first()->brand_image))
                $result['locations'][$i]['brand_image']=$this->getImage($temps->first()->brand_image,'Settings');
            }
            $i++;
        }
        return response()->json($result);
    }



}
