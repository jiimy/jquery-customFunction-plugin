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
  $.fn.tab = function (options) {
    var settings = $.extend({}, $.fn.tab.defaults, options);

    return this.css({
      width: settings.width,
      padding: settings.padding
    }),
      this.click(function (e) {
        e.preventDefault();
        var idx = $(this).index();
        console.log(idx);
        // console.log(options);
        $(options).siblings().removeClass('active').eq(idx).addClass('active');
        $('table').removeClass('active').eq(idx).addClass('active');
      })
  };

  $.fn.tab.defaults = {
    width: '33%',
    padding: '2px 4px'
  }
  // console.log('즉시실행함수 로드');
}($));

//함수 실행 부분
$(function () {
  $('.contentNav li').tab('.contentNav li');

});

//https://zetawiki.com/wiki/JQuery_%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8_%EB%A7%8C%EB%93%A4%EA%B8%B0_3_-_%EC%98%B5%EC%85%98_%EB%B0%9B%EA%B8%B0
//http://offbyone.tistory.com/129?category=283347
//https://learn.jquery.com/plugins/basic-plugin-creation/