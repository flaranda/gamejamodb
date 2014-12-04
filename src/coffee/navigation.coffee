$( document ).ready () ->
  $( ".navigation-link" ).click () ->
    console.log( $( this ).attr "data-scroll" )
    $( "body" ).animate
      scrollTop: $( "##{ $( this ).attr "data-scroll" }" ).offset().top - 50
    , 1000
