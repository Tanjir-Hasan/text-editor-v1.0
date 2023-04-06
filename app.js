const textArea = document.getElementById("textarea");

function fontSize(e) {
    let value = e.value;
    textArea.style.fontSize = value + "px";
};

function bold(e) {
    if (textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal";
    }
    else {
        textArea.style.fontWeight = "bold";
    }
};

function italic(e) {
    if (textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal";
    }
    else {
        textArea.style.fontStyle = "italic";
    }
};

const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Georgia"];

function getRandomFont() {
    const randomFont = Math.floor(Math.random() * fonts.length)
    return fonts[randomFont];
}

function updateFont() {
    const selectedFont = getRandomFont();
    textArea.style.fontFamily = selectedFont;
}

function underline(e) {
    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none";
    }
    else {
        textArea.style.textDecoration = "underline";
    }
};

function alignLeft(e) {
    textArea.style.textAlign = "left";
};

function alignCenter(e) {
    textArea.style.textAlign = "center";
};

function alignRight(e) {
    textArea.style.textAlign = "right";
};

function upperAndLowerCase(e) {
    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "none";
    }
    else {
        textArea.style.textTransform = "uppercase";
    }
};

function clearField() {
    textArea.style.fontWeight = "normal";
    textArea.style.fontStyle = "normal";
    textArea.style.textAlign = "left";
    textArea.style.textTransform = "capitalize";
    textArea.value = "";
};

function color(e) {
    let value = e.value;
    textArea.style.color = value;
};

window.addEventListener("load", function() {
    textArea.value = "";
});