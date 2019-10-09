<?php
/**
 * Created by PhpStorm.
 * User: bai
 * Date: 6/7/2019
 * Time: 12:10 AM
 */

namespace App\Traits;


trait ImageOperation
{
    public function uploadImage($image_object,$directory=null,$prefix=null){
        $file_name=null;
        if ($image_object){
            $file=$image_object;
            try{
                $file_name = $prefix.microtime().'.' . explode('/', explode(':', substr($file, 0, strpos($file, ';')))[1])[1];
                if(!is_null($directory))
                    \Image::make($image_object)->save(public_path("Images/$directory/").$file_name);
                else
                    \Image::make($image_object)->save(public_path("Images/").$file_name);
            }catch(\Exception $e){
                $file_name='No Image';
            }
        }
        return $file_name;
    }

    public function getImage($key,$directory=null){
        $image=null;
        if (!is_null($key)){
            if (is_null($directory))
                $image=url("public/Images/$key");
            else
                $image=url("public/Images/$directory/$key");
        }
        return $image;

    }


}