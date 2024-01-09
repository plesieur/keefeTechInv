
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

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}