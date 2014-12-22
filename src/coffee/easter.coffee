a = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
b = []

$( document ).keydown (e) ->
  c( e.keyCode )

c = ( d ) ->
  if a[b.length] is d
    b.push d

    if b.length is a.length
      b = []
  else
    b = []
