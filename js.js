function decreaseTextSize() {
    var text = document.getElementById("myText");
    var currentSize = parseInt(window.getComputedStyle(text, null).getPropertyValue("font-size"));
    text.style.fontSize = (currentSize - 2) + "px";
  }
  
  function increaseTextSize() {
    var text = document.getElementById("myText");
    var currentSize = parseInt(window.getComputedStyle(text, null).getPropertyValue("font-size"));
    text.style.fontSize = (currentSize + 2) + "px";
  }
  