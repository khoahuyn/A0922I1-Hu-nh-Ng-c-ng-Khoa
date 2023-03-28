var num1,num2;
var kqua;
function click_add() {
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    kqua=Number(num1)+Number(num2);

    document.getElementById("ketqua").innerHTML="Result:"+kqua;

    if(isNaN(num1)){
        document.getElementById("thongtin").innerHTML="*Must be numeric*";
    }

    if(isNaN(num2)){
        document.getElementById("thongtin2").innerHTML="*Must be numeric*";
    }
}

function click_subtract() {
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    kqua=Number(num1)-Number(num2);

    document.getElementById("ketqua").innerHTML="Result:"+kqua;

    if(isNaN(num1)){
        document.getElementById("thongtin").innerHTML="*Must be numeric*";
    }

    if(isNaN(num2)){
        document.getElementById("thongtin2").innerHTML="*Must be numeric*";
    }
}

function click_divided() {
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    kqua=Number(num1)/Number(num2);

    document.getElementById("ketqua").innerHTML="Result:"+kqua;

    if(isNaN(num1)){
        document.getElementById("thongtin").innerHTML="*Must be numeric*";
    }

    if(isNaN(num2)){
        document.getElementById("thongtin2").innerHTML="*Must be numeric*";
    }
    if(num2==0){
        document.getElementById("thongtin2").innerHTML="*Illegal*";

    }
}


function click_multiplication() {
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
    kqua=Number(num1)*Number(num2);

    document.getElementById("ketqua").innerHTML="Result:"+kqua;

    if(isNaN(num1)){
        document.getElementById("thongtin").innerHTML="*Must be numeric*";
    }

    if(isNaN(num2)){
        document.getElementById("thongtin2").innerHTML="*Must be numeric*";
    }
}

function click_reset(){
    document.getElementsByTagName("form")[0].reset();
    document.getElementById("thongtin").innerHTML="";
    document.getElementById("thongtin2").innerHTML="";
    document.getElementById("ketqua").innerHTML="";
}


