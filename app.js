function AddDataToTable(){
  event.preventDefault(); // prevent page refresh

  let bookTitleInput = document.getElementById("booktitleinput").value;
  let authorNameInput = document.getElementById("authernameinput").value;
  let checkboxes = document.querySelectorAll('.checkedtag');
  let table = document.getElementById("mytable");
  
  let row = table.insertRow(-1); //Insert a new row at the last position of the table
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  cell1.innerHTML = table.rows.length - 1; //Set the first cell to the row number
  cell2.innerHTML = bookTitleInput;
  cell3.innerHTML = authorNameInput;
  //Adding Checked Values in a Array........
  var arr = new Array();
  var j=0;
  for(let i=0;i<checkboxes.length;i++){
    if(checkboxes[i].checked){
  arr[j]=checkboxes[i].value;
  j++;
    }
  }
  //printing "," in between multi selected chekbox values........
  for(let i=0;i<arr.length-1;i++){
    cell4.innerHTML += arr[i]+", ";
  }
  //printing "." at the end of the multi selected checkbox values............
  cell4.innerHTML += arr[arr.length-1]+".";
  document.getElementById("formtag").reset();
  }
