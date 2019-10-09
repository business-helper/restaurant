<!doctype html>
<html>
    <body>
        <div style="height: 100%;">
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Order Email</title>
                <style type="text/css">
                    .ReadMsgBody { width: 100%; background-color: #ffffff; }
                    .ExternalClass { width: 100%; background-color: #ffffff; }
                    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
                    html { width: 100%; }
                    body { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; margin: 0; padding: 0; font-family: 'Open Sans', Arial, Sans-serif !important; }
                    table { border-spacing: 0; table-layout: auto; margin: 0 auto; }
                    img { display: block !important; overflow: hidden !important; }
                    .yshortcuts a { border-bottom: none !important; }
                    img:hover { opacity: 0.9 !important; }
                    a { color: #4a4a4a; text-decoration: none; }
                    .textbutton a { font-family: 'open sans', arial, sans-serif !important;}
                    .btn-link a { color:#FFFFFF !important;}

                    /*Responsive*/
                    @media only screen and (max-width: 640px) {
                        body { margin: 0px; width: auto !important; font-family: 'Open Sans', Arial, Sans-serif !important;}
                        .table-inner { width: 90% !important;  max-width: 90%!important;}
                        .table-full { width: 100%!important; max-width: 100%!important; text-align: center !important;}
                    }
                    @media only screen and (max-width: 479px) {
                        body { width: auto !important; font-family: 'Open Sans', Arial, Sans-serif !important;}
                        .table-inner{ width: 90% !important; text-align: center !important;}
                        .table-full { width: 100%!important; max-width: 100%!important; text-align: center !important;}
                        /*gmail*/
                        u + .body .full { width:100% !important; width:100vw !important;}
                    }
                </style>

                <!-- header -->
{{--                <table class="full" bgcolor="#f8f8f8" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">--}}
                <table class="full" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td align="center">
                            <table width="600" style="max-width: 600px" class="table-full" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                    <td align="center" style="background: #f8f8f8">
                                        <table width="200" class="table-full" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tbody><tr>
                                                <td data-bgcolor="Logo BG" bgcolor="#607e9d" align="center">
                                                    <table width="80%" class="table-inner" border="0" align="center" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <td height="20"></td>
                                                        </tr>
                                                        <!-- logo -->
                                                        <tr>
                                                            <td align="center" style="line-height:0px;">
                                                                <img style="display:block;width:100px; height:100px;border-radius:50%;"
                                                                     src="{{$restaurant->logo}}"
                                                                     alt="logo"
                                                                >

                                                            </td>
                                                        </tr>
                                                        <!-- end logo -->
                                                        <tr>
                                                            <td height="20"></td>
                                                        </tr>
                                                        <!-- company name -->
                                                        <tr>
                                                            <td data-color="Company Text" data-size="Title" style="font-family: 'Open Sans', Arial, sans-serif; font-size:16px; color:#FFFFFF; line-height:26px; font-weight: bold;">
                                                                <singleline label="company name">{{$restaurant->restaurant_name}}</singleline>
                                                            </td>
                                                        </tr>
                                                        <!-- end company name -->
                                                        <tr>
                                                            <td height="5"></td>
                                                        </tr>
                                                        <!-- address -->
                                                        <tr>
                                                            <td data-color="Company Text" data-size="Address" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#FFFFFF; line-height:22px;">
                                                                <multiline label="address">{{$restaurant->restaurant_name}}</multiline>
                                                            </td>
                                                        </tr>
                                                        <!-- end address -->
                                                        <tr>
                                                            <td height="25"></td>
                                                        </tr>
                                                        </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!--[if (gte mso 9)|(IE)]></td><td><![endif]-->
                                        <table width="400" class="table-full" border="0" align="right" cellpadding="0" cellspacing="0">
                                            <tbody><tr>
                                                <td align="center">
                                                    <table width="90%" class="table-inner" border="0" align="center" cellpadding="0" cellspacing="0">
                                                        <tbody><tr>
                                                            <td height="30"></td>
                                                        </tr>
                                                        <!-- title -->
                                                        <tr>
                                                            <td data-size="Invoice" data-color="Invoice" align="right" style="font-family: 'Open Sans', Arial, sans-serif; font-size:30px; color:#3b3b3b; line-height:26px;">
                                                                <singleline label="title">INVOICE</singleline>
                                                            </td>
                                                        </tr>
                                                        <!-- end title -->
                                                        <tr>
                                                            <td height="25"></td>
                                                        </tr>
                                                        <!--dash-->
                                                        <tr>
                                                            <td align="right">
                                                                <table data-width="Dash" align="right" width="80" border="0" cellpadding="0" cellspacing="0">
                                                                    <tbody><tr>
                                                                        <td data-bgcolor="Dash" bgcolor="#ff646a" height="3"></td>
                                                                    </tr>
                                                                    </tbody></table>
                                                            </td>
                                                        </tr>
                                                        <!--end dash-->
                                                        <tr>
                                                            <td height="15"></td>
                                                        </tr>
                                                        <!-- company name -->
                                                        <tr>
                                                            <td data-color="Customer Text" data-size="Customer Title" align="right" style="font-family: 'Open Sans', Arial, sans-serif; font-size:16px; color:#3b3b3b; line-height:26px; font-weight: bold;">
                                                                <singleline label="company name">{{$order->customer_name}}</singleline>
                                                            </td>
                                                        </tr>
                                                        <!-- end company name -->
                                                        <tr>
                                                            <td height="5"></td>
                                                        </tr>
                                                        <!-- address -->
                                                        <tr>
                                                            <td data-color="Customer Text" data-size="Address" align="right" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#7f8c8d; line-height:26px;">
                                                                <multiline label="address">
                                                                    Email : <span style="color:#3b3b3b"> <strong>{{$order->customer_email}}</strong> </span>
                                                                    <br> Phone number : <span style="color:#3b3b3b"> <strong>{{$order->customer_phone_number}}</strong> </span></multiline>
                                                            </td>
                                                        </tr>
                                                        <!-- end address -->
                                                        <tr>
                                                            <td height="25"></td>
                                                        </tr>
                                                        </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody></table>
                <!-- end header -->
                <!-- title -->
                <table class="full" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/thumbnails/title.jpg" data-module="title" data-bgcolor="Main BG" mc:repeatable="layout" mc:hideable="" mc:variant="title" width="100%" align="center" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                        <td align="center">
                            <table align="center" width="600" style="max-width:600px;" class="table-full" border="0" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                    <td height="50"></td>
                                </tr>
                                <!-- header -->
                                <tr>
                                    <td>
                                        <table class="table-inner" width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody><tr>
                                                <td data-size="Title" data-color="Title"  width="263" align="left" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#3b3b3b; line-height:26px; text-transform:uppercase;">
                                                    <singleline label="title-1">description</singleline>
                                                </td>
                                                <td data-size="Title" data-color="Title"  width="87" align="left" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#3b3b3b; line-height:26px; text-transform:uppercase;">
                                                    <singleline label="title-2">PRICE</singleline>
                                                </td>
                                                <td data-size="Title" data-color="Title" width="87" align="center" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#3b3b3b; line-height:26px; text-transform:uppercase;">
                                                    <singleline label="title-3">AMOUNT</singleline>
                                                </td>
                                                <td data-size="Title" data-color="Title" width="87" align="right" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#3b3b3b; line-height:26px; text-transform:uppercase;">
                                                    <singleline label="title-4">TOTAL</singleline>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                <!-- end header -->
                                <tr>
                                    <td data-border-size="Title Underline" data-border-color="Title Underline" height="10" style="border-bottom:3px solid #bcbcbc;"></td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
                <!-- end title -->
                <!-- list -->
                <table class="full" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/thumbnails/list.jpg" data-module="list" data-bgcolor="Main BG" mc:repeatable="layout" mc:hideable="" mc:variant="list" align="center" width="100%" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                        <td align="center">
                            <table width="600" style="max-width: 600px;" class="table-full" border="0" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                    <td height="25"></td>
                                </tr>
                                @foreach($order->order_content as $item)
                                    <tr>
                                        <td align="center">
                                            <table width="100%" class="table-inner" border="0" cellspacing="0" cellpadding="0">
                                                <tbody><tr>
                                                    <td data-size="list" data-color="list"  width="263" align="left" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:14px; color:#3b3b3b; line-height:26px;  font-weight: bold;">
                                                        <singleline label="list-1">{{$item['productData']['name']}}</singleline>
                                                    </td>
                                                    <td data-size="list" data-color="list" width="87" align="left" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:14px; color:#3b3b3b; line-height:26px;  font-weight: bold;">
                                                        <singleline label="list-2">${{$item['price']/$item['qty']}}</singleline>
                                                    </td>
                                                    <td data-size="list" data-color="list" width="87" align="center" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:14px; color:#3b3b3b; line-height:26px;  font-weight: bold;">
                                                        <singleline label="list-3">{{$item['qty']}}</singleline>
                                                    </td>
                                                    <td data-size="list" data-color="list" width="87" align="right" valign="top" style="font-family: 'Open Sans', Arial, sans-serif; font-size:14px; color:#3b3b3b; line-height:26px;  font-weight: bold;">
                                                        <singleline label="list-4">${{$item['price']}}</singleline>
                                                    </td>
                                                </tr>
                                                </tbody></table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td data-border-size="List Border" data-border-color="List Border" height="5" style="border-bottom:1px solid #ecf0f1;"></td>
                                    </tr>
                                    <tr>
                                        <td height="5"></td>
                                    </tr>
                                @endforeach
                                <!-- detail -->
                                <tr>
                                    <td align="center">
                                        <table class="table-inner" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                            <tbody>
                                            <tr>
                                                <td data-size="list" data-color="list"
                                                    style="font-family: 'Open Sans', Arial, sans-serif; font-size:18px; color:#333; line-height:46px;text-align: right">
                                                    <multiline labe="detail">Sub Total: <strong>${{$order->amount-$order->sales_tax}}</strong></multiline>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                <!-- end detail -->
                                </tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
                <!-- end list -->
                <!-- total -->
                <table class="full" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/thumbnails/total.jpg" data-module="total" data-bgcolor="Main BG" mc:repeatable="layout" mc:hideable="" mc:variant="total" align="center" width="100%" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                        <td align="center">
                            <table width="600" class="table-full" style="max-width: 600px;" align="center" border="0" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                    <td data-border-size="Total Border" data-border-color="Total Border" style="border-bottom:3px solid #3b3b3b;"></td>
                                </tr>
                                </tbody></table>
                            <table align="center" width="600" style="max-width: 600px;" class="table-full" border="0" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                    <td height="15"></td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <table width="400" class="table-full" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tbody><tr>
                                                <td data-bgcolor="Texs BG" bgcolor="#f8f8f8" align="center">
                                                    <table class="table-inner" align="center" width="90%" border="0" cellpadding="0" cellspacing="0">
                                                        <tbody><tr>
                                                            <td height="10"></td>
                                                        </tr>
                                                        <tr>
                                                            <td data-size="Texs Title" data-color="Texs Text"  style="font-family: 'Open Sans', Arial, sans-serif; font-size:12px; color:#3b3b3b; line-height:26px; text-transform:uppercase;line-height:24px;">
                                                                <singleline label="title">taxes / fees</singleline>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td data-size="Texs Total" data-color="Texs Text"
                                                                style="font-family: 'Open Sans', Arial, sans-serif; font-size:24px; color:#3b3b3b;  font-weight: bold;">
                                                                <singleline label="price">${{$order->sales_tax}}</singleline>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15"></td>
                                                        </tr>
                                                        </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                        <!--[if (gte mso 9)|(IE)]></td><td><![endif]-->
                                        <table width="200" class="table-full" border="0" align="right" cellpadding="0" cellspacing="0">
                                            <tbody><tr>
                                                <td data-bgcolor="Total BG" align="center" bgcolor="#e1e6e7">
                                                    <table class="table-inner" width="80%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                        <tbody><tr>
                                                            <td height="10"></td>
                                                        </tr>
                                                        <tr>
                                                            <td data-size="Total Title" data-color="Total Text"
                                                                style="font-family: 'Open Sans', Arial, sans-serif; font-size:12px; color:#3b3b3b; line-height:26px; text-transform:uppercase;line-height:24px;text-align: center">
                                                                <singleline label="title">Total</singleline>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td data-size="Total Sum" data-color="Total Text"  style="font-family: 'Open Sans', Arial, sans-serif; font-size:24px; color:#3b3b3b;  font-weight: bold;text-align: center">
                                                                <singleline label="price">${{$order->amount}}</singleline>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td height="15"></td>
                                                        </tr>
                                                        </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="15"></td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
                <!-- end total -->
                <!-- note -->
                <table class="full" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/thumbnails/note.jpg" data-module="note" data-bgcolor="Main BG" align="center" width="100%" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                        <td align="center">
                            <table align="center" border="0" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                    <td width="600" align="center">
                                        <table align="center" width="100%" class="table-inner" border="0" cellspacing="0" cellpadding="0">
                                            <tbody><tr>
                                                <td height="40"></td>
                                            </tr>
                                            <!-- title -->
                                            <tr>
                                                <td data-size="Title" data-color="Title"  align="left" style="font-family: 'Open Sans', Arial, sans-serif; font-size:16px; color:#3b3b3b; line-height:26px;  font-weight: bold; text-transform:uppercase">
                                                    <singleline label="title">Notes</singleline>
                                                </td>
                                            </tr>
                                            <!-- end title -->
                                            <tr>
                                                <td height="5"></td>
                                            </tr>
                                            <!-- content -->
                                            <tr>
                                                <td data-size="Content" data-color="Content" align="left" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#7f8c8d; line-height:26px;">
                                                    <multiline label="content">
                                                        @if($order_status=='received')
                                                            <strong style="color:#333; font-size:15px">Dear {{$order->customer_name}}.</strong>
                                                            <br>
                                                            We received order #{{$order->id}} and are working on it now
                                                            Your order is in pending state. We will send email as soon as your order accepted
                                                        @elseif($order_status=='accepted')
                                                            <strong style="color:#333; font-size:15px">Dear {{$order->customer_name}}.</strong>
                                                            <br>
                                                            Your order #{{$order->id}} has been accepted by <strong>{{$restaurant->restaurant_name}}.</strong>
                                                            We will send email as soon as your order completed
                                                        @elseif($order_status=='rejected')
                                                            <strong style="color:#333; font-size:15px">Dear {{$order->customer_name}}.</strong>
                                                            <br>
                                                            Sorry for giving you inconvenience.
                                                            <br>Your order #{{$order->id}} has been rejected by <strong>{{$restaurant->restaurant_name}}.</strong>
                                                            <br>Reason: {{$reject_reason=='' ? 'Unknown'  : "$reject_reason"}}
                                                        @elseif($order_status=='completed')
                                                            <strong style="color:#333; font-size:15px">Dear {{$order->customer_name}}.</strong>
                                                            <br>
                                                            Your order #{{$order->id}} has been prepared by <strong>{{$restaurant->restaurant_name}}.</strong>
                                                            <br>Please come and take your order.
                                                            <br></br>Thanks.
                                                        @endif
                                                    </multiline>
                                                </td>
                                            </tr>
                                            <!-- end content -->
                                            <tr>
                                                <td data-border-size="Note Underline" data-border-color="Note Underline" height="15" style="border-bottom:3px solid #bcbcbc;"></td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    </tbody></table>
                <!-- end note -->
                <!-- footer -->
                <table class="full" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/thumbnails/footer.jpg" data-module="footer" data-bgcolor="Main BG" align="center" width="100%" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0">
                    <tbody><tr>
                        <td data-border-size="Footer Border" data-border-color="Footer Border" align="center" style="border-bottom:10px solid #ecf0f1;">
                            <table width="600" style="max-width: 600px;" class="table-full" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody><tr>
                                    <td height="25"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <!--left-->
                                        <table width="180" class="table-full" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td align="center">
                                                        <table width="90%" align="center" border="0" cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" style="line-height:0px;">
                                                                        <img data-color="Phone icon" editable="" label="image"
                                                                             style="display:block;font-size:0px; border:0px; line-height:0px;"
                                                                             src="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/images/phone.png" alt="img">
                                                                    </td>
                                                                    <td data-size="Footer" data-color="Footer" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#3b3b3b; line-height:26px; padding-left:15px;">
                                                                        <singleline label="detail">{{$restaurant->phone_number}}</singleline>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!--end left-->
                                        <!--[if (gte mso 9)|(IE)]></td><td><![endif]-->
                                        <table width="25" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tbody><tr>
                                                <td height="15"></td>
                                            </tr>
                                            </tbody></table>
                                        <!--[if (gte mso 9)|(IE)]></td><td><![endif]-->
                                        <!--middle-->
                                        <table width="180" class="table-full" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tbody><tr>
                                                <td align="center">
                                                    <table width="90%" align="center" border="0" cellpadding="0" cellspacing="0">
                                                        <tbody><tr>
                                                            <td align="center" style="line-height:0px;">
                                                                <img data-color="Mail icon" editable="" label="image" style="display:block;font-size:0px; border:0px; line-height:0px;" src="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2019/02/20/UD6QkEHvhAcKF0B1SJY4WPmz/Invoice/images/mail.png" alt="img">
                                                            </td>
                                                            <td data-size="Footer" data-color="Footer" style="font-family: 'Open Sans', Arial, sans-serif; font-size:13px; color:#3b3b3b; line-height:26px;padding-left: 15px;">
                                                                <singleline label="detail">{{$restaurant->email}}</singleline>
                                                            </td>
                                                        </tr>
                                                        </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                        <table width="25" align="left" border="0" cellpadding="0" cellspacing="0">
                                            <tbody>
                                                <tr>
                                                    <td height="15"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="25"></td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>


