
function Checkbox(props){
    function sigma() {

        var new_text = document.createElement("textarea");
        new_text.classList.add("incheckbox");
        new_text.placeholder = "What to do?";
        // document.getElementById("checkboxdiv").appendChild(new_text);
        var new_tick = document.createElement("input");
        new_tick.type = "checkbox";
        new_tick.classList.add("tick");
        var divvydun = document.createElement("div");
        divvydun.append(new_text,new_tick);
        document.getElementById("checkboxdiv").appendChild(divvydun);
    }
    return(
        <>
            <div id="checkboxdiv">
                <button className="Add" onClick={sigma}>Add</button>
                <div>
                    <textarea className="incheckbox" {...props} placeholder="What to do?"/>
                    <input className="tick" type="checkbox" checked={props.checked} onChange={props.onChange}/>
                </div>
            </div>
        </>
    )
}

export default Checkbox;