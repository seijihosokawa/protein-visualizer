// create a `stage` object
var stage = new NGL.Stage("viewport");
// load a PDB structure and consume the returned `Promise`
function load_pdb(){
    stage.loadFile("rcsb://pdb_files/6WZR").then(function (component) {
        // add a "cartoon" representation to the structure component
        var e = document.getElementById("style");
        var style_val = e.options[e.selectedIndex].text;
        console.log("style", style_val);
        component.addRepresentation(style_val);
        // provide a "good" view of the structure
        component.autoView();
    });
}


