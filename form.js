function funsubmit(){



     var name = document.myForm.firstname.value; 
     var surname= document.myForm.lastname.value;
     var mobile = document.myForm.mobileno.value;
	   var email = document.myForm.emailadd.value;
	   var password = document.myForm.txtpassword.value;
	   var dob = document.myForm.dob.value;
	   var month = document.getElementById("selmonth");
     var strUser = month.options[month.selectedIndex].value;
     var strUser1 = month.options[month.selectedIndex].text;
     var year = document.myForm.txtyear.value;
     var gen = document.myForm.gender.value;
     


    


if(name=="")
{
	document.getElementById('displayfname').innerHTML="**Please Enter Name";
	return false;
}


 else if(surname=="")
{
	document.getElementById('displaylname').innerHTML="**Please Enter Surname";
	return false;
}


 else if(mobile=="")
{
	document.getElementById('displaymob').innerHTML="**Please Enter MobileNo.";
	return false;
}


else if(mobile.length<10)
 {  
    document.getElementById('displaymob').innerHTML="**Length should be 10 digit";
 	return false;
}


else if(isNaN(mobile))
 {  
    document.getElementById('displaymob').innerHTML="**Numric value only";
  return false;
}


 else if(email=="")
{
		document.getElementById('btnemail').innerHTML="**Please enter valid Email ";

	 	return false;
}

 else if(email.indexOf("@")<=0)
 {
 	document.getElementById('btnemail').innerHTML="**Invalid @ position ";

	 	return false;
 }


else if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!="."))
{
   document.getElementById('btnemail').innerHTML="**Invalid Email ";

	 	return false;
}


 else if(password=="")
{
	document.getElementById('displaypassword').innerHTML="** Please Enter Password";
	return false;
}

else if(password.length<8)
  {
  	document.getElementById("displaypassword").innerHTML="**Length should be 8 ";
	     return false;
  }

   else if(password.search(/[0-9]/)==-1)
  {
  	document.getElementById("displaypassword").innerHTML="**Atleast 1 numric value must be enter ";
	return false;
  }

   else if(password.search(/[a-z]/)==-1)
  {
  	document.getElementById("displaypassword").innerHTML="**Atleast 1 small letter ";
	return false;
  }

 else if(password.search(/[A-Z]/)==-1)
  {
  	document.getElementById("displaypassword").innerHTML="**Atleast 1 capital letter ";
	return false;
  }

   else if(password.search(/[~\@\#\$\%\^\&\*\(\)\'\;\:\.\,\>\<\-\?\_]/)==-1)
  {
  	document.getElementById("displaypassword").innerHTML="**Atleast 1 Special character except / = ' | +";
	return false;
  }


 else if(dob=="") 
{
	document.getElementById('displaydob').innerHTML="**Please Enter D.O.B";
	return false;
}


else if(strUser=="0") 
{
	document.getElementById('displaydob').innerHTML="** Select month";
	return false;
}

else if(year=="") 
{
	document.getElementById('displaydob').innerHTML="**Please select year.";
	return false;
}


else if(gen=="")
{
	document.getElementById('rdbtngender').innerHTML="**Please select gender.";
	return false;
}


else
{
	 var jsonObj =
     {
     	"First_name":name,
     	"Last_name" :surname,
     	 "Mobileno":mobile,
     	 "Email_id":email,
     	 "Password":password,
     	"Birth_date":dob,
     	"Months":strUser1,
     	 "Years":year,
     };
      console.log(jsonObj);

     // alert((JSON.stringify(jsonObj)));
     
}


}

 function alphabetsOnly(evt)
  {

     evt = (evt) ? evt : event;
     var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
     ((evt.which) ? evt.which : 0));
     if (charCode > 31 && (charCode < 65 || charCode > 90) &&
     (charCode < 97 || charCode > 122)) {
           alert("Enter Alphabates only.");
                return false;
     }
        return true;
 }


   




            

