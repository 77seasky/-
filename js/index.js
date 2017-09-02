/**
 * Created by Administrator on 2017/7/18.
 */

/* 三生 */
$(function(){
    $(".ssd").animate({"left":80},1800);
    $(".ssd .ssd-x").on("click",function(){
        $(".ssd").css("display","none");
    })
})
/* 代金券隐藏  */
//var imgx = document.getElementById("imgx");
//var iconx = imgx.children[1].children[0];
//iconx.onclick = function(){
//        imgx.style.display = "none";
//    }
/* 代金券隐藏  */
$(function(){
     $("#imgx").children(".icon-xx").children("img").on("click",function(){
         $("#imgx").css("display","none");
     })
})
/* 代金券显示  */
$(function(){
    $("#bg").on("click",function(){
        $("#imgx").css("display","block");
    })
})
/* 代金券动画显示显示  */
$(function(){
    $("#imgx").animate({"right":180},1800);
})


/* 固定登录righ */
$(function(){
    $("#bg").hover(function(){
        $(this).css("width",160).css("height",160).css("box-shadow","0px 0px 8px 8px green");
    },function(){
        $(this).css("width","").css("height","").css("box-shadow","");
    });
})

/* 导航tbl 下拉  */
$(function() {
    var arr = []
    $(".topnav .nav-1>li").on("mouseover",function(){
        $(this).children(".tbl").stop().slideDown(300);
    });
    $(".topnav .nav-1>li").on("mouseout",function(){
        $(this).children(".tbl").stop().slideUp(300);
    });
})

/* shishang 手风琴*/
$(function(){
    $("#items>li").hover(function () {
        $(this).siblings().stop().animate({"width":100},600);
        $(this).stop().animate({"width":700},600);
        //console
    },function () {
        $("#items>li").stop().animate({width:200},600);
    });
})


/* 轮播--时尚态度系列banner */
$(function(){
    $("#box .b2 li").on("mouseover",function(){
       var index = $(this).index();
        $("#box .b1 li").eq(index).fadeIn().siblings().fadeOut();
    })
})



//突出显示
$(function(){
    $(".item").hover(function () {
        $(this).children().eq(0).css("width",320).css("height",320).css("left","-20px").css("top","-20px").css("z-index",1).css("box-shadow","0px 0px 10px 10px #ff6").css("border-radius","10px");
    },function () {
        $(this).children().eq(0).css("width",296).css("height",296).css("left","0").css("top","0").css("z-index",0).css("box-shadow","");
    });
});








