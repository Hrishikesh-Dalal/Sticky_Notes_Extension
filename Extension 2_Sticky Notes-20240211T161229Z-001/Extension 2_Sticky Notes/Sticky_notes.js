const notes_container = document.getElementById("app");
const notes_btn = notes_container.querySelector(".addnote");

notes_btn.addEventListener("click" ,add_notes);

const color = ["#ebf536", "#58ed80", "#f536e2", "#2bc5fc"];
let set_color = 0;

get_notes().forEach(note => {
    const note_element = create_note(note.id, note.content);
    notes_container.insertBefore(note_element,notes_btn);
});

function get_notes(){
    return JSON.parse(localStorage.getItem("sticky_notes") || "[]");
}

function add_notes(){

    const notey = get_notes();
    const the_note = {
        id:Math.floor(Math.random()*100000),
        content : ""
    }
   
    const note_element = create_note(the_note.id, the_note.content);
    notes_container.insertBefore(note_element,notes_btn);
    
    notey.push(the_note);
    save_notes(notey);    
}

function update_notes(id, new_content){
    const notey = get_notes();
    //arrow function
    const target = notey.filter((note) => note.id == id)[0];
    //normal function
    // const target = notey.filter(function(note){
    //     if(note.id == id){
    //         return note;}
    // })[0];

    target.content = new_content;
    save_notes(notey);
}


function create_note(id,content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    if(set_color==0){
        element.classList.add("note_0");
        set_color++;
    }
    else if(set_color==1){
        element.classList.add("note_1");
        set_color++;

    }
    else if(set_color==2){
        element.classList.add("note_2");
        set_color++;

    }
    else if(set_color==3){
        element.classList.add("note_3");
        set_color=0;

    }
    element.value= content;
    element.placeholder = "Write Something";
    
    

    //if there is a change in text or addition
    element.addEventListener("change", () => {
        update_notes(id,element.value);
    })

    //if we want to delete an element
    element.addEventListener("dblclick",() =>{
        const doDel = confirm("Delete Note?");
        //this gives ans in boolean and true and false

        if(doDel){
            del_notes(id,element);
        }
    })
    return element;

}

function del_notes(id, element){
    const notey = get_notes().filter((note) => note.id != id);

    save_notes(notey);
    notes_container.removeChild(element);
}

//while making a function we can directly create variables as there is no fixed type in it
function save_notes(notes){
    localStorage.setItem("sticky_notes", JSON.stringify(notes));
}