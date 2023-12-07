function HitungLuas(){
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var area = alas * tinggi / 2 
    document.getElementById("demoRLP").innerHTML = "L = 1/2 * Alas * Tinggi";
    document.getElementById("demoIRLP").innerHTML = "L = 1/2 * "+alas+" * "+tinggi;
    document.getElementById("ResultLP").innerHTML = "L = "+area;
}
function resetFormL(){
    document.getElementById("sisi").value = "";
}
function HitungKell(){
    var sisi = document.getElementById("sisik").value;
    var perimeter = 3*sisi
    document.getElementById("demoRKP").innerHTML = "K = S + S + S";
    document.getElementById("demoIRKP").innerHTML = "K = " +sisi+ " + " +sisi+ " + " +sisi;
    document.getElementById("ResultKP").innerHTML = "K = "+perimeter;
}
function resetForm(){
    document.getElementById("sisik").value = "";
}
