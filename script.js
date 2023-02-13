filterSelection("all")


function searchFunction(){
  var input, filter, x, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    a = x[i].getElementsByTagName("h4")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      w3AddClass(x[i], "show");
    }
    else {
      w3RemoveClass(x[i], "show");
    }
  }

}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
// window.onload = function() {
//   alert("If you have or know of any new relevant policy documents you would like to see included, please get in touch.");
// };

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Add active class to the second  button (highlight it)
var btnContainer2 = document.getElementById("myBtnContainer2");
var btns2 = btnContainer2.getElementsByClassName("btn2");
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function(){
    var current2 = document.getElementsByClassName("actives");
    current2[0].className = current2[0].className.replace(" actives", "");
    this.className += " actives";
  });
}

// Add active class to the second  button (highlight it)
var btnContainer3 = document.getElementById("myBtnContainer3");
var btns3 = btnContainer3.getElementsByClassName("btn3");
for (var i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function(){
    var current3 = document.getElementsByClassName("actived");
    current3[0].className = current3[0].className.replace(" actived", "");
    this.className += " actived";
  });
}