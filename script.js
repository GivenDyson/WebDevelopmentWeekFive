function changeTextAndStyle(){
    const text = document.getElementById("dynamicText");
    text.textContent = "The text and style has changed!";
    text.style.color="white";
    text.style.backgroundColor =  "#0077cc";
    text.style.padding = "10px";
    text.borderRadius = "5px";
}

function toggleElement(){
    const container = document.getElementById("messageContainer");
    const existing = document.getElementById("newMessage");

    if (existing) {
        existing.remove();
    } else{
        const newElement = document.createElement("p");
        newElement.id = "newMessage";
        newElement.textContent = "Dynamically added message here!";
        newElement.style.color = "violet";
        container.appendChild(newElement);
    }
}