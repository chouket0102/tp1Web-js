document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const contentInput = document.getElementById("content");
    const addTodoBtn = document.getElementById("addtodo");
    const todoList = document.getElementById("todoList");
  
    
    function addTodo() {
      const nameValue = nameInput.value.trim();
      const contentValue = contentInput.value.trim();
  
      
      if (!nameValue || !contentValue) {
        alert("Veuillez remplir tous les champs.");
        return;
      }
  
      
      const li = document.createElement("li");
      li.textContent = `${nameValue}: ${contentValue}`;
  
      
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑";
      deleteBtn.addEventListener("click", () => {
        li.remove(); 
      });
  
      
      li.appendChild(deleteBtn);
      
      todoList.appendChild(li);
  
      
      nameInput.value = "";
      contentInput.value = "";
    }
  
    
    addTodoBtn.addEventListener("click", addTodo);
  });
  