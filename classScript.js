const classes = ["senior", "freshman"]
const studentIDs = ["1234"];

function dropDownClick(year) {
  if(classes.includes(year)){
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
  else if(studentIDs.includes(year)){
    let items = document.getElementsByClassName(year);
    console.log("std" + year);
    if(document.getElementById("std" + year).innerHTML.charCodeAt(0) == "8595"){
      document.getElementById("std" + year).innerHTML = "&#8593";
      for (let i = 0; i < items.length; i++) {
        items[i].style.display = "table-row";
      }
    }
    else{
      document.getElementById("std" + year).innerHTML = "&#8595";
      for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
    }
    console.log(document.getElementById("std" + year).innerHTML.codePointAt(0));
  }
  
  updateNumber();
}

function updateNumber(){
  classes.forEach(numMath);
}

function numMath(year){
  var total = 0;
  for (let i = 1; i < document.getElementById(year).rows.length; i++) {
    if(document.getElementById(year).rows[i].cells[2].innerHTML != "none" && document.getElementById(year).rows[i].classList.contains("student")){
      total += parseInt(document.getElementById(year).rows[i].cells[2].innerHTML, 10);
    }
 
  }

  if(total <= 0){
    total = "none";
  }
  document.getElementById(year + "Total").innerHTML = total;
}

function addNewYear(year){
  if(classes.includes(year)){
    return;
  }
  classes.push(year);

  const yearRow = document.createElement("tr");

  const col1 = document.createElement("td");
  const col1Text = document.createTextNode(year);
  col1.appendChild(col1Text);
  yearRow.appendChild(col1);
  
  const col2 = document.createElement("td");
  const col2Text = document.createTextNode("");
  col2.appendChild(col2Text);
  yearRow.appendChild(col2);

  const col3 = document.createElement("td");
  const col3Text = document.createTextNode("none");
  col3.id = (year + "Total");
  col3.appendChild(col3Text);
  yearRow.appendChild(col3);

  const col4 = document.createElement("td");
  col4.classList.add("check");
  const col4Div = document.createElement("div");
  col4Div.classList.add("dropdown");
  
  const col4Btn = document.createElement("button");
  col4Btn.id = year + "Drop";
  col4Btn.classList.add("dropbtn");
  col4Btn.addEventListener("click",function(){ dropDownClick(year)});
  col4Btn.year = year;
  col4Btn.innerHTML ="&#8595";
  //const col4Text = document.createTextNode("&#8595");

  //col4Btn.appendChild(col4Text);
  col4Div.appendChild(col4Btn);
  col4.appendChild(col4Div);
  yearRow.appendChild(col4);

  document.getElementById("classTable").appendChild(yearRow);
  
  addYearDrop(year);
}

function addYearDrop(year){
  const tbody = document.createElement("tbody");
  tbody.id = year;
  tbody.classList.add("classDropDown");
  tbody.style.display = "none";

  const row1 = document.createElement("tr");
  row1.classList.add("tabHead");
  
  tbody.appendChild(row1);

  const col1 =document.createElement("td");
  col1.innerHTML = "name";

  row1.appendChild(col1);
  
  const col2 = document.createElement("td");
  col2.innerHTML = "email";

  row1.appendChild(col2);

  const col3 = document.createElement("td");
  col3.innerHTML = "amount of out bound items";
  
  row1.appendChild(col3);

  const col4 =document.createElement("td");
  col4.classList.add("check");
  row1.appendChild(col4);

  document.getElementById("classTable").appendChild(tbody);

}

function addStudent(year, stdId, email, name, outBound){
  if(classes.includes(year) && !studentIDs.includes(stdId)){
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
    if(outBound > 0){
      col3.innerHTML = outBound;
    }
    else{
      col3.innerHTML = "none";
    }

    row1.appendChild(col3);

    const col4 = document.createElement("td");
    col4.classList.add("check");

    const col4Btn = document.createElement("button");
    col4Btn.id = "std" + stdId;
    col4Btn.classList.add("dropbtn");
    col4Btn.innerHTML = "&#8595";
    col4Btn.addEventListener("click",function(){ dropDownClick(stdId)});

    const col4Btn2 = document.createElement("button");
    col4Btn2.id = "stdbin" + stdId;
    col4Btn2.classList.add("dropbtn");
    col4Btn2.innerHTML = "&#9003";
    col4Btn2.addEventListener("click", function(){ deleteThis(stdId)})

    col4.appendChild(col4Btn);
    col4.appendChild(col4Btn2);

    row1.appendChild(col4);

    document.getElementById(year).appendChild(row1);

    updateNumber();

    const row2 = document.createElement("tr");
    row2.classList.add("tabHead");
    row2.classList.add(stdId);
    row2.style.display = "none";

    const col21 =  document.createElement("td");
    col21.innerHTML = "item name";

    const col22 =  document.createElement("td");
    col22.innerHTML = "sku number";
    
    const col23 =  document.createElement("td");
    col23.innerHTML = "amount outbound";

    const col24 =  document.createElement("td");
    col24.classList.add("check");

    row2.appendChild(col21);
    row2.appendChild(col22);
    row2.appendChild(col23);
    row2.appendChild(col24);
    row1.after(row2);
  }

  
}

function addStudentItems(stdId, toolID, toolName){

  const row1 = document.createElement("tr");
  row1.classList.add("item");
  row1.classList.add(stdId);

  const col1 = document.createElement("td");
  col1.innerHTML = toolName;
  row1.appendChild(col1);
  
  const col2 = document.createElement("td");
  col2.innerHTML = toolID;
  row1.appendChild(col2);

  const col3 = document.createElement("td");
  col3.innerHTML = "1";
  row1.appendChild(col3);

  const col4 = document.createElement("td");
  col4.classList.add("check");
  row1.appendChild(col4);

  row1.style.display = "none";

  document.getElementsByClassName("tabHead " + stdId)[0].after(row1);
}

function testAddClass(){
  var tName = document.getElementById("cName").value;
  document.getElementById("cName").value = "";
  addNewYear(tName);
}

function testAddStudent(stdId){
  const stdElem = document.getElementById("add"+stdId);
  var stdYear = document.getElementById("slt"+stdId).value;
  var stdEmail = stdElem.cells[1].innerHTML;
  var stdName = stdElem.cells[0].innerHTML;
  console.log(stdYear + ", " + stdEmail + ", " + stdName);
  addStudent(stdYear, stdId, stdEmail, stdName, 0);
  stdElem.remove();
}

function addStudentToList(stdId, stdName, stdEmail){
  const row = document.createElement("tr");
  row.id = "add"+stdId;

  const col1 = document.createElement("td");
  col1.innerHTML = stdName;
  row.appendChild(col1);

  const col2 = document.createElement("td");
  col2.innerHTML = stdEmail;
  row.appendChild(col2);

  const col3 = document.createElement("td");
  const col3slt = document.createElement("select");
  col3slt.id = "slt" + stdId;
  for(let i = 0; i < classes.length; i++){
    const col3op = document.createElement("option");
    col3op.value = classes[i];
    col3op.innerHTML = classes[i];
    col3slt.appendChild(col3op);
  }
  col3.appendChild(col3slt);
  row.appendChild(col3);

  const col4 = document.createElement("td");
  const col4Btn = document.createElement("button");
  col4Btn.addEventListener("click",function(){ testAddStudent(stdId)});
  col4Btn.innerHTML = "add student";
  col4.appendChild(col4Btn);
  row.appendChild(col4);
  
  document.getElementById("stdTable").appendChild(row);
}

function deleteThis(stdId){
  const div = document.createElement("div");
  div.id = "confirm";
  const para = document.createElement("p");
  para.innerHTML = "are you sure";
  div.appendChild(para);

  const btnY = document.createElement("button");
  btnY.innerHTML = "yes";
  btnY.addEventListener("click",function(){ confirmDelete(stdId)});
  div.appendChild(btnY);

  const btnN = document.createElement("button");
  btnN.innerHTML = "no";
  btnN.addEventListener("click",function(){ dontDelete()});
  div.appendChild(btnN);
  document.body.appendChild(div);
}

function dontDelete(){
  document.getElementById("confirm").remove();
}

function confirmDelete(stdId){
  document.getElementById("confirm").remove();
  document.getElementById(stdId).remove();
  const delt = document.getElementsByClassName(stdId);
  for(let i = 0; i < delt.length; i++){
    console.log(delt[i]);
    delt[i].remove();
  }
}