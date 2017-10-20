$(function() {
	//当滚动条的位置处于距顶部100像素时，链接出现
	$(window).scroll(function(){
		if ($(window).scrollTop()>100){
            $("#backTop").fadeIn(1500);
        }else{
            $("#backTop").fadeOut(1500);
        }
	})
	//当点击跳转链接后，回到页面顶部位置
    $("#backBtn").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
    $(window).resize(function(){
        location.reload();
    });
})