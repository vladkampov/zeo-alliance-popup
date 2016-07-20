animationDuration = 300

$ ->
  $('.activate_popup').click (e)->
    e.preventDefault()
    popupName = $(@).data 'popup'
    popup = $('div[data-popup="' + popupName + '"]')
    $(popup).fadeIn animationDuration

  $('.popup_holder__popup [data-event="close"]').click (e)->
    e.preventDefault()
    $('.popup_holder').fadeOut animationDuration
    if $(@).data 'uninstall'
      setTimeout ()->
        alert "DONE"
      , animationDuration
    return
