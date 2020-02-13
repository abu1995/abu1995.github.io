var crsec;
var kn;
var rcoeff;
var hydrad;
var slp;
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

function hydraulicRad(value) {
    hydrad = value;
}

function slopeOrgrad(value) {
    slp = value;
}

function finalCalcEng(){
    console.log("hi");
    output=(crsec/1.486)*((hydrad)**(2/3))*((slp)**(1/2)); 
    return output+" f/s";
    //parseFloat = document.getElementById("outputtoshow").innerHTML;
}

function finalCalcSi(){
    console.log("hi");
    output=(crsec/1.0)*((hydrad)**(2/3))*((slp)**(1/2)); 
    return output+" m/s";
    //parseFloat = document.getElementById("outputtoshow").innerHTML;
}