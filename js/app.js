function toggleLedgers () {
  var els = document.querySelectorAll("pre")
  var disp
  for (var i = 0; i < els.length; i++) {
    disp = disp || els[i].style.display
    if (disp === 'none') els[i].style.display = 'block'
    else els[i].style.display = 'none'
  }
}

