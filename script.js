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
    // console.log("hello"+input1);
    document.getElementById('ww').innerHTML = "Convert (NN°<i style='color:blue;'>'C'</i>) to (NN°<i style='color:red;'>F</i>) =  "+Math.floor(input1/5*9+32);
}
document.getElementById("outF").onclick= function(){
    let input1 = document.getElementById("in").value;
    // console.log("hello"+input1);
    document.getElementById('ww').innerHTML = "Convert (NN°<i style='color:red;'>'F'</i>) to (NN°<i style='color:blue;'>C</i>) =  "+Math.floor(input1-32*5/9);
}