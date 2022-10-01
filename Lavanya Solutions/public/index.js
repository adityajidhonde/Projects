
$(window).scroll(function(){
    $(".c1").css("opacity",  ($(window).scrollTop()) / 110 -1 );
    if($(window).scrollTop()>500){
        $(".c3").css("opacity",  1  );
    }
    else{
    $(".c3").css("opacity",  (($(window).scrollTop()) / 350) - 1  );}
    $(".c2").css("opacity",  $(window).scrollTop() / 180 - 1 );
    console.log( $(window).scrollTop());
});

var x=0;
var bo=['/Screenshot (4).png','/hdvsairbrushmakeup-1585645375.jpg'];
const image = document.createElement('img')
function sl() {
    image.src = bo[x%2];
    document.querySelector('.show').appendChild(image);
    x++;
}
if(x==0){
    sl();
}
var run = setInterval(sl, 8000)
