function changeBy(byVal) {
  var range = document.getElementById('noMachines');
  var newVal = parseInt(range.value) + byVal;
  if (newVal < range.min) newVal = range.min;
  if (newVal > range.max) newVal = range.max;
  range.value = newVal;
}