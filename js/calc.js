function tambah(){ 
    a=eval(document.getElementById("a").value);
    b=eval(document.getElementById("b").value);
    c=a+b;
    document.getElementById("c").value=c;
}
function kurang(){ 
   a=document.getElementById("a").value;
   b=document.getElementById("b").value;
   c=a-b;
   document.getElementById("c").value=c;
}
function kali(){ 
   a=document.getElementById("a").value;
   b=document.getElementById("b").value;
   c=a*b;
   document.getElementById("c").value=c;
}
function bagi(){ 
   a=document.getElementById("a").value;
   b=document.getElementById("b").value;
   c=a/b;
   document.getElementById("c").value=c;
}
function pangkat(){ 
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=Math.pow(a,b);
    document.getElementById("c").value=c;
 }
 function pesan() {
   const ank1 = document.getElementById("a").value;
   const ank2 = document.getElementById("b").value;
 
   if (isNaN(ank1) && (isNaN(ank2))) {
     
   } else {
     alert("Harap Masukkan Angka");
   }
 }