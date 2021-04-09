document.addEventListener("DOMContentLoaded", function () {
  var stage = new NGL.Stage("viewport");
  stage.loadFile("rcsb://proteins/6WZR", {defaultRepresentation: true});
});
