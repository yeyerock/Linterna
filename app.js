function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var pointer = document.getElementById("cursor");  
    var linterna= "radial-gradient(circle at " + x +"px " + y+"px, transparent, #000 10%)";  
    pointer.style.background = linterna;
    
  }