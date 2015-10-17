		function myFunction()
		{
		    var ret = true;
		    if (document.getElementById("txtFirstName").value == "")
		    {
		        document.getElementById("lblFirstName").innerText = "First Name is required";
		        ret = false;
		    }
		    else
		    {
		        document.getElementById("lblFirstName").innerText = "";
		    }

		    if (document.getElementById("txtLastName").value == "")
		    {
		        document.getElementById("lblLastName").innerText = "Last Name is required";
		        ret = false;
		    }
		    else
		    {
		        document.getElementById("lblLastName").innerText = "";
		    }

		    if (document.getElementById("txtEmail").value == "")
		    {
		        document.getElementById("lblEmail").innerText = "Email is required";
		        ret = false;
		    }
		    else
		    {
		        document.getElementById("lblEmail").innerText = "";
		    }

		    return ret;
		}