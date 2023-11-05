var close_button = document.querySelector('#close-button');
close_button.addEventListener('click', function() {
  var input_text = document.querySelector('#input-text');
  input_text.style.opacity = 0;
  var close_button = document.querySelector('#close-button');
  close_button.style.opacity = 0;
});

var search_button = document.querySelector('#search');
search_button.addEventListener('click', function() {
  var input_text = document.querySelector('#input-text');
  input_text.style.opacity = 1;
  var close_button = document.querySelector('#close-button');
  close_button.style.opacity = 1;
});


function addData() {  
  let name = document.getElementById("input-text").value; 
  let table = document.getElementById("outputTable"); 
  let newRow = table.insertRow(table.rows.length); 

  newRow.insertCell(0).innerHTML = name;
  newRow.insertCell(1).innerHTML = 
      '<button onclick="editData(this)">Redaktə et</button>'+ 
      '<button onclick="deleteData(this)">Sil</button>'; 
  clearInputs(); 
} 

function editData(button) {  
  let row = button.parentNode.parentNode; 
  let nameCell = row.cells[0]; 
  let nameInput = prompt("Enter the updated name:", nameCell.innerHTML); 
  nameCell.innerHTML = nameInput; 
} 

function deleteData(button) { 
  let row = button.parentNode.parentNode; 
  row.parentNode.removeChild(row); 
} 

function clearInputs() {  
  document.getElementById("input-text").value = "";  
} 