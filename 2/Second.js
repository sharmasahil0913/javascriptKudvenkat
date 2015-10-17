function addNumbers()
{	  
	var firstNum = parseFloat(document.getElementById("txtFirstNumber").value);
	
	if (firstNum=="") {
		alert("First number is required");
		return;
	}

	if (isNan(firstNum)) {
		alert("Enter valid number");
		return;
	}

	var secondNum = parseFloat(document.getElementById("txtSecondNumber").value);		    

	if (secondNum=="") {
		alert("First number is required");
		return;
	}

	if (isNan(secondNum)) {
		alert("Enter valid number");
		return;
	}
	document.getElementById("txtResult").value=firstNum+secondNum;		
}

//document.getElementById("txtFirstNumber").value would return string
//addition of two string is concatenation
//so we have to use parseInt OR parseFloat

