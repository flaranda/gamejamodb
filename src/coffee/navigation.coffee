$( document ).ready () ->
  $( "[data-scroll]" ).click () ->
    $( "body" ).animate
      scrollTop: $( "##{ $( this ).attr "data-scroll" }" ).offset().top - 50
    , 1000
