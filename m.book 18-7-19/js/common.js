(function () {
    // slideMenu()
    // scrollTop()
})()
var styleFlag = true
function slideMenu() {
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });
    $(".openMenu").on('touchend', function () {
        slideout.open();
        setTimeout(function () {
            $(".panel").addClass("clolsemenu")
        }, 500)
        $('.hide').hide()
    })
    $("body").on('touchend', '.clolsemenu', function () {
        slideout.close();
        $(".clolsemenu").removeClass('clolsemenu')
        $('.hide').show()
    });
    slideout.disableTouch();
}
// function scrollTop(imgUrl) {
//     $('.scroll_top').remove()
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop()
//         if (scroll > 200) {
//             $('.scroll_top').remove()
//             var newHtml = '<section class="scroll_top"><img src="' + imgUrl + '" /></section>'
//             $('body').append(newHtml)
//         } else {
//             $('.scroll_top').remove()
//         }
//         $('.scroll_top').on('touchend', function () {
//             $('body,html').animate({ scrollTop: 0 }, 500);
//         })
//     })
// }
$(".unfold").on("touchend", function () {
    var tempintro = $(this).children("span").text()
    var intro = tempintro.substring(0,37)
    console.log(intro)
})
$(".closeSign").on("touchend", function () {
    $(".layer").hide()
})
$(".goReadingBook").on("touchend", function () {
    window.location.href = 'readingbook.html'
})
$(".goBookQuan").on("touchend", function () {
    window.location.href = 'mybookquan.html'
})
$(".openMl").on("touchend", function () {
    $(".ml_list").removeClass("slideOutLeft").addClass("slideInLeft")
    setTimeout(() => {
        $(".main_mlwrap").show()
    }, 300);
})
$(".closeMl").on("touchend", function () {
    $(".ml_list").removeClass("slideInLeft").addClass("slideOutLeft")
    setTimeout(() => {
        $(".main_mlwrap").hide()
    }, 300);
})
$(".openSet").on("touchend", function () {
    $(".set_con").removeClass("slideOutDown").addClass("slideInUp")
    setTimeout(() => {
        $(".set_wrap").show()
    }, 300);
})
$(".closeSet").on("touchend", function () {
    $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
    setTimeout(() => {
        $(".set_wrap").hide()
    }, 300);
})
$(".openPlmsg").on("touchend", function () {
    $(".plmsg_wrap").show()
})
$(".closePlmsg").on("touchend", function () {
    $(".plmsg_wrap").hide()
})
$(".changeFont").on("touchend", function () {
    var id = $(this).attr('data-id')
    //获取para的字体大小
    var thisEle = $(".book_con > p").css("font-size");
    //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
    var textFontSize = parseFloat(thisEle, 10);
    //javascript自带方法
    var unit = thisEle.slice(-2); //获取单位
    if (id == 0) {
        if (textFontSize == 12) {
            return false
        }
        textFontSize -= 2;

    } else if (id == 1) {
        if (textFontSize == 24) {
            return false
        }
        textFontSize += 2;
    }
    //设置para的字体大小
    $(".book_con > p").css("font-size", textFontSize + unit);
})
$(".changeNight").on("touchend", function () {
    if(styleFlag){
        $(".skin").addClass("dark-box")
        $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
         setTimeout(() => {
             $(".set_wrap").hide()
         }, 300);
         styleFlag= false
    }else{
        $(".skin").removeClass("dark-box")
        $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
         setTimeout(() => {
             $(".set_wrap").hide()
         }, 300);
        styleFlag= true
    }
   
})
$(".bookq_tabs > a").on("touchend", function () {
    var index = $(this).index()
    $(this).addClass("active").siblings().removeClass("active")
    $(".bookq_con > div").eq(index).show().siblings().hide()
})

$(window).scroll(function () {
    // $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
    // setTimeout(() => {
    //     $(".set_wrap").hide()
    // }, 300);
})
//滚动时保存滚动位置
// $(window).scroll(function(){
//     if($(document).scrollTop()!=0){
//       sessionStorage.setItem("offsetTop", $(window).scrollTop());
//     }
//   });
//   //onload时，取出并滚动到上次保存位置
//   window.onload = function(){
//     var offset = sessionStorage.getItem("offsetTop");
//     $(document).scrollTop(offset);
//   };