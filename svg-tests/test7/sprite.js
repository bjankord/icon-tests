var ajax = new XMLHttpRequest();
ajax.open("GET", "sprite.svg", true);
ajax.responseType = "document";
ajax.onload = function(e) {
  try {
    svg = ajax.responseXML.documentElement;
    svg.setAttribute("class", "sprite");
    //not essential, just used to trigger CSS to hide the SVG
    document.body.insertBefore(svg, document.body.childNodes[0]);
  }
  catch(e){console.log(e);}
}
ajax.send();
