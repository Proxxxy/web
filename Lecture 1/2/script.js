function formCheck() {
  event.preventDefault();
	var x = document.getElementById("form");
	var text = "";
	for (var i = 0; i < x.length; i++) {
		x.elements[i].className = "";
	}
   
  if (!x.elements[5].value.endsWith(".jpg")) {
		text += "����������� ������ ���� ������� *.jpg" + "<br>";
    x.elements[5].className = "error";
	}
  
	if (x.elements[5].files[0].size > 1038336) {
		text += "������ ���� ������ ���� ������ 1 ��" + "<br>";
	}
  
	document.getElementById("errorBlock").innerHTML = text;
}