var toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
];
var quill = new Quill("#editor", {
  theme: "snow",
  placeholder: "Write Blog...",
  modules: {
    toolbar: toolbarOptions,
  },
});

var main = document.getElementById("main");

function post() {
  var editor_content = quill.root.innerHTML;
  main.innerHTML =
    `
        <div class="col">
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">${editor_content}</p>
            </div>
        </div>
    </div>
</div>` + main.innerHTML;
  quill.root.innerHTML = "";
}
