var titles = document.getElementsByTagName('h2');
for (var i = 0; i < titles.length; i++) {
  var title = titles[i];
  document.write('<h3>' + title.textContent + '</h3>');
}
