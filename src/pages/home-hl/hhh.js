//for(var i=0;i<5;i++){
//      setTimeout((num=>{
//        return ()=>{console.log(num)}
//      })(i),1000)
//}
//for(var i=0;i<3;i++){
//  setTimeout((function(n){
//    return function(){
//      console.log(n)
//    }
//  })(i),1000)
//}
//var n=0;
//var timer=setInterval(function(){
//   n++
//  console.log(n)
//  if(n>5){
//    clearInterval(timer)
//  }
//},1000)
//var m=0;
//var timer=setTimeout(function(){
//  m++;
//  if(m<=5){
//    console.log(m)
//    setTimeout(arguments.callee,1000)
//  }else{
//    clearTimeout(timer)
//  }
//},1000)


//for(var i=0;i<imgArray.length;i++){
//  var msg=imgArray[i].img
//  var timer=setTimeout(((n)=>{
//    return ()=>{
//      setInterval(function(){
//        console.log(n)
//      },1000)
//    }
//  })(msg),1000)
//  console.log(imgArray[i].id)
//}
var imgArray=[{"id":1,"img":"assets/images/1.jpg"},
  {"id":2,"img":"assets/images/2.jpg"},
  {"id":3,"img":"assets/images/3.jpg"},
  {"id":4,"img":"assets/images/4.jpg"}]
var n=0
setInterval(()=>{
  img=imgArray[n].img
  n++;
  if(n>=4){
    n=0;
  }
  console.log(img)
},2000);
