function toggleLedgers () {
  var els = document.querySelectorAll("pre")
  var disp
  for (var i = 0; i < els.length; i++) {
    disp = disp || els[i].style.display
    if (disp === 'block') els[i].style.display = 'none'
    else els[i].style.display = 'block'
  }
}

