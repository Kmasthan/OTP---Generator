function getotp()
{
    var result=Math.random()*(9999-1000)+1000;
    var otp=Math.floor(result);
    var name=document.querySelector(".input").value;
    console.log(name);
    var Phone=document.querySelector(".Phone").value;
    if((isProperName(name)!=true))
    {
        document.getElementById("output").textContent = "Please enter the proper Name";
    }
    else if(name==''&&Phone=='')
    {
        document.getElementById("output").textContent = "Please enter the detailes";
    }
    else if(name=='')
    {
        document.getElementById("output").textContent = "Please enter your name !!!";
    }
    else if(Phone=='')
    {
        document.getElementById("output").textContent = "Please enter your Phone number";
    }
    else if(Phone.length !=10)
    {
        document.getElementById("output").textContent = "Please enter the valied Phone number";
    }
    else
    {
        document.getElementById("output").textContent="Dear "+name+" Your OTP is "+otp+" for "+Phone;

    }
}
function isProperName(name)
{
    return /^[a-zA-Z]+$/.test(name);
}
