<?php

/*查询老师表中的所有数据*/

require('init.php');
$sql="SELECT * FROM teacher";
$result=mysqli_query($conn,$sql);
$output=mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($output);





