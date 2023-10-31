var quill = new Quill("#editor", {
  theme: "snow",
});

console.log(quill)

// var editor = new Quill('.editor');
function edit(){
    var editor_content = quill.root.innerHTML
    var main = document.getElementById("main");
    // var container = document.getElementById("editor");
    // var editor = new Quill(container);
    main.innerHTML = editor_content + main.innerHTML
    quill.root.innerHTML = ""
    
    
}