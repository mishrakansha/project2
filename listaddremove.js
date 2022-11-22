var submit = document.getElementById("submit");
submit.addEventListener("click", myfun);
function myfun(e) {
  e.preventDefault();
  console.log("hello");
  var item = document.getElementById("items");
  var value = document.getElementById("item").value;
  var addliitem = document.createElement("li");
  addliitem.className = "list-group-item";
  addliitem.appendChild(document.createTextNode(value));
  var dltbutton = document.createElement("button");
  dltbutton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "float-right",
    "delete"
  );
  dltbutton.appendChild(document.createTextNode("X"));
  dltbutton.addEventListener("click", removelistelement);
  addliitem.appendChild(dltbutton);
  item.appendChild(addliitem);
}
buttondlt = document.querySelectorAll(".delete");
// console.log(buttondlt[0]);
// console.log(buttondlt[0].parentNode.nodeName);
buttondlt.forEach((element) => {
  element.addEventListener("click", removelistelement);
});
function removelistelement(e) {
  element = e.target.parentNode;
  element.remove();
}
const themeColors = document.querySelectorAll('[name="theme"]');

// store themes

const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
  console.log("themeset ho gyi");
};

const applyTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  themeColors.forEach((themeOption) => {
    if (activeTheme == themeOption.id) {
      themeOption.checked = true;
    }
  });
};

themeColors.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

document.onload = applyTheme();
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
form.addEventListener("submit", addEvent);
function addEvent(e) {
  e.preventDefault();
  var item = document.getElementById("main-input").value;
  var newItem = document.createElement("li");
  newItem.className = "list-group-item";
  newItem.appendChild(document.createTextNode(item));
  var dltButton = document.createElement("button");
  dltButton.className = "btn btn-danger btn-sm float-right delete";
  dltButton.appendChild(document.createTextNode("X"));
  newItem.appendChild(dltButton);
  itemList.appendChild(newItem);
}
filterfield = document.getElementById("filter");
filterfield.addEventListener("input", (event) => {
  filter = filterfield.value;
  filter = filter.toUpperCase();
  console.log(filter);
  li = document.querySelectorAll(".list-group-item");
  for (i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
