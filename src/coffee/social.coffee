$( document ).ready () ->
  $( "#twitter-share-button" ).click () ->
    url = encodeURI $( this ).attr( "data-url" )
    text = encodeURI $( this ).attr( "data-text" )
    via = encodeURI $( this ).attr( "data-via" )
    hashtags = encodeURI $( this).attr( "data-hashtags" ) + " "

    href = "https://twitter.com/intent/tweet?&text=#{ text }&tw_p=tweetbutton&url=#{ url }&via=#{ via }&hashtags=#{ hashtags }"
    window.open( href, "_blank", "width=600,height=300,resizable=no,scrollbars=no" )
