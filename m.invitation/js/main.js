//禁止下拉
// var overscroll = function (el) {
// 	el.addEventListener('touchstart', function () {
// 		var top = el.scrollTop
// 			, totalScroll = el.scrollHeight
// 			, currentScroll = top + el.offsetHeight
// 		//If we're at the top or the bottom of the containers
// 		//scroll, push up or down one pixel.
// 		//
// 		//this prevents the scroll from "passing through" to
// 		//the body.
// 		if (top === 0) {
// 			el.scrollTop = 1
// 		} else if (currentScroll === totalScroll) {
// 			el.scrollTop = top - 1
// 		}
// 	})
// 	el.addEventListener('touchmove', function (evt) {
// 		//if the content is actually scrollable, i.e. the content is long enough
// 		//that scrolling can occur
// 		if (el.offsetHeight < el.scrollHeight)
// 			evt._isScroller = true
// 	})
// }
// overscroll(document.querySelector('.body'));
// document.body.addEventListener('touchmove', function (evt) {
// 	//In this case, the default behavior is scrolling the body, which
// 	//would result in an overflow.  Since we don't want that, we preventDefault.
// 	if (!evt._isScroller) {
// 		evt.preventDefault()
// 	}
// })


// var imgurl = [];
var imgurl = ['images/page_bg_02.png', 'images/page_bg_03.png', 'images/page_bg_04.png']
$("img").each(function (i, t) {
	imgurl.push($("img").eq(i).attr("src"))
})
console.log(imgurl)
var callbacks = [];
imgLoader(imgurl, function (percentage) {
	// debugger
	// var percentT = percentage * 100;
	// $('.loading_box .txt').html((parseInt(percentT)) + '%');
	// if (percentage == 1) {
	// 	$('.page1').hide().next().show();
	// }

	var i = callbacks.length;
	callbacks.push(function () {
		setTimeout(function () {
			var percentT = percentage * 100;
			$('.loading_box .txt').html((parseInt(percentT)) + '%');
			if (percentage == 1) {
				setTimeout(function () {
					$(".txt_box1 .t1").addClass("text-row0")
				}, 1000)
				setTimeout(function () {
					$(".txt_box1 .t2").addClass("text-row1")
				}, 1500)
				setTimeout(function () {
					$(".txt_box1 .t3").addClass("text-row0")
				}, 3000)

				setTimeout(function () {
					$(".txt_box2 .t1").addClass("text-row0")
				}, 7000)
				setTimeout(function () {
					$(".txt_box2 .t2").addClass("text-row1")
				}, 7500)
				setTimeout(function () {
					$(".txt_box2 .t3").addClass("text-row0")
				}, 8000)

				setTimeout(function () {
					$(".txt_box3 .t1").addClass("text-row0")
				}, 10500)
				setTimeout(function () {
					$(".txt_box3 .t2").addClass("text-row1")
				}, 10700)


				setTimeout(function () {
					$(".txt_box4 .t1").addClass("text-row0")
				}, 11000)
				setTimeout(function () {
					$(".txt_box4 .t2").addClass("text-row1")
				}, 11500)
				setTimeout(function () {
					$(".txt_box4 .t3").addClass("text-row0")
				}, 12000)

				setTimeout(function () {
					$(".page2_arrow").removeClass("animated fadeInDown").addClass("p2_arrow");
					$(".page2_arrow").attr("style", "");
				}, 20000)

				// let timenum = 0;
				// 	let timer = setInterval(function () {
				// 		parseInt(timenum++)
				// 		// debugger
				// 		if (timenum == 1) {
				// 			$(".txt_box1 .t1").addClass("text-row0")
				// 		}else if(timenum == 3){
				// 			$(".txt_box1 .t2").addClass("text-row1")
				// 		}else if(timenum == 5){
				// 			$(".txt_box1 .t3").addClass("text-row0")
				// 		}else if(timenum == 11){
				// 			$(".txt_box2 .t1").addClass("text-row0")
				// 		}else if(timenum == 13){
				// 			$(".txt_box2 .t1").addClass("text-row1")
				// 		}else if(timenum == 15){
				// 			$(".txt_box2 .t1").addClass("text-row0")
				// 		}
				// 	}, 1000)

				setTimeout(function () {
					$('.page1').hide().next().show();
				}, 100);
			}
			callbacks[i + 1] && callbacks[i + 1]();
		}, 100);
	});

	if (percentage == 1) {
		callbacks[0]();
	}

});


// setInterval(function () {
// 	$(".shadow_an").css({ opacity: '0' }).animate({ opacity: '1' }, "normal", "linear");
// }, 1500)

$(".anm_pulse").addClass("animated pulse infinite");


$(".nextShow").on('click', function () {

	// if ($(this).parents().hasClass("page8")) {
	// 	return
	// }

	$(".page,.page_main").hide();
	let page = $(this).attr("data-page");
	if (page) {
		// debugger
		$(".page" + page).addClass("animated fadeIn").show()
		$(".page" + page).next().show()
		return
	}
	// console.log($(this).parents(".page_main").next().next())
	// debugger
	$(this).parents(".page_main").next().next().addClass("animated fadeIn").show();
	$(this).parents(".page_main").next().show()


	if ($(this).parents().prev().hasClass("page3")) {
		// debugger
		var swiper1 = new Swiper('.banner1', {
			pagination: {
				el: '.spot1',
			},
			on: {
				slideChangeTransitionStart: function () {
					audioAutoPlay3();
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					$(".banner1 .tvgif").addClass("tvoldOpacityChange").css("z-index", 200)
					setTimeout(() => {
						$(".banner1 .tvgif").removeClass("tvoldOpacityChange")
					}, 600);
				},
				slideChangeTransitionEnd: function () {
					// pauseAuto3();
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
				}
			},
		});
	}
	if ($(this).parents().prev().hasClass("page4")) {
		// debugger
		audioAutoPlay4()
		// setTimeout(res =>{
		// 	$(".pg_anim").addClass("animated flipInX").show()
		// },5000)
	}
	if ($(this).parents().prev().hasClass("page5")) {
		var swiper2 = new Swiper('.banner2', {
			pagination: {
				el: '.spot2',
			},
			on: {
				slideChangeTransitionStart: function () {
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					audioAutoPlay3();
					$(".banner2 .tvgif").addClass("tvoldOpacityChange").css("z-index", 200)
					setTimeout(() => {
						$(".banner2 .tvgif").removeClass("tvoldOpacityChange")
					}, 600);
				},
			},
		});
	}
	if ($(this).parents().prev().hasClass("page6")) {
		var swiper3 = new Swiper('.banner3', {
			pagination: {
				el: '.spot3',
			},
			on: {
				slideChangeTransitionStart: function () {
					audioAutoPlay3();
					// alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
					$(".banner3 .tvgif").addClass("tvoldOpacityChange").css("z-index", 200)
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
			$(".page2").next().next().show()
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





// function openmusic2() {
// 	autoPlayMusic2();
// 	audioAutoPlay2();
// }

// function pauseAuto2() {
// 	var audio = document.getElementById('bg-music2');
// 	audio.pause();
// }

// function audioAutoPlay2() {
// 	var audio = document.getElementById('bg-music2');
// 	audio.play();
// 	document.addEventListener("WeixinJSBridgeReady", function () {
// 		audio.play();
// 	}, false);
// }
// // 音乐播放
// function autoPlayMusic() {
// 	// 自动播放音乐效果，解决浏览器或者APP自动播放问题
// 	function musicInBrowserHandler() {
// 		musicPlay2(true);
// 		document.body.removeEventListener('touchstart', musicInBrowserHandler);
// 	}
// 	document.body.addEventListener('touchstart', musicInBrowserHandler);
// 	// 自动播放音乐效果，解决微信自动播放问题
// 	function musicInWeixinHandler() {
// 		musicPlay2(true);
// 		document.addEventListener("WeixinJSBridgeReady", function () {
// 			musicPlay2(true);
// 		}, false);
// 		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
// 	}
// 	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
// }
// function musicPlay2(isPlay) {
// 	var media = document.getElementById('bg-music2');
// 	if (isPlay && media.paused) {
// 		media.play();
// 	}
// 	if (!isPlay && !media.paused) {
// 		media.pause();
// 	}
// }



function audioAutoPlay3() {
	// debugger
	var audio = document.getElementById('bg-music3');
	audio.load();
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function () {
		audio.load();
		audio.play();
	}, false);
}

function audioAutoPlay4() {
	var audio = document.getElementById('bg-music4');
	audio.load();
	audio.play();
	document.addEventListener("WeixinJSBridgeReady", function () {
		audio.load();
		audio.play();
	}, false);
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
	var media = document.getElementById('bg-music');
	if (isPlay && media.paused) {
		media.play();
	}
	if (!isPlay && !media.paused) {
		media.pause();
	}
}