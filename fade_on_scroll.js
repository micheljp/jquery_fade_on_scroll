$.fn.fade_on_scroll = function() {

  var posWas;
  var self = this;
  self.css("opacity",0);

  $(window).scroll(function() {

    var scrolltop = $(window).scrollTop();
    var window_height = $(window).height();
    var location = (window_height + scrolltop);

    if (scrolltop > posWas) {

      //code to iterate over each image
      $(self).each(function(index){
      var elem = $( this );
      var elem_offset = elem.offset();
      var elem_height = elem.height();
      var elem_height_half = (elem_height/2);

        // if location is greater than the top of the elem offset it means the elem is in the viewport and we can thus fade it in by incrementally adding to its css opacity

        if (location >= elem_offset.top  && location < (elem_offset.top + elem_height + window_height)) {

        //begin code to fade in element
        //scroll speed is detected and rate at which element fades in changes based upon that decision

          if ((scrolltop - posWas) > 15) {

            var incrementer = 0.1;

          } else {

            var incrementer = 0.02;

          }

        var get_opacity = (elem.css("opacity") * 1);
        var set_opacity = get_opacity + incrementer;
        elem.css("opacity",set_opacity);

        }

        if (location > (elem_offset.top + elem_height_half + window_height) && location < (elem_offset.top + elem_height + window_height)) {

        //begin code to fade out element
        //scroll speed is detected and rate at which element fades in changes based upon that decision

          if ((scrolltop - posWas) > 15) {

            var incrementer = 0.3;

        } else {

            var incrementer = 0.05;

        }

        var get_opacity = (elem.css("opacity") * 1);
        var set_opacity = get_opacity - incrementer;
        elem.css("opacity",set_opacity);

        }
    });
  }

  if (scrolltop < posWas) {


    //code to iterate over each image

    $(self).each(function(index){
    var elem = $( this );
    var elem_offset = elem.offset();
    var elem_height = elem.height();
    var elem_height_half = (elem_height/2);

      // if location is greater than the top of the elem offset it means the elem is in the viewport and we can thus fade it in by incrementally adding to its css opacity

      if (location <= (elem_offset.top + elem_height_half)) {

      //begin code to fade in element

        if ((scrolltop - posWas) > 15) {

          var incrementer = 0.3;

        } else {

          var incrementer = 0.05;

        }

        var get_opacity = (elem.css("opacity") * 1);
        var set_opacity = get_opacity - incrementer;
        elem.css("opacity",set_opacity);
      }

      if (scrolltop < (elem_offset.top + elem_height) && location > (elem_offset.top + elem_height_half)) {

      //begin code to fade out element

        if ((scrolltop - posWas) > 15) {

          var incrementer = 0.1;

        } else {

        var incrementer = 0.02;

        }

        var get_opacity = (elem.css("opacity")*1);
        var set_opacity = get_opacity + incrementer;
        elem.css("opacity",set_opacity);
      }
  });
  }

  posWas = scrolltop;

});

return this;

};
