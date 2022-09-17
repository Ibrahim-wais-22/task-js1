let x = 10;
let y = 12;
let z = x*y;
console.log('Z '+'='+' '+z)
// this is one task js language 
// line 1 ,2 and varibles
// line 4 print this varibles in browser
// -----------------------------------------------
//-------homework tow-----------------------------


document.getElementById("outC").onclick= function(){
    let input1 = document.getElementById("in").value;
    if (input1<=110 && input1>=-40){

        document.getElementById('ww').innerHTML = "Convert (NN°<i style='color:blue;'>'C'</i>) to (NN°<i style='color:red;'>F</i>) =  "+((input1/5)*9+32);
    }else{
        document.getElementById('ww').innerHTML = "<i style='color:red;'>Error</i> Please Enter any number between -40 to 110";
    }
}
document.getElementById("outF").onclick= function(){
    let input1 = document.getElementById("in").value;
    if (input1<=230 && input1>=-40){

        document.getElementById('ww').innerHTML = "Convert (NN°<i style='color:red;'>'F'</i>) to (NN°<i style='color:blue;'>C</i>) =  "+(input1-32)*5/9;
    }else{
        document.getElementById('ww').innerHTML = "<i style='color:red;'>Error</i> Please Enter any number between -40 to 230";
    }
}
// ---------------------------homework tow-----------------
const dog={
    name:'my dog',
    color:'black',
    Age:function(a){return a*7;},
    size:'small',
}
function CalculateDogAge(){
    let inputAge = document.getElementById("Age").value;
    let h1Age = document.querySelector('.resultAgeDog').innerHTML= "Age your Dog = "+dog.Age(inputAge);
    return h1Age;
}