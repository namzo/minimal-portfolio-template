window.onload=getExif;

function getExif() {
    var image = document.querySelector(".single-photo_wrap img");
    EXIF.getData(image, function() {
      let focalLengthVal = EXIF.getTag(this, "FocalLength");
      let apertureVal = EXIF.getTag(this, "ApertureValue");
      const shutterSpeedVal = EXIF.getTag(this, "ShutterSpeedValue");
      const ISOSpeedVal = EXIF.getTag(this, "ISOSpeedRatings");

      focalLengthVal = focalLengthVal['numerator'] / focalLengthVal['denominator'];
      apertureVal = apertureVal['numerator'] / apertureVal['denominator'];

      const focal = document.querySelector('p.focal-length');
      const aperture = document.querySelector('p.aperture');
      const shutter = document.querySelector('p.shutter-speed');
      const iso = document.querySelector('p.iso');

      focal.innerHTML = `${focalLengthVal}mm`;
      aperture.innerHTML = `ƒ/${apertureVal}`;
      shutter.innerHTML = `1/${shutterSpeedVal}s`;
      iso.innerHTML = `${ISOSpeedVal}`;
    });
}

// Photo page info on mobile
$(".anchor-text_open").on('click touch', function() {
  $(".about-photos_link").addClass("clicked");
  $(".trans-overlay").addClass("show");
});
$(".anchor-text_close").on('click touch', function() {
  $(".about-photos_link").removeClass("clicked");
  $(".trans-overlay").removeClass("show");
});

// Remove html class
$(document).ready(function() {
  $('html').removeClass('no-js');
  $('html').removeClass('is-animating');
});

// Close popup when click on body
$(document).click(function(event) {
  // Close modal if you click on anything except the panel
  if (!$(event.target).closest(".about-photos_link").length) {
    $("body").find(".about-photos_link").removeClass("clicked");
    $("body").find(".trans-overlay").removeClass("show");
  }
});

// Close popup on scroll
$(window).scroll(function() {
  if ($(window).scrollTop()>50 && $(".about-photos_link").hasClass("clicked")){
    $(".about-photos_link").removeClass("clicked");
    $(".trans-overlay").removeClass("show");
  }
});