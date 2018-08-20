// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName('but');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
var cont =0;
// When the user clicks the button, open the modal 
for (var x = 0; x < btn.length; x++){
	
	btn[x].onclick = function(){
		for(var i =0; i<btn.length;i++){
			if (this == btn[i]) {
				cont = i;
				break
			};
		};	
		/*modal[cont].style.display = "block";*/
		modal[0].style.display = "block";
	}
};

setInterval(function(){
			$("#content").load("carga.html");
			cargarDatos(cont);
		}, 16);
		function cargarDatos(cont){
			switch(cont){
				case 0:
					document.getElementById("titulo").innerText=Titulo0;
					document.getElementById("campo1").innerText=Cuerpo0;	
					console.log(cont);	
					break;
				case 1:
					document.getElementById("titulo").innerText=Titulo1;
					document.getElementById("campo1").innerText=Cuerpo1;
					//console.log(cont);
					break;
				case 2:
					document.getElementById("titulo").innerText=Titulo2;
					document.getElementById("campo1").innerText=Cuerpo2;
					break;
				case 3:
					document.getElementById("titulo").innerText=Titulo3;
					document.getElementById("campo1").innerText=Cuerpo3;
					break;
				case 4:
					document.getElementById("titulo").innerText=Titulo4;
					document.getElementById("campo1").innerText=Cuerpo4;
					break;
			}
			var Fie = document.getElementById("pie");
			Fie.innerText=Pie;
			var conten = document.getElementsByClassName('modal-footer')[0];
			conten.appendChild(Fie);
		}
/*btn[0].onclick = function() {
    modal[0].style.display = "block";
}
btn[1].onclick = function() {
    modal[1].style.display = "block";
}
btn[2].onclick = function() {
    modal[2].style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal

for (var x = 0; x < span.length; x++) {
	span[x].onclick = function(){
		/*var cont =0;
		for (var i = 0; i < span.length; i++) {
			if (this == span[i]) {
				cont = i;
				break;
			};
		};
		modal[cont].style.display="none";*/
		modal[0].style.display = "none";
	}
};
/*span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}
span[2].onclick = function() {
    modal[2].style.display = "none";
}*/

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	for (var i = 0; i < modal.length; i++) {
		if (event.target == modal[i]) {
			modal[0].style.display = "none";
		};
	};

	/*
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    else{
    	if (event.target == modal[1]) {
        	modal[1].style.display = "none";
    	}
    	else{
    		if (event.target == modal[2]) {
        		modal[2].style.display = "none";
    		}	
    	}
    }*/
}
