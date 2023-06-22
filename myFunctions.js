/* Form Validation */
function validateForm()
{   
    const key = ["first_name","middle_name","last_name","ID_number","date","phone","rent_type","day","year","year"];
    var message = {};
    key.forEach(element => {
        var value = document.forms["myform"][element].value;
        switch (element) {
            case 'first_name':
                if (value ==""){
                    message[element]="First Name not have Value "; 
                }
                break;
            case 'middle_name':
                if (value ==""){
                    message[element]=" Middle Name not have Value "; 
                }
                break;
            case 'last_name':
                if (value ==""){
                    message[element]=" Last Name not have Value "; 
                }
                break;
            case 'ID_number':
                if (value ==""){
                    message[element]=" ID Number not have Value "; 
                }else{
                    var id = String(value);
                    for (let i = 0; i < id.length; i++) {
                        if (id[i]>='a' && id[i]<='z'){
                            message['ID_number_Charcter'] = "The national number Just Number";
                        }
                        if (id[i]>='A' && id[i]<='Z'){
                            message['ID_number_Charcter'] = "The national number Just Number";
                        }
                    }
                    var card=id[0]+id[1];
                    if(parseInt(card)>14){
                        message[element] = "The national number is invalid";
                    }
                }
                break;
            case 'date':
                if (value ==""){
                    message[element]=" Date not have Value "; 
                }
            break;
            case 'phone':
                if (value ==""){
                    message[element]=" Phone Number  not have Value "; 
                }
                else{
                    var phone = String(value);
                    var phone_num=phone[0]+phone[1]+phone[2];
                    if( phone_num == "091" || phone_num == "092" ){
                        message[element] = "This number is not in service";
                    }
                }
            break;
           
        }
    });
    let mes="";
    for (const m in message) {
        mes=mes+"\n"+message[m];
    }
    if(mes !=""){
        alert(mes); 
        return false;
    }
    var x = transfar();
    return x;
}
function transfar(){
    
    var validate = ValidCaptcha();
    if(validate == false){
        alert("Capatcha Is False");
       
    }
    else 
    alert("your data is saved");
            return validate;
    return validate;
}
/* Function to Generate Captcha */  
function GenerateCaptcha() {  
    var chr1 = Math.ceil(Math.random() * 10) + '';  
    var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
    var captchaCode = str + chr1 ;  
    document.getElementById("txtCaptcha").value = captchaCode  ;
}  
/* Validating Captcha Function */  
function ValidCaptcha() {  
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);  
    var str2 = removeSpaces(document.getElementById('txtCompare').value);  

    if (str1 == str2) return true;
    GenerateCaptcha();  
   
    return false;  
}  
/* Remove spaces from Captcha Code */  
function removeSpaces(string) {  
    return string.split(' ').join('');  
}

function ShowForm(){
    const x =document.getElementById("show1");
    x.removeAttribute('hidden');
    document.getElementById('show1').scrollIntoView({
        behavior: 'smooth'
      });
}
/* Show And Hide Car Info */
let isClicked = true;
function showdetails(Details){
    let car= document.querySelector(Details);
    if(isClicked){
        car.style.display = 'block';
        isClicked = false;

    }
    else{
        car.style.display = 'none';
        isClicked = true;    
    }
    
}