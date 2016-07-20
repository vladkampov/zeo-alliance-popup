(function() {
  var animationDuration;

  animationDuration = 300;

  $(function() {
    $('.activate_popup').click(function(e) {
      var popup, popupName;
      e.preventDefault();
      popupName = $(this).data('popup');
      popup = $('div[data-popup="' + popupName + '"]');
      return $(popup).fadeIn(animationDuration);
    });
    return $('.popup_holder__popup [data-event="close"]').click(function(e) {
      e.preventDefault();
      $('.popup_holder').fadeOut(animationDuration);
      if ($(this).data('uninstall')) {
        setTimeout(function() {
          return alert("DONE");
        }, animationDuration);
      }
    });
  });

}).call(this);

(function() {
  document.addEventListener('DOMContentLoaded', function() {
    return $('.preloader').fadeOut(300);
  });

}).call(this);
