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
    $(".openMenu").on('click', function () {
        slideout.open();
        setTimeout(function () {
            $(".panel").addClass("clolsemenu")
        }, 500)
        $('.hide').hide()
    })
    $("body").on('click', '.clolsemenu', function () {
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
//         $('.scroll_top').on('click', function () {
//             $('body,html').animate({ scrollTop: 0 }, 500);
//         })
//     })
// }
window.onload = function () {
    alert(111111111111111111112222222)
    
    

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
}
