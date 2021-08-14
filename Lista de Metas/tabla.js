function Table() {
    // variables
    let btn = document.getElementById("btn"),
        inp = document.getElementById("inp"),
        ol = document.getElementById("lista"),
        hideBtn = document.getElementById("hide-btn");
        
    // Funciones 
    // Boton para anadir tareas 
    let addingTask = ()=>{
        // invalid value
        if (inp.value === "") {
            inp.setAttribute("placeholder", "Add a valid value");
            inp.setAttribute("class", "error");
            inp.addEventListener("click", function() {
                inp.removeAttribute("class");
                inp.value = "";
                inp.setAttribute("placeholder", "Add a Task");
            });
        }
        else {
            let li = document.createElement("LI"),
            content = document.createTextNode(inp.value),
            h3 = document.getElementById("hid"),
            wrap = document.getElementById("wrap");
            hideBtn.removeAttribute("style");
            hideBtn.removeAttribute("hidden");
            h3.removeAttribute("style");
            wrap.removeAttribute("style");
            li.setAttribute("class", "li-child");
            li.appendChild(content);
            ol.appendChild(li);
            inp.value = "";
            inp.setAttribute("placeholder", "Add a Task");

            // 2) Ocultar lista 
            hideBtn.addEventListener("click", function(){
                li.setAttribute("style", "animation: btnRemove 500ms linear;")
                setTimeout(function() {
                    li.remove();
                }, 490)
            });

            // 3) Eliminar dato
            let btnCheck = document.createElement("button"),
                checkContent = document.createElement("i"),
                btnRemove = document.createElement("button"),
                removeContent = document.createElement("i");
            li.addEventListener("pointerover", function () {
                if (li.children.length == 0) {
                    checkContent.setAttribute("class", "fa fa-check")
                    btnCheck.appendChild(checkContent);
                    li.appendChild(btnCheck);
                    removeContent.setAttribute("class", "fa fa-remove-format");
                    btnRemove.appendChild(removeContent);
                    li.appendChild(btnRemove);
                    btnCheck.setAttribute("class", "btnCheck");
                    btnCheck.setAttribute("title", "Haz click si la tarea fue completada");
                    btnRemove.setAttribute("class", "btnRemove");
                    btnRemove.setAttribute("title", "Haz click para eliminar tarea");
                    btnCheck.addEventListener("click", function(){
                        btnCheck.setAttribute("style", "visibility: hidden;");
                        btnRemove.setAttribute("style", "visibility: hidden;");
                        li.setAttribute("style", "animation: btnCheck 500ms linear;")
                        setTimeout(function() {
                            li.remove();
                        }, 490)
                    });
                    btnRemove.addEventListener("click", function(){
                        btnCheck.setAttribute("style", "visibility: hidden;");
                        btnRemove.setAttribute("style", "visibility: hidden;");
                        li.setAttribute("style", "animation: btnRemove 500ms linear;")
                        setTimeout(function() {
                            li.remove();
                        }, 490)
                    });
                }
            });   
            li.addEventListener("pointerleave", function() {
                btnCheck.remove();
                btnRemove.remove();
            }); 
        }    
    };

    // Evento
    // 1) Agregar tarea
    btn.addEventListener("click", addingTask);

}

Table();