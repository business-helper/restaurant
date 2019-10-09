<?php

namespace App\Http\Controllers\Api;

use App\Model\SettingOption;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Model\Admin;
use App\Model\Employee;
use App\Model\Customer;
use App\Model\Restaurant;

use Validator;

use App\Traits\ImageOperation;



class LoginController extends Controller
{
    use ImageOperation;

    public function adminRegister(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:admins',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()]);
        }

        $admin=new Admin;
        $admin->name=$request->input('name');
        $admin->password=bcrypt($request->input('password'));
        $admin->email=$request->input('email');
        $admin->phone_number=$request->input('phone_number');

        if ($request->get('profile_picture')){
            $file=$request->get('profile_picture');
            $file_name = time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('profile_picture'))->save(public_path('Images/').$file_name);
            $admin->profile_picture=$file_name;
        }

        $admin->save();
        $success=Array();
        $success['token']="Bearer ".$admin->createToken('restaurant admin')->accessToken;

        $user=Array();
        $user['name']=$admin->name;

        if (!is_null($admin->profile_picture))
            $user['picture']=url('/public/Images/'.$admin->profile_picture);
        else
            $user['picture']=url('/public/Images/prf4.jpg');

        $user['job']="Restaurant Manager";
        $success['user']=$user;

        return response()->json([
           'status'=>'success',
           'data'=>$success
        ]);
    }

    public function adminLogin(Request $request){
        if(Auth::guard('admin')->attempt(['email' => request('email'), 'password' => request('password')])){
            $admin = Auth::user();
            $success['token'] =  "Bearer ".$admin->createToken('restaurant admin')->accessToken;
            $user=Array();
            $user['name']=$admin->name;
            if (!is_null($admin->profile_picture))
                $user['picture']=url('/public/Images/'.$admin->profile_picture);
            else
                $user['picture']=url('/public/Images/prf4.jpg');
            $user['job']="Restaurant Manager";
            $success['user']=$user;

            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }

    public function restaurantRegister(Request $request){
        $restaurant_id=$request->input('restaurant_id');
        if(is_null($restaurant_id))
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required|email|unique:restaurants',
                'password' => 'required',
                'password_confirmation' => 'required|same:password',
            ]);
        else
            $validator = Validator::make($request->all(), [
                'name' => 'required',
            ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()]);
        }
        if(!is_null($restaurant_id))
            $restaurant=Restaurant::find($restaurant_id);
        else
            $restaurant=new Restaurant;
        $restaurant->owner_name=$request->input('name');
        $password=$request->input('password');
        if(!is_null($password))
            $restaurant->password=bcrypt($password);
        $restaurant->email=$request->input('email');
        $restaurant->phone_number=$request->input('phone_number');
        $restaurant->lat=$request->input('latitude');
        $restaurant->lng=$request->input('longitude');
        $restaurant->stripe_public_key=$request->input('public_key');
        $restaurant->stripe_secret_key=$request->input('private_key');
        $restaurant->address=$request->input('restaurant_address');
        $restaurant->restaurant_name=$request->input('restaurant_name');
        $restaurant->theme=$request->input('theme');
        $state=$request->input('state');
        $restaurant->active=$state;
        $restaurant->save();
        $success=Array();
        $success['token']="Bearer ".$restaurant->createToken('restaurant admin')->accessToken;

        $user=Array();
        $user['name']=$restaurant->name;
        $user['job']="Restaurant Manager";
        $success['user']=$user;

        return response()->json([
            'status'=>'success',
            'data'=>$success
        ]);
    }


    public function restaurantLogin(Request $request){
        if(Auth::guard('restaurant')->attempt(['email' => request('email'), 'password' => request('password')])){
            $restaurant = Auth::guard('restaurant')->user();
            $success['token'] =  "Bearer ".$restaurant->createToken('restaurant admin')->accessToken;
            $user=Array();
            $user['name']=$restaurant->owner_name;
            if (!is_null($restaurant->owner_profile))
                $user['picture']=url('/public/Images/'.$restaurant->owner_profile);
            else
                $user['picture']=url('/public/Images/prf4.jpg');
            $user['job']="Restaurant Manager";
            $success['user']=$user;
            $success['restaurant']=$restaurant;

            $temps=SettingOption::where([['restaurant_id','=',$restaurant->id],['option_name','=','logo']])->get();
            if ($temps->first()){
                $setting=$temps->first();
                if ($setting->option_value)
                    $success['restaurant']->logo=url('public/Images/Icons/'.$setting->option_value);
            }
            else
                $success['restaurant']->logo="";

            return response()->json([
                'status' => 'success',
                'data' => $success,
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }




    public function employeeRegister(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:employees',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()]);
        }

        $employee=new Employee();
        $employee->name=$request->input('name');
        $employee->password=bcrypt($request->input('password'));
        $employee->email=$request->input('email');
        $employee->phone_number=$request->input('phone_number');
        $employee->job=$request->input('job');
        $employee->gender=$request->input('gender');
        $employee->birthday=$request->input('birthday');
        $employee->location_id=$request->input('location_id');

        if ($request->get('profile_picture')){
            $file=$request->get('profile_picture');
            $file_name = time().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
            \Image::make($request->get('profile_picture'))->save(public_path('Images/').$file_name);
            $employee->profile_picture=$file_name;
        }


        $employee->save();
        $success=Array();
        $success['token']="Bearer ".$employee->createToken('restaurant employee')->accessToken;
        return response()->json([
            'status'=>'success',
            'data'=>$success
        ]);
    }


    public function employeeLogin(Request $request){
        if(Auth::guard('employee')->attempt(['email' => request('email'), 'password' => request('password')])){
            $emplyoee = Auth::guard('employee')->user();
            $success['token'] =  "Bearer ".$emplyoee->createToken('restaurant employee')->accessToken;
            $success['employee_data']=$emplyoee->toArray();
            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }

    public function customerRegister(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:customers',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()]);
        }


        $customer=new Customer();
        $customer->name=$request->input('name');
        $customer->password=bcrypt($request->input('password'));
        $customer->email=$request->input('email');
        $customer->phone_number=$request->input('phone_number');
        $customer->birthday=$request->input('birthday');
        $customer->profile_picture=$this->uploadImage($request->get('resultImageURL'),'ProfileImages/Customer');
        $customer->save();
        $success=Array();
        $success['id']=$customer->id;
        $success['token']="Bearer ".$customer->createToken('restaurant customer')->accessToken;
        $success['name']=$customer->name;
        $success['email']=$customer->email;
        $success['phone_number']=$customer->phone_number;

        if (!is_null($customer->profile_picture))
            $success['profile_picture']=url('public/Images/ProfileImages/Customer/'.$customer->profile_picture);
        else
            $success['profile_picture']=url('public/Images/ProfileImages/Customer/avatar.jpg');

        return response()->json([
            'status'=>'success',
            'data'=>$success
        ]);
    }

    public function customerLogin(Request $request){
        if(Auth::guard('customer')->attempt(['email' => request('email'), 'password' => request('password')])){
            $customer = Auth::guard('customer')->user();
            $success['id']=$customer->id;
            $success['token'] =  "Bearer ".$customer->createToken('restaurant customer')->accessToken;
            $success['name']=$customer->name;
            $success['email']=$customer->email;
            $success['phone_number']=$customer->phone_number;
            if (!is_null($customer->profile_picture))
                $success['profile_picture']=url("public/Images/ProfileImages/Customer/".$customer->profile_picture);
            else
                $success['profile_picture']=url('public/Images/ProfileImages/Customer/avatar.jpg');

            return response()->json([
                'status' => 'success',
                'data' => $success
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => 'Unauthorized Access'
            ]);
        }
    }

    public function customerLogout(){
        $customer=Auth::guard('customer-api')->user();
        $customer->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }









}
