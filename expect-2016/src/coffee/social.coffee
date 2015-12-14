window.fbAsyncInit = ->
  FB.init
    appId: "1728417547384061"
    xfbml: true
    version: "v2.2"
  return

((d, s, id) ->
  js = undefined
  fjs = d.getElementsByTagName(s)[0]
  return  if d.getElementById(id)
  js = d.createElement(s)
  js.id = id
  js.src = "http://connect.facebook.net/en_US/sdk.js"
  fjs.parentNode.insertBefore js, fjs
  return
) document, "script", "facebook-jssdk"

$( document ).ready () ->
  $( "#twitter-share-button" ).click () ->
    url = encodeURI $( this ).attr( "data-url" )
    text = encodeURI $( this ).attr( "data-text" )
    via = encodeURI $( this ).attr( "data-via" )
    hashtags = encodeURI $( this).attr( "data-hashtags" ) + " "

    href = "https://twitter.com/intent/tweet?&text=#{ text }&tw_p=tweetbutton&url=#{ url }&via=#{ via }&hashtags=#{ hashtags }"
    window.open( href, "_blank", "width=600,height=300,resizable=no,scrollbars=no" )

  $( "#facebook-share-button" ).click () ->
    FB.ui
      method: 'share'
      href: $( this ).attr( "data-url" )
