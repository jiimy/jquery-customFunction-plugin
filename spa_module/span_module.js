var app = (function() {

  // 1. 모듈 스코프 내에서 사용할 변수 작성
  var scopeVar = {};
  var utilMethod;
  var manipulateDom;
  var eventHandle;
  var initModule;

  // 2. 유틸리티 메소드 작성
  utilMethod = function() {
      // 실행코드
  };

  // 3. DOM 조작 메소드 작성
  manipulateDom = function() {
      // 실행코드
  };

  // 4. 이벤트 핸들러 작성
  eventHandle = function() {
      // 실행코드
  };

  // Public 메소드 작성
  initModule = function() {
      // 실행코드
  };

  return {
      init : initModule
  };
}());