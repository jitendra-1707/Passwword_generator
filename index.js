let str="ABCDEFGHIJKLMLNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/"
var dpass=[];
function detectClick() {
let passlen=document.getElementById("pass-len").value

     
     var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
        for(let j = 0 ; j < 4; j++){
            for (i = 0; i < passlen; i++) {
                var char = Math.floor(Math.random() * str.length);
                   pass += str.charAt(char)
            }
            
            dpass[j]=pass;
            pass='';
        
        }
        document.getElementById("pas1").value=dpass[0]
        document.getElementById("pas2").value=dpass[1]
        document.getElementById("pas3").value=dpass[2]
        document.getElementById("pas4").value=dpass[3]
}



