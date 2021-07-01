console.log("hii");
// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").hide();
//   });
// });
$(document).ready(function () {
  $("button").dblclick(function () {
    $("p").hide();
  });
  // $("p:first").mouseenter(function () {
  //   alert("You entered p!");
  // });
  // $("p").mouseleave(function () {
  //   alert("Bye! You now leave p!");
  // });
  // $("p").mousedown(function () {
  //   alert("Mouse down over p1!");
  // });
  // $("p").mouseup(function () {
  //   alert("Mouse up over p1!");
  // });
  // $("input").focus(function () {
  //   $(this).css("background-color", "#cccccc");
  // });
  //using on add multiple events
  $("p").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    },
  });
});
