const classes = ["senior", "freshman"]

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
  updateNumber();
}

function updateNumber(){
  classes.forEach(numMath);
}

function numMath(year){
  var total = 0;
  for (let i = 1; i < document.getElementById(year).rows.length; i++) {
    if(document.getElementById(year).rows[i].cells[2].innerHTML != "none"){
      total += parseInt(document.getElementById(year).rows[i].cells[2].innerHTML, 10);
    }
 
  }

  if(total <= 0){
    total = "none";
  }
  document.getElementById(year + "Total").innerHTML = total;
}