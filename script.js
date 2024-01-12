const btn = document.querySelector("button");
btn.addEventListener('click', ()=>{
    const text = document.querySelector("textarea");
    const color = document.querySelector("div > input");

    const note = text.value;
    const inputColor = color.value;


    if(note===""){
        alert("Please enter a Note!");
        return;
    }
    const card = document.createElement("div");
    card.style.minWidth = "150px";
    card.style.minHeight = "150px";
    card.style.backgroundColor = inputColor;
    card.style.margin ="10px";

    

    const cardText = document.createElement("div");
    card.appendChild(cardText);
    cardText.style.color = "white";
    cardText.style.display = "flex";
    cardText.style.justifyContent = "space-between";
    cardText.style.alignItems = "center";
    cardText.style.textAlign ="center";
    cardText.style.margin ="10px";

    const para = document.createElement("p");
    para.innerText = note;
    cardText.appendChild(para);


    const removeBtn = "x";
    const remove = document.createElement("p");
    remove.innerText = removeBtn;
    cardText.appendChild(remove);
    remove.style.position = "relative";
    remove.style.top = "-5px"
    remove.style.color ="white";
    remove.style.cursor="pointer";


    const noNotes = document.querySelector("span");
    if (noNotes) {
        noNotes.remove();
    }

    remove.onclick= function(){
        card.parentNode.removeChild(card);
    }

    document.getElementById("notes-section").appendChild(card);

    text.value = "";
})