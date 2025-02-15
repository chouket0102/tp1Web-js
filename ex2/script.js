
document.addEventListener("DOMContentLoaded", () => {
    const colorInput = document.getElementById("colorPicker");
    const fontSizeInput = document.getElementById("fontSize");
    const fontSelect = document.getElementById("fontSelect");
    const textParagraph = document.getElementById("textParagraph");
  
    
    function updateColor() {
      textParagraph.style.color = colorInput.value;
    }
  
    function updateFontSize() {
      textParagraph.style.fontSize = fontSizeInput.value + "px";
    }
  
    function updateFontFamily() {
      textParagraph.style.fontFamily = fontSelect.value;
    }
  
    colorInput.addEventListener("input", updateColor);
    fontSizeInput.addEventListener("input", updateFontSize);
    fontSelect.addEventListener("change", updateFontFamily);
  
   
    updateColor();
    updateFontSize();
    updateFontFamily();
  });
  