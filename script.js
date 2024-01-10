
function dropDownClick(year) {
  if(document.getElementById(year + "Drop").innerHTML.charCodeAt(0) == "8595"){
    document.getElementById(year + "Drop").innerHTML = "&#8593";
    document.getElementById(year).style.display = "table-row-group";
  }
  else{
    document.getElementById(year + "Drop").innerHTML = "&#8595";
    document.getElementById(year).style.display = "none";
  }
  console.log(document.getElementById(year + "Drop").innerHTML.codePointAt(0));
}

