const PROTEIN_LIST = ['1cvlH', '1qf9H', '1cxcH', '1qtsH', '1rzlH', '3pteH', '1b16AH', '1lbuH', '1a3aDH', '1cc8H', '1bgfH', '1mugH', '1a92AH', '2bbkLH', '3chyH', '1qipBH', '1dbgH', '1bqcH', '1ammH', '1qe3H', '1d2nH', '1ckaH', '1qgqH', '2driH', '1kpfH', '1czfAH', '1mctIH', '7rsaH', '1narH', '1ek0H', '1aruH', '1vfyH', '1qsaH', '1a7sH', '1bdmBH', '1d7pH', '1ajjH', '1jetH', '9wgaAH', '1fdrH', '1axnH', '1vieH', '3sebH', '1qrrH', '2hmzAH', '1nzyBH', '2baaH', '1bpiH', '5nulH', '3claH', '2pthH', '1cczH', '1flpH', '1bf6BH', '451cH', '1c1kH', '1dozH', '1ixhH', '3proCH', '1xjoH', '1hclH', '1thvH', '153lH', '.DS_S', '1kveABH', '1aacH', '1bs9H', '1hfeSLH', '1cgoH', '1kapH', '1fdsH', '1qgiH', '1atzAH', '6gsvBH', '1wabH', '8abpH', '1fmbH', '4xisH', '2arcBH', '1sluH', '3btoAH', '1gciH', '1phnAH', '1bu8H', '2ilkH', '1pcfAH', '1mskH', '1gofH', '1gaiH', '1ifcH', '1mmlH', '1ubpH', '1elkAH', '1nkdH', '1xnbH', '1a6mH', '2erlH', '1dinH', '1qu9AH', '1a2zAH', '2engH', '3silH', '2hftH', '1cs1AH', '1gceH', '1idoH', '1ql0AH', '1bkjAH', '1qh5AH', '1uchH', '2pvbH', '1bsmAH', '2rn2H', '1mdcH', '1fasH', '1osaH', '1bteAH', '1jerH', '1ceqH', '1avwBH', '1qgwBDH', '1cyoH', '1bhpH', '1qnjH', '2ayhH', '1lclH', '1ecoH', '1a8iH', '1mlaH', '1qddH', '1gdoBFH', '1ctjH', '1qczH', '1c1lH', '1pefH', '1a1yIH', '1nulBH', '1erxH', '1ygeH', '1mfiAH', '1auoAH', '5p21H', '7a3hH', '1atgH', '1b4vH', '1babBH', '1a4iBH', '2kntH', '1ejgH', '1qusH', '6celH', '1a8eH', '1swuBH', '1qnfH', '1fvkAH', '1ah7H', '1mrjH', '2hbgH', '1difAH', '1ctfH', '2igdH', '2cypH', '5cytH', '1rcfH', '2cbpH', '1hcrAH', '1dptAH', '1fncH', '1pgsH', '1bkbH', '1m6pAH', '3vubH', '1bueH', '1vhhH', '1akrH', '1zinH', '1dhnH', '2tpsAH', '1cxqH', '1qsgGH', '1a73AH', '1tudH', '6wzr', '1smlH', '1qh8BH', '1t1dH', '2cuaAH', '1qftAH', '1a8dH', '1ttbAH', '1nddBH', '1pmiH', '1qh4AH', '1taxH', '1dvjAH', '1tcaH', '1jhgABH', '1bfgH', '1svyH', '1lamH', '1aquAH', '1dgfAH', '256bAH', '3stdAH', '1bi5H', '1a12AH', '1agjAH', '1mofH', '1sbpH', '1dcsH', '1yveIH', '2spcAH', '1ftrAH', '3eipAH', '1evhABH', '2cplH', '1qlwAH', '1bu7AH', '1rgeAH', '1uaeH', '1kp6H', '1rieH', '1amfH', '3chbDH', '1pdaH', '1fltYH', '1bm8H', '1cy5H', '1isuAH', '2mhrH', '1bx7H', '1bg6H', '1iabH', '19hcAH', '1ak0H', '1c90AH', '3grsH', '1mpgBH', '1plcH', '1lucBH', '1egwAH', '1mfmH', '1c3wH', '1qcxH', '1aylH', '1brtH', '1fkjH', '1g3pH', '1cnzBH', '1bqkH', '1cipH', '1nlsH', '1pymAH', '1ampH', '1edmBH', '2tgiH', '1dnlH', '2lisH', '1etnH', '1qksAH', '1btyH', '1h2rSH', '1bxoH', '1bx4H', '1b6aH', '1toaAH', '4lztH', '1byiH', '1ervH', '1gd1OH', '2dpmH', '1yacBH', '1mroBH', '1dpsDH', '1vsrH', '2acyH', '1b0yH', '1fnaH', '1c02AH', '1cmbAH', '1uteH', '119lH', '1qk5AH', '16pkH', '1vccH', '1guqAH', '2bc2AH', '1ckeH', '1b67AH', '1qh8AH', '1atlACH', '1b5eAH', '1aopH', '1vnsH', '1rb9H', '1ptfH', '4eugH', '1qupAH', '1ezmH', '1aqbH', '1tfeH', '1bs0H', '1fltVH', '2bbkHH', '1fxdH', '1bfdH', '1cf9BH', '7fd1H', '1b0uH', '1qtwH', '3cyrH', '1notH', '2sakH', '1cjwH', '2actH', '1gcaH', '1qqqH', '2myrH', '1cruAH', '1bgcH', '1d3vAH', '3pypH', '1btkAH', '1qs1AH', '1cpqH', '5hpgAH', '1tmlH', '1cnvH', '1czpAH', '1bw9AH', '1c75H', '2a0bH', '1c5eAH', '3pviAH', '1dfuPH', '1hfcH', '1ahoH', '1htrH', '1qq5AH', '1a62H', '1pdoH', '1mbaH', '5icbH', '2ctcH', '1abaH', '1moqH', '1qjdH', '1tenH', '1byqH', '1opdH', '1vjsH', '1oncH', '1tph1H', '2nacAH', '1gdjH', '1noxH', '2qwcH', '1mroCH', '1dciAH', '1ugiDH', '1qauH', '1nbcAH', '8rucAIH', '3nulH', '1stnH', '1munH', '1b8oH', '1dbwBH', '1flmBH', '1dqsAH', '1cl8H', '2bopAH', '2cpgAH', '1edgH', '2garH', '1ytbAH', '1dp7PH', '3ebxH', '2mcmH', '2ahjCH', '1cydAH', '1df4H', '1becH', '1iibAH', '1aieH', '1bk7H', '1kuhH', '1penH', '1b9wH', '1euwH', '1wapBH', '1koeH', '1aayH', '1whiH', '1qhfAH', '1di6H', '1h2rLH', '2endH', '1nkrH', '1mgtH', '1tc1BH', '1bkrH', '2cppH', '1hkaH', '2cbaH', '1molAH', '1ushH', '1uxyH', '1gvpH', '1bk0H', '1bbzEFH', '1qq4H', '1gpeAH', '1qj4H', '1bbhAH', '1qhvH', '1arbH', '1ay7BH', '1dlfH', '1npkH', '1c52H', '2ahjDH', '7atjH', '2tnfAH', '1oaaH', '2trxAH', '1qreH', '1cb0H', '7odcH', '1b6gH', '1aqzAH', '1orcH', '1vfrAH', '1c3dH', '1ra9H', '1nfnH', '1rhsH', '1svfABH', '1tifH', '1hpmH', '1chdH', '1qfmH', '1cv8H', '1xikAH', '1a2pAH', '1lkkH', '1behBH', '1dosAH', '1akoH', '1psrAH', '1benABH', '1bg2H', '1nifH', '1lstH', '1kptAH', '1qb7H', '1hmtH', '2sn3H', '1nwpAH', '1hxnH', '1aohBH', '1adsH', '1a28BH', '1bj7H', '1smdH', '1cxyH', '2nlrH', '1ajsAH', '3htsBH', '1ek6AH', '1c3pH', '1vcaAH', '1b4kAH', '1fusH', '2porH', '1dxgAH', '1gsoH', '1bb1AH', '1bf4AH', '1qd1BH', '1mjhBH', '1lmb4H', '1c24H', '1b3aAH', '1uroH', '3sdhAH', '1xwlH', '1tx4AH', '1cexH', '1es5H', '1bdoH', '1tgxAH', '1cemH', '1tgsIH', '1poaH', '2fdnH', '1tyvH', '3ezmH', '1msiH', '2msbAH', '4pgaAH', '1bd0AH']

//create stage
var stage = new NGL.Stage("viewport");
//set a default value for current protein
var current_protein = "3pqr";
// declare orientation
var current_orientation;
//declare set of styles
var styles_sets = new Set();
// load a PDB structure and consume the returned `Promise`
function loadPDB(){
    //checks whether or not the view should be reset
    var viewResetOrBuildUpon = document.getElementById("flexSwitchCheckDefault").checked;
    //console.log(view_reset_or_build_upon);
    //sets orientation
    current_orientation = stage.viewerControls.getOrientation();
    if(!viewResetOrBuildUpon){
        stage.removeAllComponents();
        styles_sets.clear();
    }
    console.log("Current Protein:", current_protein);
    stage.loadFile("rcsb://protein_files/"+current_protein).then(function (component) {
        // add a style representation to the structure component
        var style = document.getElementById("style");
        var styleValue = style.options[style.selectedIndex].value;
        // add a color scheme to the structure component
        var color = document.getElementById("colorid");
        var colorValue = color.options[color.selectedIndex].value;
        console.log("Style: ", styleValue,
                    "Color: ", colorValue
                    );
        //catching error of searching protein before setting style
        try{
            //calling function to add components to stage
            addComponentsToStage(component, styleValue, colorValue);
        }
        catch(TypeError){
            //setting any type errors to default to backbone view and atonmindex colorscheme
            component.addRepresentation("cartoon", {colorScheme: "bfactor"});
        }
        //loads info box
        loadDraggableInfo(component);
        component.autoView();
    });
}

//function to add all components to stage
function addComponentsToStage(component, styleValue, colorValue){
    
    //error handling for selecting color scheme before protein style
    if(styleValue == "None")styleValue = "cartoon";
    if(colorValue == "None")colorValue = "bfactor";
    
    styles_sets.add(styleValue);
    //adding representation
    component.addRepresentation(styleValue, {colorScheme: colorValue});
    //adding labels
    component.addRepresentation("label",{
        sele: "( 135 or 223 or 347 or 296 ) and .CB",
        color: "white", scale: 1.7
    });
    component.addRepresentation("label",{
        sele: "RET and .C19",
        color: "white", scale: 1.7, labelType: "resname"
    });
}

//setting popular examples as protein
function setExampleProtein(){
    var popularProtein = document.getElementById("exampleProteins");
    var popularProteinValue = popularProtein.options[popularProtein.selectedIndex].value;
    //console.log("Popular protein",popularProteinValue);
    current_protein = popularProteinValue;
    refreshStage();
}

//calculates the bfactor average
function calcBfactorAvg(component){
    //calculates B-factor statistic
    var bfactorSum = 0;
    var bfactorMin = +Infinity;
    var bfactorMax = -Infinity;
    component.structure.eachAtom(function(atom) {
        bfactorSum += atom.bfactor;
        if (bfactorMin > atom.bfactor) bfactorMin = atom.bfactor;
        if (bfactorMax < atom.bfactor) bfactorMax = atom.bfactor;
    });
    var bfactorAvg = bfactorSum / component.structure.atomCount;
    //console.log("Sum:", bfactorSum, "Min:", bfactorMin, "Max:", bfactorMax, "Avg:", bfactorAvg)
    return bfactorAvg.toPrecision(4);
}

//sets the canvas to full screen
function setFullscreen(){
    stage.toggleFullscreen();
}

//sets the view to orient the molecule
function setOrientation(){
    // var getOrientation = stage.viewerControls.getOrientation()
    stage.viewerControls.align(current_orientation)
}

//toggles canvas spin
function toggleSpin(){
    stage.toggleSpin();
    
    document.getElementById("toggleRock").innerHTML = "Toggle Rock";
    toggleSpinHTML = document.getElementById("toggleSpin").innerHTML;
    if (toggleSpinHTML == "Toggle Spin"){
        document.getElementById("toggleSpin").innerHTML = "Untoggle Spin";
        return;
    }
    document.getElementById("toggleSpin").innerHTML = "Toggle Spin";
}

//toggles canvas rock
function toggleRock(){
    stage.toggleRock();
    
    document.getElementById("toggleSpin").innerHTML = "Toggle Spin";
    toggleRockHTML = document.getElementById("toggleRock").innerHTML;
    if (toggleRockHTML == "Toggle Rock"){
        document.getElementById("toggleRock").innerHTML = "Untoggle Rock";
        return;
    }
    document.getElementById("toggleRock").innerHTML = "Toggle Rock";
}

//toggles protein info moveable box
function toggleInfo(){
    let x = document.getElementById("draggableDiv");
    if(x.style.display === "none"){
        document.getElementById("toggleInfo").innerHTML = "Untoggle Info";
        x.style.display = "block";
        return;
    }
    document.getElementById("toggleInfo").innerHTML = "Toggle Info";
    x.style.display = "none";
}

//toggles protein info moveable box
function toggleLigandInfo(){
    //needs implementing
}

//on page loads relevant details: protein list 
function loadModalList(){
    var html = "";
    //adds every protein in protein list to button and inserts into html
    for (var i = 0; i < PROTEIN_LIST.length; i++) {
        html += "<button type='button' class='list-group-item list-group-item-action' id='"+i+"' onClick='getProteinClicked(this.id)'>" + PROTEIN_LIST[i]+ "</button>";
    }
    //console.log(PROTEIN_LIST.length)
    document.getElementById("protein_list").innerHTML = html;
}

//Function to clear search bar and remove list once close button has been clicked
function onModalClose(){
    document.getElementById("searchbar").value = "";
    document.getElementById("protein_list").innerHTML = "";
}

//updates the current protein name to match what has been uploaded so that file can be loaded onto WebGL stage
function updateCurrentProtein(){
    //gets the name of the file clicked on
    const fileSelector = document.getElementById('file-selector');

    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
    });
    //grabs the current file selected and trims string to have only protein name
    var proteinName = String(fileSelector.value).toUpperCase();
    current_protein = proteinName.substring(proteinName.lastIndexOf("\\") + 1, proteinName.lastIndexOf("."));
    console.log("Current Protein:", current_protein);
    
    refreshStage();
    document.getElementById("closeModalButton").click();
}

//Test function to console.log which protein is being clicked on search modal
function getProteinClicked(clicked_id){
    //console.log("Clicked ID:",clicked_id);
    //console.log("Protein Name:",PROTEIN_LIST[clicked_id]);
    //set search bar equal to protein clicked
    document.getElementById("searchbar").value = PROTEIN_LIST[clicked_id];
}

//Filter function to filter out proteins while typing
function filterSearchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    //console.log('Input Value:',filter);
    
    div = document.getElementById("protein_list");
    
    protein_buttons = div.getElementsByTagName("button");
    //filter out buttons that do not have input letters
    for (i = 0; i < protein_buttons.length; i++) {
        txtValue = protein_buttons[i].textContent || protein_buttons[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            protein_buttons[i].style.display = "";
        } else {
            protein_buttons[i].style.display = "none";
        }
    }
}

//Function to grab protein name and load onto stage
function searchSelectClicked(){
    let searchValue = document.getElementById("searchbar").value;
    //console.log(search_value);
    current_protein = searchValue;
    refreshStage();
}

//refreshed the stage and pauses for 0.5 seconds for modal to close if open
async function refreshStage(){
    await new Promise(r => setTimeout(r, 500));
    //unchecks combine styled
    document.getElementById("flexSwitchCheckDefault").checked = false;
    //removes previous protein and loads new protein
    stage.removeAllComponents();
    loadPDB();
}

// Enable tooltips everywhere
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Handle window resizing
window.addEventListener("resize", function(event){
    stage.handleResize();
}, false);

// Make the DIV element draggable:
dragElement(document.getElementById("draggableDiv"));

//function needed to drag div element
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//load the data into the draggable info box
function loadDraggableInfo(component){
    //console.log("Residue Map:",component.structure.residueMap.dict);
    //https://nglviewer.org/ngl/api/class/src/structure/structure.js~Structure.html
    
    //get info box data
    let title = component.structure.title;
    let atomCount = component.structure.atomCount;
    let bondCount = component.structure.bondCount;
    let residueCount = component.structure.residueStore.count;
    let entityList = component.structure.entityList;
    
    let chainsCount = getUniqueChainsCount(component.structure.chainStore);
    let bfactorAvg = calcBfactorAvg(component);
    let proteinElements = getProteinElements(component.structure.atomMap);

    //passes list of objects to filter and print macromolecules
    buildMacromoleculesList(entityList);

    //set info box html text
    document.getElementById("proteinNameInfo").innerHTML = current_protein;
    document.getElementById("proteinTitle").innerHTML = title;
    document.getElementById("atomCount").innerHTML = atomCount;
    document.getElementById("bondCount").innerHTML = bondCount;
    document.getElementById("residueCount").innerHTML = residueCount;
    document.getElementById("chainsCount").innerHTML = chainsCount;
    document.getElementById("bfactorstat").innerHTML = bfactorAvg;
    document.getElementById("proteinElements").innerHTML = proteinElements;
    document.getElementById("stlyeSelected").innerHTML = [...styles_sets].join(', ');

}

//return unqiue elements atoms made of
function getProteinElements(atomMap){
    let distinctElements = new Set();
    for(let i = 0; i < atomMap.list.length;i++){
        distinctElements.add(atomMap.list[i].element);
    }
    //return sorted array from the distinctElement set
    return [...new Set(distinctElements)].sort().join(", ");
}

//returns the amount of unique chains in protein
function getUniqueChainsCount(chainStore){
    let distinctChains = [...new Set(chainStore.chainname)];
    //returns count of distinct chains subtracting 1 (no chains with the value of 0)
    return distinctChains.length - 1;
}

//handles building the html list for the macromolecules info
function buildMacromoleculesList(entityList){
    let macroList = new Set();
    
    for(let i = 0; i < entityList.length; i++){
        macroList.add(entityList[i].description);
    }
    //console.log(macro_list);
    //remove previous macromolecules from list
    document.getElementById("macromoleculesList").innerHTML = "";
    let list = document.getElementById("macromoleculesList");
    //build out list of macromolecules
    macroList.forEach(function(item){
        let li = document.createElement("li");
        li.innerText = capitalize(item);
        list.appendChild(li);
    });
}

//returns a capitalized string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//take screen shot of current stage
function takeScreenshot(){
    stage.makeImage({
        factor: 1,
        antialias: false,
        trim: false,
        transparent: false}).
    then(function(blob){
        NGL.download(blob, ""+current_protein+".png");
    });
}

//clear the stage
function clearStage(){
    stage.removeAllComponents();
    document.getElementById("proteinNameInfo").innerHTML = "";
    document.getElementById("proteinTitle").innerHTML = "";
    document.getElementById("atomCount").innerHTML = "";
    document.getElementById("bondCount").innerHTML = "";
    document.getElementById("residueCount").innerHTML = "";
    document.getElementById("chainsCount").innerHTML = "";
    document.getElementById("bfactorstat").innerHTML = "";
    document.getElementById("proteinElements").innerHTML = "";
    document.getElementById("macromoleculesList").innerHTML = "";
    document.getElementById("stlyeSelected").innerHTML = "";
}

//tasks:
// create a detailed text box explaining function, location and role for examples 
// examples of proteins with animations + highlighted parts of hemoglobin, covid19, etc (https://github.com/nglviewer/ngl/blob/v0.9.3/examples/js/examples.js)
// add tooltips ref: https://getbootstrap.com/docs/4.0/components/tooltips/
// https://proteopedia.org/wiki/fgij/
// https://www.umass.edu/molvis/workshop/osaka08s.htm


