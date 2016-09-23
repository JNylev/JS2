/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var elements = document.getElementsByTagName("div");
var inputs = document.getElementsByTagName("input");
elements[0].style.backgroundColor= "red";
elements[1].style.backgroundColor = "blue";
elements[2].style.backgroundColor = "yellow";

var person = {lastName: 23, firstName: "Johnnyboy", email: "seinVater@dot.com"};
var person1 = {lastName: 666, firstName: "Boerge", email: "Einhund@dot.com"};
var person2 = {lastName: 555, firstName: "YrsaletteJohnson", email: "seinYrsa@dot.com"};
var person3 = {lastName: 856, firstName: "johnine", email: "seinSchwester@dot.com"};
var person4 = {lastName: 46, firstName: "HetteMette", email: "seinMutter@dot.com"};

var personList = [person, person1, person2, person3, person4];
elements[0].innerHTML="";
elements[3].innerHTML="";
elements[4].innerHTML="";
elements[5].innerHTML="";
var tables = document.getElementsByTagName("table");
document.getElementById("form1").addEventListener("submit", toTable);
personList.forEach(listPersons);
click();
toTable();
function listPersons(item)
{
    elements[0].innerHTML+="<tr>"+ item.firstName +"<td><br>";
}
function click()
{
    for (var i = 0; i < elements.length; i++) {
        if (i===0) {
            var temp = i+1;
            elements[i].addEventListener("click", function()
            {
                alert("Div");
            });
            
        }
        else if(i===1)
        {
            elements[i].addEventListener("click", function()
            {
                
                alert("Div");
            });
        }
        else if (i===2)
        {
            elements[i].addEventListener("click", function()
            {
                
                alert("Div");
            });
        }
        else if (i===3)
        {
            elements[i].addEventListener("mouseenter", function()
            {
                
                elements[3].innerHTML+="Hallow Mein freund habst sie ein gutes tag??";
            });
            elements[i].addEventListener("mouseout", function()
            {
                
                elements[3].innerHTML="";
            });
            
        }
        else if (i===4)
        {
            elements[i].addEventListener("mouseenter", function()
            {
                
                elements[4].innerHTML+="1-2-3, yoyoyo lets be ready to gogogo?";
            });
            elements[i].addEventListener("mouseout", function()
            {
                
                elements[4].innerHTML="";
            });
            
        }
        else if (i===5)
        {
            elements[i].addEventListener("mouseenter", function()
            {
                
                elements[5].innerHTML+="Hej min navn er JohnArne jeg er sgu sur tit desværre";
            });
            elements[i].addEventListener("mouseout", function()
            {
                
                elements[5].innerHTML="";
            });       
        }
    }
}
function toTable(e)
{
    
   
        
        tables[0].innerHTML=inputs[0].value+inputs[2].value;
        console.log(inputs[0].value+inputs[2].value);
        
    
}

