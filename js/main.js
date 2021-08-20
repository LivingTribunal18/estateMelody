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

  function colorFlat(inpArr, classToggle, className, self) {
    Object.keys(inpArr).map((key) => {
      if (inpArr[key] == self) {
        $(className).removeClass(classToggle);
        $(className).eq(key).addClass(classToggle);
      }
    });
  }

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
    $(".flats path").removeClass("path_active");

    colorFlat(
      document.querySelectorAll(".flats path"),
      "active",
      ".flat-link",
      this
    );
  });

  $(".flat-link").on("mouseover", function () {
    $(".flat-link").removeClass("active");

    colorFlat(
      document.querySelectorAll(".flat-link"),
      "path_active",
      ".flats path",
      this
    );
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
