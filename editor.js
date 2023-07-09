
function insertText() {
    var editor = document.getElementById("editor");
    editor.focus();
}

function deleteText() {
    var editor = document.getElementById("editor");
    editor.value = editor.value.slice(0, -1);
    editor.focus();
}

function displayText() {
    var editor = document.getElementById("editor");
    console.log(editor.value);
    editor.focus();
}

function clearText() {
    var editor = document.getElementById("editor");
    editor.value = "";
    editor.focus();
}

function saveText() {
    var editor = document.getElementById("editor");
    var text = editor.value;
    // Perform save action with the text
    alert("Text saved!");
    editor.focus();
}


function googleSearch() {
    var editor = document.getElementById("editor");
    var searchText = editor.value;
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchText);
    window.open(searchUrl, "_blank");
}     