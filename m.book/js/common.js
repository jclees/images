(function () {
    // slideMenu()
    scrollTop()
})()
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
function scrollTop(imgUrl) {
    $('.scroll_top').remove()
    $(window).scroll(function () {
        var scroll = $(window).scrollTop()
        if (scroll > 200) {
            $('.scroll_top').remove()
            var newHtml = '<section class="scroll_top"><img src="' + imgUrl + '" /></section>'
            $('body').append(newHtml)
        } else {
            $('.scroll_top').remove()
        }
        $('.scroll_top').on('touchend', function () {
            $('body,html').animate({ scrollTop: 0 }, 500);
        })
    })
}
function changFont(id) {
    //获取para的字体大小
    var thisEle = $(".book_con").css("font-size");
    //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
    var textFontSize = parseFloat(thisEle, 10);
    //javascript自带方法
    var unit = thisEle.slice(-2); //获取单位
    if (id == 0) {
        textFontSize += 2;
        if (textFontSize == 28) {
            return false
        }
    } else if (id == 1) {
        textFontSize -= 2;
        if (textFontSize == 12) {
            return false
        }
    }
    //设置para的字体大小
    $(".book_con").css("font-size", textFontSize + unit);

}
function unfold() {

}
function closeSign() {
    $(".layer").hide()
}
function goReadingBook() {
    window.location.href = 'readingbook.html'
}
function closeMl() {
    $(".ml_list").removeClass("slideInLeft").addClass("slideOutLeft")
    setTimeout(() => {
        $(".main_mlwrap").hide()
    }, 300);
}
function openMl() {
    $(".main_mlwrap").show()
    $(".ml_list").addClass("slideInLeft").removeClass("slideOutLeft")
}