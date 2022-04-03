$(document).ready(function () {
  // $("button")
  //   .first()
  //   .click(function () {
  //     update($("span").first());
  //   });
  // $("button")
  //   .last()
  //   .click(function () {
  //     $("button").first().trigger("click");
  //     update($("span").last());
  //   });
  // function update(j) {
  //   var n = parseInt(j.text(), 10);
  //   j.text(n + 1);
  // }
  // $(".p")
  //   .click((event, a, b) => {
  //     $(".p").text(a + b);
  //   })
  //   .trigger("click", [10, 20]);
  // insertafter
  // $(".btn1").click(() => {
  //   $("<p>this is a new paragraph</p>").insertAfter(".btn1");
  // });
  // insertBefore
  // $(".btn1").click(() => {
  //   $("<p>this is a new paragraph</p>").insertBefore(".btn1");
  // });
  // slideToggle()
  // this is not working due to this keywork not set in arrow function
  // $("div").click(() => {
  //   $(this).slideToggle();
  // });
  // this is working
  // $("div").click(function () {
  //   $(this).slideToggle();
  // });
  // Q1: in this quetion we want ot toggle only tht element on which we are click.
  // $("div").on("click", "p", function () {
  //   $(this).slideToggle();
  // });
  // $("p").click(function () {
  //   $(this).slideToggle();
  // });
  // this and $(this) difference
  // $("div").mouseover(function () {
  //   alert($(this).text());
  // });
  // bind() and unbind()
  // $("button")
  //   .first()
  //   .bind("click", () => {
  //     $("P").hide();
  //   });
  // $("button")
  //   .last()
  //   .bind("click", () => {
  //     $("p").css("background", "red");
  //   });
  // multiple
  // $("button")
  //   .first()
  //   .bind("click", () => {
  //     $("p").hide();
  //   })
  //   .bind("mouseover", () => {
  //     $("p").css("background", "red");
  //   })
  //   .bind("mouseout", () => {
  //     $("p").css("background", "none");
  //   });
  // unbind()
  // $("button").click(() => {
  //   $("button").first().unbind("mouseover").unbind("mouseout");
  // });
});
