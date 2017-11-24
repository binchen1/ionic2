<?php

@$kw = $_REQUEST['kw'];
if(empty($kw))
{
    echo '[]';
    return;
}
require('init.php');

$sql = "SELECT * FROM course WHERE title LIKE '%$kw%' OR details LIKE '%$kw%'";
$result = mysqli_query($conn,$sql);

$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
if(!$list){
  return;
}
$output=$list;
//while(true)
//{
//    $row = mysqli_fetch_assoc($result);
//    if(!$row)
//    {
//        break;
//    }
//    $output[] = $row;
//}

echo json_encode($output);
