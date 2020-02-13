var crsec;
var kn;
var rcoeff;
var hydrad;
var slp;
var width;
var per;
var height;
var output;
var display;


function crossSecvelo(value) {
    console.log("hi");
    crsec = value;
}

function k(value) {
    kn = value;
}

function roughnessCoeff(value) {
    rcoeff = value;
}



function slopeOrgrad(value) {
    slp = value;
}

function takewidth(value) {
    width = value;
}

function takeheight(value) {
    height = value;
    hydrad = (width*height)/(width+(2*height));
}



// function hydraulicRad() {
//     hydrad = (width*height)/(width+(2*height));
// }



function finalCalcEng(){
    console.log("hi");
    output=(crsec/1.486)*(hydrad)**(2/3)*((slp)**(1/2)); 
    return output+" f/s" +"  The feeling you get when you succesfully calculate Mannings flow velocity especially in ENGLISH units :P";
    //parseFloat = document.getElementById("outputtoshow").innerHTML;
}

function finalCalcSi(){
    console.log("hi");
    output=(crsec/1.0)*((hydrad)**(2/3))*((slp)**(1/2)); 
    return output+" m/s" + "  Congrats, you are killing it !!";
    //parseFloat = document.getElementById("outputtoshow").innerHTML;
}