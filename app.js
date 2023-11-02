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

var title = document.getElementById("title")
var main = document.getElementById("main");

function post() {
  var editor_content = quill.root.innerHTML;
  console.log(editor_content)

  if(editor_content === ""){
    alert("kuch likh le bhai");
  }
  var getData = localStorage.getItem("data") || "";
  var dataString = `
  <div class="col">
  <div class="card h-100">
  <div class="card-body">
  <h1 class="card-title">${title.value}</h1>
  <p class="card-text">${editor_content}</p>
  </div>
  </div>
  </div>
  </div>`;

  var addData =  dataString + getData;

  main.innerHTML = addData;
  localStorage.setItem("data", addData);

  quill.root.innerHTML = "";
}

