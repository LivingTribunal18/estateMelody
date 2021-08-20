let floor = 1;

function outputFloor(num) {
  num = Number(num);
  if (num <= 9 && num >= 1) {
    $(".counter").text("0" + num);
  } else {
    $(".counter").text(num);
  }
  floor = num;
}

function colorFloor(index, className) {
  $(`${className} path`).removeClass("path_active");
  $(`${className} path`).eq(index).addClass("path_active");

  floor = Number(index) + 1;
  className == ".home_image" ? outputFloor(floor) : null;
}

$(".counter-down").click(function () {
  floor -= 1;
  floor <= 1 ? (floor = 1) : floor;
  outputFloor(floor);
  colorFloor(floor - 1, ".home_image");
});

$(".counter-up").click(function () {
  floor += 1;
  floor >= 17 ? (floor = 17) : floor;
  outputFloor(floor);
  colorFloor(floor - 1, ".home_image");
});

$(".home_image path").click(function () {
  let inputArr = document.querySelectorAll(".home_image path");

  Object.keys(inputArr).map((key) => {
    if (inputArr[key] == this) {
      colorFloor(key, ".home_image");
    }
  });
});

// floor page
$(".button-primary").click(function () {
  $(".overlay").addClass("activeHide");
  $(".floor").css("display", "flex");
  $(".floor-num").text(floor);
});

$(".close-floor").click(function () {
  $(".overlay").removeClass("activeHide");
  $(".floor").css("display", "none");
});

$(".floor_image path").click(function () {
  let inputArrFloor = document.querySelectorAll(".floor_image path");

  Object.keys(inputArrFloor).map((key) => {
    if (inputArrFloor[key] == this) {
      colorFloor(key, ".floor_image");
    }
  });
});

$(".floor-links a").click(function (e) {
  e.preventDefault();
  $(".floor-links a").removeClass("link-active");
  $(this).toggleClass("link-active");

  let inputArrLink = document.querySelectorAll(".floor-links a");
  Object.keys(inputArrLink).map((key) => {
    if (inputArrLink[key] == this) {
      colorFloor(key, ".floor_image");
    }
  });
});
