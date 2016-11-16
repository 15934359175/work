$(function(){
   $(".banner .jiahao").click(function(){
       var that= $(this);
       $(this).css({
           transform:"rotate(45deg)",
       });
       $(".banner .imgbox").animate({width:"75%"},500);
       $(".banner .smallbox").slideDown(500,function(){
           that.css("display","none")
       });
});


    // var w=$(window).width();
     var h=$(window).height();
    $(".banner").css({

        height:h
    });


    var num=0;
   function mover(type){
       type=type||"right"
       if(type=="right"){
           num++;
           if(num==3){
               num=0;
           }
           $(".imgbox .image").css("opacity","0");
           $(".imgbox .image").eq(num).animate({opacity:1});
           $(".btns .btn-list").css("background","#ccc");
           $(".btns .btn-list").eq(num).css("background","#E61736");
       }
       if(type=="left"){
           num--;
           if(num==-1){
               num=2;
           }
           $(".imgbox .image").css("opacity","0");
           $(".imgbox .image").eq(num).animate({opacity:1});
           $(".btns .btn-list").css("background","#ccc");
           $(".btns .btn-list").eq(num).css("background","#E61736");
       }

   }
    var t1=setInterval(mover,3000);

    $(".btns .btn-list").mouseover(function(){
        clearInterval(t1);
        var index=$(this).index();
        $(".imgbox .image").css("opacity",0);
        $(".imgbox .image").eq(index).animate({opacity:1});
        $(".btns .btn-list").css("background","#ccc");
        $(this).css("background","#E61736");
        num=index;
    }).mouseout(function(){
        t1=setInterval(mover,3000);
    });




    $(".imgbox .imgbox-left").mouseover(function(){
        clearInterval(t1);
    }).mouseout(function(){
        t1=setInterval(mover,3000);
    });
    $(".imgbox .imgbox-right").mouseover(function(){
        clearInterval(t1);
    }).mouseout(function(){
        t1=setInterval(mover,3000);
    });


    $(".imgbox-left .leftbtn").click(function(){
        mover("left");
    })
    $(".imgbox-right .rightbtn").click(function(){
        mover("right");
    })


    setInterval(function(){
        var height=$(".smallbox").height();
        $(".smallbox div").css("line-height",height*0.333+"px")
    },300);


})