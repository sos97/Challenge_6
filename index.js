
var numeric_val = 0;
var display_value = "0";

var buffer_val = 0;

var op_state = "";
document.querySelector("h1").innerHTML = display_value;


function changeTheme()
{   
	if(document.getElementById("sli").value == "1")
	{
		document.querySelector("body").style.backgroundColor = "hsl(222, 26%, 31%)";
		document.querySelector("body").style.color = "#ffffff";
		
		document.getElementsByClassName("grid")[0].style.backgroundColor = "hsl(223, 31%, 20%)";
        
        for(var i = 0; i< document.getElementsByClassName("grid_item").length; i++)
        {
		document.getElementsByClassName("grid_item")[i].style.backgroundColor = "hsl(30, 25%, 89%)";
		document.getElementsByClassName("grid_item")[i].style.borderColor = "hsl(28, 16%, 65%)";
		document.getElementsByClassName("grid_item")[i].style.color = "hsl(221, 14%, 31%)";
        }
        
        document.getElementById("grid_item_4").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("grid_item_4").style.borderColor = "hsl(224, 28%, 35%)";
        document.getElementById("grid_item_4").style.color = "#ffffff";

        document.getElementById("grid_item_17").style.backgroundColor = "hsl(225, 21%, 49%)";
        document.getElementById("grid_item_17").style.borderColor = "hsl(224, 28%, 35%)";
        document.getElementById("grid_item_17").style.color = "#ffffff";

        document.getElementById("grid_item_18").style.backgroundColor = "hsl(6, 63%, 50%)";
        document.getElementById("grid_item_18").style.borderColor = "hsl(6, 70%, 34%)";
        document.getElementById("grid_item_18").style.color = "#ffffff";

        document.getElementsByClassName("display")[0].style.backgroundColor = "hsl(224, 36%, 15%)";

        var slider_type = document.getElementById("sli");
        slider_type.className = "slider";        

	} 
	else if(document.getElementById("sli").value == "2")
	{
		document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 90%)";
		document.querySelector("body").style.color = "hsl(60, 10%, 19%)";
		
		document.getElementsByClassName("grid")[0].style.backgroundColor = "hsl(0, 5%, 81%)";
        
        for(var i = 0; i< document.getElementsByClassName("grid_item").length; i++)
        {
		document.getElementsByClassName("grid_item")[i].style.backgroundColor = "hsl(45, 7%, 89%)";
		document.getElementsByClassName("grid_item")[i].style.borderColor = "hsl(35, 11%, 61%)";
		document.getElementsByClassName("grid_item")[i].style.color = "hsl(60, 10%, 19%)";
        }
        
        document.getElementById("grid_item_4").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementById("grid_item_4").style.borderColor = "hsl(185, 58%, 25%)";
        document.getElementById("grid_item_4").style.color = "#ffffff";

        document.getElementById("grid_item_17").style.backgroundColor = "hsl(185, 42%, 37%)";
        document.getElementById("grid_item_17").style.borderColor = "hsl(185, 58%, 25%)";
        document.getElementById("grid_item_17").style.color = "#ffffff";

        document.getElementById("grid_item_18").style.backgroundColor = "hsl(25, 98%, 40%)";
        document.getElementById("grid_item_18").style.borderColor = "hsl(25, 99%, 27%)";
        document.getElementById("grid_item_18").style.color = "#ffffff";

        document.getElementsByClassName("display")[0].style.backgroundColor = "hsl(0, 0%, 93%)";

        var slider_type = document.getElementById("sli");
        slider_type.className = "slider_1";
	}
	else if(document.getElementById("sli").value == "3")
	{
		document.querySelector("body").style.backgroundColor = "hsl(268, 75%, 9%)";
		document.querySelector("body").style.color = "hsl(52, 100%, 62%)";
		
		document.getElementsByClassName("grid")[0].style.backgroundColor = "hsl(268, 71%, 12%)";
        
        for(var i = 0; i< document.getElementsByClassName("grid_item").length; i++)
        {
		document.getElementsByClassName("grid_item")[i].style.backgroundColor = "hsl(268, 47%, 21%)";
		document.getElementsByClassName("grid_item")[i].style.borderColor = "hsl(290, 70%, 36%)";
		document.getElementsByClassName("grid_item")[i].style.color = "hsl(52, 100%, 62%)";
        }
        
        document.getElementById("grid_item_4").style.backgroundColor = "hsl(281, 89%, 26%)";
        document.getElementById("grid_item_4").style.borderColor = "hsl(285, 91%, 52%)";
        document.getElementById("grid_item_4").style.color = "#ffffff";

        document.getElementById("grid_item_17").style.backgroundColor = "hsl(281, 89%, 26%)";
        document.getElementById("grid_item_17").style.borderColor = "hsl(285, 91%, 52%)";
        document.getElementById("grid_item_17").style.color = "#ffffff";

        document.getElementById("grid_item_18").style.backgroundColor = "hsl(176, 100%, 44%)";
        document.getElementById("grid_item_18").style.borderColor = "hsl(177, 92%, 70%)";
        document.getElementById("grid_item_18").style.color = "hsl(198, 20%, 13%)";

        document.getElementsByClassName("display")[0].style.backgroundColor = "hsl(268, 71%, 12%)";

        var slider_type = document.getElementById("sli");
        slider_type.className = "slider_2";
	}

}


function numberInput( id )
{ if(display_value == "0")
  {
    display_value = "";
  }
  display_value += document.getElementById(id).value;
  numeric_val = parseFloat(display_value);
  screen(display_value);
}



function addition()
{   
	if( op_state == "+")
	{		
    buffer_val += numeric_val;
	}
	else if( op_state == "-")
	{		
    buffer_val -= numeric_val;
	}
	else if( op_state == "*")
	{		
    buffer_val *= numeric_val;
	}
	else if( op_state == "/")
	{		
    buffer_val /= numeric_val;
	}
	else
	{		
    buffer_val += numeric_val;
	}
	numeric_val = 0;
	display_value = "0";
	op_state = "+";	
	screen(op_state);
}

function substraction()
{
   if( op_state == "+")
	{		
    buffer_val += numeric_val;
	}
	else if( op_state == "-")
	{		
    buffer_val -= numeric_val;
	}
	else if( op_state == "*")
	{		
    buffer_val *= numeric_val;
	}
	else if( op_state == "/")
	{		
    buffer_val /= numeric_val;
	}
	else
	{		
    buffer_val += numeric_val;
	}
	numeric_val = 0;
	display_value = "0";
    op_state = "-";
	screen(op_state);
}

function multiplication()
{
	if( op_state == "+")
	{		
    buffer_val += numeric_val;
	}
	else if( op_state == "-")
	{		
    buffer_val -= numeric_val;
	}
	else if( op_state == "*")
	{		
    buffer_val *= numeric_val;
	}
	else if( op_state == "/")
	{		
    buffer_val /= numeric_val;
	}
	else
	{		
    buffer_val += numeric_val;
	}
	numeric_val = 0;
	display_value = "0";
	op_state = "*";
	screen(op_state);
}

function division()
{
	if( op_state == "+")
	{		
    buffer_val += numeric_val;
	}
	else if( op_state == "-")
	{		
    buffer_val -= numeric_val;
	}
	else if( op_state == "*")
	{		
    buffer_val *= numeric_val;
	}
	else if( op_state == "/")
	{		
    buffer_val /= numeric_val;
	}
	else
	{		
    buffer_val += numeric_val;
	}
	numeric_val = 0;
	display_value = "0";
	op_state = "/";
	screen(op_state);
}

function show()
{
	
	if( op_state == "+")
	{		
    buffer_val += numeric_val;
	}
	else if( op_state == "-")
	{		
    buffer_val -= numeric_val;
	}
	else if( op_state == "*")
	{		
    buffer_val *= numeric_val;
	}
	else if( op_state == "/")
	{		
    buffer_val /= numeric_val;
	}
	else
	{		
    buffer_val += numeric_val;

	}
	op_state = "=";
	display_value = buffer_val.toFixed(2).toString();
	numeric_val = buffer_val;
	screen(display_value);
	buffer_val = 0;
}

function del()
{
	display_value = display_value.slice(0,( display_value.length - 1))
	numeric_val = parseFloat(display_value);
	if(display_value == "" && op_state != "=" && op_state != "")
	{
		display_value = "0";
		numeric_val = 0;
		screen(op_state);
	}
	else if((display_value == "") && (op_state == "=" || op_state == ""))
	{
		display_value = "0";
		numeric_val = 0;
		screen(display_value);
	}
	else
	{
	screen(display_value);
	}
}

function reset()
{
	display_value = "0";
	numeric_val = 0;
	buffer_val = 0;
	screen(display_value);
}

function screen( val )
{
  document.querySelector("h1").innerHTML = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');;
}
