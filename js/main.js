$(document).ready(function () {
  let currentFloor = 2;

  // add active class function
  function colorFloor(num) {
    $(".home_image path").removeClass("current-floor");
    $(`[data-floor=${num}]`).toggleClass("current-floor");
    $(".counter").text(num);
    currentFloor = num;
  }

  // function formatting floor number to ~ '0[2]'
  function formatNum(floorNum) {
    return floorNum.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGroupping: false,
    });
  }

  // add active class on path hover
  $(".home_image path").on("mouseover", function () {
    colorFloor($(this).attr("data-floor"));
  });

  // increase floor
  $(".counter-up").on("click", function () {
    // limit floor number
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = formatNum(currentFloor);
      colorFloor(usCurrentFloor);
    }
  });

  // reduce floor
  $(".counter-down").on("click", function () {
    // limit floor number
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = formatNum(currentFloor);
      colorFloor(usCurrentFloor);
    }
  });
});
