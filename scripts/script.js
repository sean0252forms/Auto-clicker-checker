var timer=0
var click=0
function click() {
  // Tab to edit
  click++
}
setInterval(function () {
  if (timer>60) {
    timer=0
    click=0
  }
  timer++
},1000)