//禁止下拉
var overscroll = function (el) {
	el.addEventListener('touchstart', function () {
		var top = el.scrollTop
			, totalScroll = el.scrollHeight
			, currentScroll = top + el.offsetHeight
		//If we're at the top or the bottom of the containers
		//scroll, push up or down one pixel.
		//
		//this prevents the scroll from "passing through" to
		//the body.
		if (top === 0) {
			el.scrollTop = 1
		} else if (currentScroll === totalScroll) {
			el.scrollTop = top - 1
		}
	})
	el.addEventListener('touchmove', function (evt) {
		//if the content is actually scrollable, i.e. the content is long enough
		//that scrolling can occur
		if (el.offsetHeight < el.scrollHeight)
			evt._isScroller = true
	})
}
overscroll(document.querySelector('.page'));
document.body.addEventListener('touchmove', function (evt) {
	//In this case, the default behavior is scrolling the body, which
	//would result in an overflow.  Since we don't want that, we preventDefault.
	if (!evt._isScroller) {
		evt.preventDefault()
	}
})

var imgurl = [];
var bgimgurl = ['images/page_bg_02.png', 'images/page_bg_03.png', 'images/page_bg_04.png']
$("img").each(function (i, t) {
	imgurl.push($("img").eq(i).attr("src"))
})
imgurl.concat(bgimgurl)
var callbacks = [];
imgLoader(imgurl, function (percentage) {
	// debugger
	var percentT = percentage * 100;
	$('.loading_box .txt').html((parseInt(percentT)) + '%');
	if (percentage == 1) {
		$('.page1').hide().next().show();
	}

	// var i = callbacks.length;
	// callbacks.push(function () {
	// 	setTimeout(function () {
	// 		var percentT = percentage * 100;
	// 		$('.loading_box .txt').html((parseInt(percentT)) + '%');
	// 		if (percentage == 1) {
	// 			setTimeout(function () {
	// 				$('.page1').hide().next().show();
	// 				setTimeout(function () {
	// 					$(".page2_arrow").removeClass("animated fadeInDown").addClass("p2_arrow");
	// 					$(".page2_arrow").attr("style", "");
	// 				}, 19000)
	// 			}, 100);
	// 		}
	// 		callbacks[i + 1] && callbacks[i + 1]();
	// 	}, 100);
	// });

	// if (percentage == 1) {
	// 	callbacks[0]();
	// }

});


// setInterval(function () {
// 	$(".shadow_an").css({ opacity: '0' }).animate({ opacity: '1' }, "normal", "linear");
// }, 1500)

$(".anm_pulse").addClass("animated pulse infinite");
$(".nextShow").on('click', function () {
	// if ($(this).parents().hasClass("page8")) {
	// 	return
	// }

	$(".page").hide();
	let page = $(this).attr("data-page");
	if (page) {
		// debugger
		$(".page" + page).addClass("animated fadeIn").show()
		return
	}
	$(this).parents(".page").next().addClass("animated fadeIn").show();

	if ($(this).parents().hasClass("page3")) {
		// debugger
		var swiper1 = new Swiper('.banner1', {
			pagination: {
				el: '.spot1',
			  },
			on: {
				slideChangeTransitionStart: function () {
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					$(".banner1 .tvgif").addClass("tvoldOpacityChange").css("z-index",200)
					setTimeout(() => {
					$(".banner1 .tvgif").removeClass("tvoldOpacityChange")
					}, 600);
				},
			},
		});
	}
	if ($(this).parents().hasClass("page5")) {
		var swiper2 = new Swiper('.banner2', {
			pagination: {
				el: '.spot2',
			  },
			on: {
				slideChangeTransitionStart: function () {
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					$(".banner2 .tvgif").addClass("tvoldOpacityChange").css("z-index",200)
					setTimeout(() => {
					$(".banner2 .tvgif").removeClass("tvoldOpacityChange")
					}, 600);
				},
			},
		});
	}
	if ($(this).parents().hasClass("page6")) {
		var swiper3 = new Swiper('.banner3', {
			pagination: {
				el: '.spot3',
			  },
			on: {
				slideChangeTransitionStart: function () {
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					$(".banner3 .tvgif").addClass("tvoldOpacityChange").css("z-index",200)
					setTimeout(() => {
					$(".banner3 .tvgif").removeClass("tvoldOpacityChange")
					}, 600);
				},
			},
		});
	}
});
$(".openShare").on("click", function () {
	$(".share").show()
})
$(".cover").on("click", function () {
	$(".share").hide()
})


//滑动处理
var startX, startY;
document.addEventListener('touchstart', function (ev) {
	startX = ev.touches[0].pageX;
	startY = ev.touches[0].pageY;
}, false);

document.addEventListener('touchend', function (ev) {
	if ($('.page2').css('display') == 'none') {
		return
	}
	var endX, endY;
	endX = ev.changedTouches[0].pageX;
	endY = ev.changedTouches[0].pageY;
	var direction = GetSlideDirection(startX, startY, endX, endY);
	switch (direction) {
		case 0:
			// alert("无操作");
			break;
		case 1:
			// 向上
			// alert("up");
			$(".page2").hide().next().addClass("animated fadeIn").show();
			$(".close_music_div").show()
			break;
		case 2:
			// 向下
			// alert("down");
			break;

		default:
	}
}, false);
function GetSlideDirection(startX, startY, endX, endY) {
	var dy = startY - endY;
	//var dx = endX - startX;
	var result = 0;
	if (dy > 0) {//向上滑动
		result = 1;
	} else if (dy < 0) {//向下滑动
		result = 2;
	}
	else {
		result = 0;
	}
	return result;
}

function openmusic() {
	autoPlayMusic();
	audioAutoPlay();
	$(".close_music_div").css({ "display": "block" });
	$(".open_music_div").css({ "display": "none" });
}

function pauseAuto() {
	var audio = document.getElementById('bg-music');
	audio.pause();
	$(".close_music_div").css({ "display": "none" });
	$(".open_music_div").css({ "display": "block" });
}

function audioAutoPlay() {
	var audio = document.getElementById('bg-music');
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function () {
		audio.play();
	}, false);
}
// 音乐播放
function autoPlayMusic() {
	// 自动播放音乐效果，解决浏览器或者APP自动播放问题
	function musicInBrowserHandler() {
		musicPlay(true);
		document.body.removeEventListener('touchstart', musicInBrowserHandler);
	}
	document.body.addEventListener('touchstart', musicInBrowserHandler);
	// 自动播放音乐效果，解决微信自动播放问题
	function musicInWeixinHandler() {
		musicPlay(true);
		document.addEventListener("WeixinJSBridgeReady", function () {
			musicPlay(true);
		}, false);
		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
	}
	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
	var media = document.querySelector('#bg-music');
	if (isPlay && media.paused) {
		media.play();
	}
	if (!isPlay && !media.paused) {
		media.pause();
	}
}