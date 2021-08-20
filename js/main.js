$(document).ready(function () {
  let currentFloor = 2;

  // function opens and closes modal window
  function toggleModal() {
    $(".modal").toggleClass("is-open");
  }

  // add active class function
  function colorFloor(num) {
    $(".home_image path").removeClass("current-floor");
    $(`[data-floor=${num}]`).toggleClass("current-floor");
    $(".counter").text(num);
    currentFloor = num;
  }

  function colorFlat(index, className) {}

  // function formatting floor number to ~ '0[2]'
  function formatNum(floorNum) {
    return floorNum.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGroupping: false,
    });
  }

  // show modal window
  $(".home_image").on("click", toggleModal);
  $(".modal-close-button").on("click", toggleModal);
  $(".view-flats").on("click", toggleModal);

  $(".flats path").on("mouseover", function () {
    let inputArrFloor = document.querySelectorAll(".flats path");

    Object.keys(inputArrFloor).map((key) => {
      if (inputArrFloor[key] == this) {
        $(".flat-link").removeClass("active");
        $(".flat-link").eq(key).addClass("active");
      }
    });
  });

  $(".flat-link").on("mouseover", function (e) {
    e.preventDefault();
    $(".flat-link").removeClass("active");
    $(this).toggleClass("active");

    let inputArrLink = document.querySelectorAll(".flat-link");
    Object.keys(inputArrLink).map((key) => {
      if (inputArrLink[key] == this) {
        $(".flats path").removeClass("path_active");
        $(".flats path").eq(key).addClass("path_active");
      }
    });
  });

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
