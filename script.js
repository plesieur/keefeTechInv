function prpfile(name){
  document.getElementById("Name").innerHTML = name;
}
function popfile(email){
  document.getElementById("Email").innerHTML = email;
}
function popfile(account){
  document.getElementById("Account").innerHTML = account;
}

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

function getName(year, stdId, email, name, outBound){
  if (classes.includes(year) && !studentIDs.includes(stdId)){
    studentIDs.push(stdId);

    const row1 = document.createElement("tr");
    row1.classList.add("student");
    row1.id = stdId;

    const col1 = document.createElement("td");
    col1.innerHTML = name;

    row1.appendChild(col1);

    const col2 = document.createElement("td");
    col2.innerHTML = email;

    row1.appendChild(col2);

    const col3 = document.createElement("td");
    if (outBound > 0) {
      col3.innerHTML = outBound;
    }
    else {
      col3.innerHTML = "none";
    }

    row1.appendChild(col3);

    const col4 = document.createElement("td");
    col4.classList.add("check");

    row1.appendChild(col4);

    document.getElementById(year).appendChild(row1);

    updateNumber();
  }

}