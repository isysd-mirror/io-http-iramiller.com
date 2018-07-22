function toggleLedgers () {
  var els = document.querySelectorAll("pre")
  var disp
  for (var i = 0; i < els.length; i++) {
    disp = disp || els[i].style.display
    if (disp === 'block') els[i].style.display = 'none'
    else els[i].style.display = 'block'
  }
}

function sendProofOfAddress () {
  var address = document.getElementById("signing-address").value
  var message = document.getElementById("signed-message").value
  var signature = document.getElementById("signature").value
  window.open(`mailto:public@iramiller.com?subject=Proof Of Address ${address}&body=${address}
${message}
signature`, 'emailWindow')
}

