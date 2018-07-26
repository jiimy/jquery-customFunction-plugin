// (function($) {
//   $.fn.swapClass = function(class1, class2) {
//       return this.each(function() {
//           var $element = $(this);
//           if ($element.hasClass(class1)) {
//               $element.removeClass(class1).addClass(class2);
//           }
//           else if ($element.hasClass(class2)) {
//               $element.removeClass(class2).addClass(class1);
//           }
//       });
//   };
// })(jQuery);

//http://www.nextree.co.kr/p9989/

//예제1 탭 플러그인 만들기

//함수 정의 부분
(function ($) {
  $.fn.tab = function (tabNav) {
    var settings = $.extend({}, option, tabNav);
    var idx = $(this).index();

    this.click(function (e) {
      e.preventDefault();
      console.log(idx);
      $(tabNav)
        .siblings()
        .removeClass("active")
        .eq(idx)
        .addClass("active");
      $("table")
        .removeClass("active")
        .eq(idx)
        .addClass("active");
    });

    return this.css({
      width: settings.width,
      padding: settings.padding
    });
  };

  option = {
    width: "33%",
    padding: "2px 4px"
  };
  // console.log('즉시실행함수 로드');
})($);

//함수 실행 부분
$(function () {
  var tabClick = $(".contentNav li"); //클릭할 변수
  tabClick.tab(".contentNav li");
});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 에제2 이미지 슬라이드 만들기

//함수 정의 부분
(function () {
  //fn을 사용하여 사용자 정의 함수 만들기
  $.fn.customSlide = function (options) {
    //html상에서 준 fade_speed값
    //여기서 기본옵션 설정하고
    var defaults = {
      delay: 1000, //다음 슬라이드로 넘어가는 딜레이
      fade_speed: 500, //다음 슬라이드 페이드인 속도
      auto: true,
      slide_type: "fade", // 슬라이드 넘어가는 효과, fade와 슬라이드
      mouse_over: "stop" // 마우스 오버시 슬라이드 중지하기
    };

    // 사용자가 옵션을 주면 기본옵션을 덮어 씌울수 있게?
    var options = $.extend({}, defaults, options);

    var element = $(this); //this 객체는 .img_slide
    var image = element.children("img");
    var count = image.length;

    //첫번째 이미지 활성화
    image.eq(0).show();
    var i = 0;
    console.log(options.mouse_over);
    //mouse_click 노출
    // $(image).on('click', function (event) {
    //   options.mouse_click.call(this, this, event.clientT, event.clientY);
    // })

    // var Interval;
    var interval_check;

    function interval() {
      interval_check = setInterval(function () {
        image.eq(i).fadeOut(options.fade_speed);
        i = i + 1 == count ? 0 : i + 1;
        image.eq(i).fadeIn(options.fade_speed);
      }, options.delay)
    };

    var mouseover = $(this).mouseover(function () {
      clearInterval(interval_check);
      // console.log(interval);
    });

    var mouseout = $(this).mouseout(function () {
      // interval;
      interval();
      
    });

    //이미지 슬라이드 타이머
    if (options.auto == true) {
      interval();

      if (options.mouse_over == "stop") {
        mouseover;
        mouseout;
      }
    }
  };
})($);

//https://zetawiki.com/wiki/JQuery_%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8_%EB%A7%8C%EB%93%A4%EA%B8%B0_3_-_%EC%98%B5%EC%85%98_%EB%B0%9B%EA%B8%B0
//http://offbyone.tistory.com/129?category=283347
//https://learn.jquery.com/plugins/basic-plugin-creation/
