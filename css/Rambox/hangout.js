function applycss(css) {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}

applycss(`
  .Cl {
    width: 600px !important;
    height: 800px !important;
  }
`);
