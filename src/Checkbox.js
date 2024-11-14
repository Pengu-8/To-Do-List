import Todo from "./assets/Todotitle.png";

function Checkbox(props){
    function sigma() {

        const new_text = document.createElement("textarea");
        new_text.classList.add("incheckbox");
        new_text.placeholder = "What to do?";
        const new_tick = document.createElement("input");
        new_tick.type = "checkbox";
        new_tick.classList.add("tick");
        const remove_button = document.createElement("button");
        remove_button.classList.add("remove")
        const divvydun = document.createElement("div");
        divvydun.id = "divvydun";
        divvydun.append(remove_button, new_text, new_tick);
        document.getElementById("checkboxdiv").appendChild(divvydun);
        const deleteButtons = document.querySelectorAll("button.remove");
        for (let d of deleteButtons) {
            d.addEventListener("click", (e) => {
                let cbutton = e.target;
                let cdiv = cbutton.parentNode;
                cdiv.remove()
            });
        }
    }
    function clear() {
        const div = document.getElementById('checkboxdiv');
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
    }
    return(
        <>
            <div id ="functiondiv">
                <div>
                    <img id="Title" src={Todo} alt='Title'/><br/><br/>
                    <button className="Add" onClick={sigma}>Add</button>
                    <button className="Clear" onClick={clear}>Clear</button>
                </div>
            </div>
            <div id="checkboxdiv">
                {/*<button className="Add" onClick={sigma}>Add</button>*/}
                {/*<button className="Clear" onClick={clear}>Clear</button>*/}
            </div>
        </>
    )
}

export default Checkbox;