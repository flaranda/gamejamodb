$( document ).ready () ->
  $( "[data-scroll]" ).click () ->
    $( "body" ).animate
      scrollTop: $( "##{ $( this ).attr "data-scroll" }" ).offset().top - 50
    , 1000

  accordion_hide = false
  $( "[toggle-accordion]" ).click () ->
    accordion = $( this ).attr( "toggle-accordion" )
    $( accordion ).toggle( "blind", {}, 500 )
    accordion_hide = not accordion_hide

    $( window ).unbind( "scroll" ).scroll () ->
      if accordion_hide
        $( accordion ).toggle( "blind", {}, 500 )
        accordion_hide = not accordion_hide
        $( window ).unbind( "scroll" )
