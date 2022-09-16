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

        document.getElementById('ww').innerHTML = "Convert (NN°<i style='color:blue;'>'C'</i>) to (NN°<i style='color:red;'>F</i>) =  "+Math.floor(input1/5*9+32);
    }else{
        document.getElementById('ww').innerHTML = "<i style='color:red;'>Erorr</i> Please Enter any number between -40 to 110";
    }
}
document.getElementById("outF").onclick= function(){
    let input1 = document.getElementById("in").value;
    if (input1<=230 && input1>=-40){

        document.getElementById('ww').innerHTML = "Convert (NN°<i style='color:red;'>'F'</i>) to (NN°<i style='color:blue;'>C</i>) =  "+Math.floor(input1-32*5/9);
    }else{
        document.getElementById('ww').innerHTML = "<i style='color:red;'>Erorr</i> Please Enter any number between -40 to 230";
    }
}