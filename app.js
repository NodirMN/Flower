// Fade away on click and return after 4s
$(".bt").click(function () {
  $(".itemwrapper")
    .fadeOut("slow")
    .promise()
    .done(function () {
      $(".itemwrapper").delay(4000).fadeIn(4000);
    });
});
