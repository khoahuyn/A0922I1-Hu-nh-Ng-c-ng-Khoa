function do_something() {
        let str1=document.getElementById("from").value;
        let str2= document.getElementById("to").value;
        let tien=+document.getElementById("tien").value;
        let doi=0;
        if(str1=="USD" && str2=="VietNam"){
            // doi=tien*23;
            document.getElementById("ketqua").innerHTML="result: "+tien*23;
        }else {
            if (str1 == "VietNam" && str2 == "USD") {

                document.getElementById("ketqua").innerHTML = "result: " + tien / 23;

            } else {
            }
            if (str1 == str2) {
                document.getElementById("ketqua").innerHTML = "result: " + tien;
            }
        }
}