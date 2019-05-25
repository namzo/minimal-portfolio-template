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