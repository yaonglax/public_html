<?
    $email_admin = "sale@gkbts.ru";

    if(isset($_POST['name']) && isset($_POST['phone'])){
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        
        $subject = "[ЖБИ - плита]\n\n";
        $message = "Поступила заявка:
        \nИмя: $name,
        \nТелефон: $phone";
        $header = 'Content-type: text/plain; charset="utf-8"';
        mail($email_admin,$subject,$message,$header);   
    }

?>
