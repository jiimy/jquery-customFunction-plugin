$.fn.extend({
  changeText: function () {
    this.text("ynkim")
  }
  , alertText: function () {
    alert(this.text());
  }
});

$("div").click(function (event) {
  var $div = $(event.target);
  //$div.changeText();  // div클릭시 이벤트가 발생하며 ynkim으로 내용 변경
  $div.alertText();  // div클릭시 이벤트가 발생하며 alert 팝업
});
