function formCheck() {
  event.preventDefault();
	var x = document.getElementById("form");
	var text = "";
	for (var i = 0; i < x.length; i++) {
		x.elements[i].className = "";
	}
   
  if (!x.elements[5].value.endsWith(".jpg")) {
		text += "Изображение должно быть формата *.jpg" + "<br>";
    x.elements[5].className = "error";
	}
  
	if (x.elements[5].files[0].size > 1038336) {
		text += "Размер фото должен быть меньше 1 Мб" + "<br>";
	}
  
	document.getElementById("errorBlock").innerHTML = text;
}