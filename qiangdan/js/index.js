//数字滚动
;(function($, window, document) {
    "use strict";
    var defaults = {
        deVal: 0,       //传入值
        className:'dataNums',   //样式名称
        digit:''    //默认显示几位数字
    };
    function rollNum(obj, options){
        this.obj = obj;
        this.options = $.extend(defaults, options);
        this.init = function(){
             this.initHtml(obj,defaults);
        }
    }
    rollNum.prototype = {
        initHtml: function(obj,options){
            var strHtml = '<ul class="' + options.className + ' inrow">';
            var valLen = options.digit ||  (options.deVal + '').length;
            if(obj.find('.'+options.className).length <= 0){
                for(var i = 0; i<  valLen; i++){
                    strHtml += '<li class="dataOne "><div class="dataBoc"><div class="tt" t="38"><span class="num0">0</span> <span class="num1">1</span> <span class="num2">2</span> <span class="num3">3</span> <span class="num4">4</span><span class="num5">5</span> <span class="num6">6</span> <span class="num7">7</span> <span class="num8">8</span> <span class="num9">9</span><span class="num0">0</span> <span class="num1">1</span> <span class="num2">2</span> <span class="num3">3</span> <span class="num4">4</span><span class="num5">5</span> <span class="num6">6</span> <span class="num7">7</span> <span class="num8">8</span> <span class="num9">9</span></div></div></li>';
                }
                strHtml += '</ul>';
                obj.html(strHtml);
            }
              this.scroNum(obj, options);
        },
        scroNum: function(obj, options){
            var number = options.deVal;
			var $num_item = $(obj).find('.' + options.className).find('.tt');
            var h = $(obj).find('.dataBoc').height(); 
          
            $num_item.css('transition','all 2s ease-in-out');
            var numberStr = number.toString();
            if(numberStr.length <= $num_item.length - 1){
                var tempStr = '';
                for(var a = 0; a < $num_item.length - numberStr.length; a++){
                    tempStr += '0';
                }
                numberStr = tempStr + numberStr;
            }

            var numberArr = numberStr.split('');
            $num_item.each(function(i, item) {
                setTimeout(function(){
                    $num_item.eq(i).css('top',-parseInt(numberArr[i])*h - h*10 + 'px');
                },i*100)
            });
        }
    }
    $.fn.rollNum = function(options){
        var $that = this;
        var rollNumObj = new rollNum($that, options);
        rollNumObj.init();
    };
})(jQuery, window, document);

let data;
$(function () {
    $(".total_sum").rollNum({
        deVal: 0000000000,
        digit: 10
    })
    // data = { "info": { "status": 1, "data": { "username": "\u9ad8\u603b", "num": "11\u4e07" } }, "list": { "status": 1, "data": [{ "username": "北京第一时间网络科技有限公司", "num": "132万" }, { "username": "\u738b\u603b", "num": "12\u4e07" }, { "username": "\u9ad8\u603b", "num": "11\u4e07" }] }, "num": 230000 };
    // fuc(data)

})

setTimeout(function () {
    // debugger
    data = { "info": { "status": 1, "data": { "username": "北京第一时间网络科技有限公司", "num": "12322222233" } }, "list": { "status": 1, "data": [{ "username": "北京第一时间网络科技有限公司", "num": "12万" }] }, "num": 23032 };
    fuc(data)
}, 5000)
setTimeout(function () {
    // debugger
    data = { "info": { "status": 1, "data": { "username": "北京第一时间网络科技有限公司", "num": "12322222233" } }, "list": { "status": 1, "data": [{ "username": "北京第一时间网络科技有限公司", "num": "132223万" }, { "username": "\u738b\u603b", "num": "60万" }] }, "num": 231231 };
    fuc(data)
}, 10000)
setTimeout(function () {
    // debugger
    data = { "info": { "status": 1, "data": { "username": "北京第一时间网络科技有限公司", "num": "12322222233" } }, "list": { "status": 1, "data": [{ "username": "北京第一时间网络科技有限公司", "num": "132224万" }, { "username": "\u738b\u603b", "num": "60万" }, { "username": "\u9ad8\u603b", "num": "40万" }] }, "num": 333333 };
    fuc(data)
}, 15000)
setTimeout(function () {
    // debugger
    data = { "info": { "status": 0, "data": { "username": "北京第一时间网络科技有限公司", "num": "12322222233" } }, "list": { "status": 1, "data": [{ "username": "北京第一时间网络科技有限公司", "num": "132224万" }, { "username": "\u738b\u603b", "num": "60万" }, { "username": "\u9ad8\u603b", "num": "40万" }] }, "num": 66666689 };
    fuc(data)
}, 20000)

function fuc(data) {
    // debugger
    console.log(data)
    if (data.list.status == 1) {
        let newhtml;
        $(".table_body").empty()
        for (var i = 0; i < data.list.data.length; i++) {
            let j = i + 1;
            newhtml = '<tr><td class="main_color animated fadeIn">' + j + '</td><td class="two animated fadeIn">' + data.list.data[i].username + '</td><td class="main_color animated fadeIn">' + data.list.data[i].num + '</td></tr>'
            $(".table_body").append(newhtml)
        }
    }

    $(".total_sum").rollNum({
        deVal: data.num,
        digit: 10
    })
    if (data.info.status == 1) {
        let newhtml;
        if ($(".comp_name").text() == "") {
            newhtml = '<div class="side"><div class="comp_name animated flipInX" style="animation-delay: .5s;">' + data.info.data.username + '</div><div class="buy_sum main_color animated flipInX" style="animation-delay: 1.5s;">' + data.info.data.num + '</div></div>'
            $(".comp_buy_order").append(newhtml)
            return
        }
        $(".side").addClass("side_l")
        setTimeout(function () {
            $(".side").remove(".side")
            newhtml = '<div class="side"><div class="comp_name animated flipInX" style="animation-delay: .5s;">' + data.info.data.username + '</div><div class="buy_sum main_color animated flipInX" style="animation-delay: 1.5s;">' + data.info.data.num + '</div></div>'
            $(".comp_buy_order").append(newhtml)
        }, 3000)
    }

}
