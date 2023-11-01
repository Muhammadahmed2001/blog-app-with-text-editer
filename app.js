var quill = new Quill("#editor", {
  theme: "snow",
});


var main = document.getElementById("main");


function post(){
  var editor_content = quill.root.innerHTML
    main.innerHTML = `
        <div class="col">
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">${editor_content}</p>
            </div>
        </div>
    </div>
</div>` + main.innerHTML
    quill.root.innerHTML = ""
    
    
}
