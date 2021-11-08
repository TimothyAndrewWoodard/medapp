function AddPre() {
  var pre = document.createElement('pre');
  pre.innerHTML =
    '<pre>\n\
Drug:               Dosage:           Instructions: \r\n\
</pre>';
  var container1 = document.getElementById('container1');
  container1.appendChild('pre');
}
