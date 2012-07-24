// Usage: $(['img1.jpg','img2.jpg']).preloadImages(function(){ ... });
// Callback function gets called after all images are preloaded
$.fn.preloadImages = function(callback) {
  var checklist = this.length;
  this.each(function() {

    var $img = $('<img>').attr({ src: this });
    var handler = function() {
      checklist--;
      if (checklist == 0) { callback(); }
    };

    // we need to check the complete property, as jquery's load event
    // doesnt reliably work when an image is cached
    if($img.get(0).complete) {
      handler();
    } else {
      $img.load(handler);
    }

  });
};