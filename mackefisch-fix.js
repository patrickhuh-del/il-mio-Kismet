(function() {
  function tauschen() {
    var alleBilder = document.querySelectorAll("img");
    for (var i = 0; i < alleBilder.length; i++) {
      var altText = alleBilder[i].getAttribute("alt") || "";
