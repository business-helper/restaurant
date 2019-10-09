<?php 
ini_set( display_errors, 1 ); 
error_reporting( E_ALL ); 
$from = "advancehosttest@gmail.com"; 
$to = "advancehosttest@gmail.com"; 
$subject = "PHP Mail script"; 
$message = "This is a to check the PHP Mail functionality"; 
$headers = "From:" . $from; 
mail($to,$subject,$message, $headers); 
echo "Test email sent"; 
?>
