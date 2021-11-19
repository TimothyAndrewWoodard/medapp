const button = document.getElementById('new prescription');

function addPrescription() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function createPrescription() {
  const div = document.getElementById('prescriptions');

  const newPrescription = document.createElement('div');
  newPrescription.classList.add('prescription');
  newPrescription.innerHTML =
    'Drug: ' + document.getElementById('prescriptionForm').Drug.value;
  div.appendChild(newPrescription);
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

button.addEventListener('click', () => {});

/*function AddPre() {
  var pre = document.createElement('pre');
  pre.innerHTML =
    '<pre>\n\
Drug:               Dosage:           Instructions: \r\n\
</pre>';
  var container1 = document.getElementById('container1');
  container1.appendChild('pre');
}
*/
