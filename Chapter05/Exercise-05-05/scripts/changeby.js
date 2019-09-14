function changeBy(byVal) {
  var range = document.getElementById('progress');
  var newVal = parseInt(range.value) + byVal;
  if (newVal < 0) newVal = 0;
  if (newVal > range.max) newVal = range.max;
  range.value = newVal;
}
