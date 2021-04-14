// create a `stage` object=
var stage = new NGL.Stage("viewport");
var current_protein = "6WRZ";
// load a PDB structure and consume the returned `Promise`
function load_pdb(){
    //checks whether or not the view should be reset
    var view_reset_or_build_upon = document.getElementById("flexSwitchCheckDefault").checked;
    //console.log(view_reset_or_build_upon);
    
    if(!view_reset_or_build_upon){
        stage.removeAllComponents();
    }
    stage.loadFile("rcsb://pdb_files/"+current_protein).then(function (component) {
        // add a style representation to the structure component
        var e = document.getElementById("style");
        var style_val = e.options[e.selectedIndex].text;
        console.log("Style: ", style_val);
        component.addRepresentation(style_val);
        // provide a "good" view of the structure
        component.autoView();
    });
}

//sets the canvas to full screen
function set_fullscreen(){
    stage.toggleFullscreen();
}

//updates the current protein name to match what has been uploaded so that file can be loaded onto WebGL stage
function update_current_protein(){
    //gets the name of the file clicked on
    const fileSelector = document.getElementById('file-selector');

    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        //console.log(fileList);
    });
    //grabs the current file selected and trims string to have only protein name
    var protein_name = String(fileSelector.value).toUpperCase();
    current_protein = protein_name.substring(protein_name.lastIndexOf("\\") + 1, protein_name.lastIndexOf("."));
    console.log("Current Protein:", current_protein);
    //unchecks combine styled
    document.getElementById("flexSwitchCheckDefault").checked = false;
    //remove previous protein
    stage.removeAllComponents();
    load_pdb();
}

//Sorts through the folder and checks each one
var i;
function sort_through_folder(){

}

/* Does not work yet, download a PNG file of current view
function take_screenshot(){
    var response = stage.makeImage();
    var blob = new Blob([response], {type: "image/png"});
    console.log(blob);
    console.log(blob.size, blob.type);

    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = URL.createObjectURL(blob);
    a.download = 'image.png';
    a.click();
}
 */
//tasks:
// instructions
// two or more proteins viewed at the same time
// jpg saving


//references:
//https://www.rcsb.org/
//http://nglviewer.org/ngl/api/class/src/stage/stage.js~Stage.html
