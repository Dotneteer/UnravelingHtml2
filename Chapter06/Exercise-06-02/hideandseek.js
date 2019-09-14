var titles = document.getElementsByTagName('h2');
for (var i = 0; i < titles.length; i++) {
  var title = titles[i];
  title.innerHTML = '<span class="mono">- </span>'
    + title.innerHTML;
  title.addEventListener('click', onClick, true);
}

function onClick(evt) {
  var headerClicked = evt.currentTarget;
  headerClicked.setAttribute("style",
    "background-color: red;");
}
