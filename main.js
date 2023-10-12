var a = document.querySelector("h5");
var add = document.querySelector("#addfriend");
// var rmv = document.querySelector("#remove");
var check = 0;

add.addEventListener("click", function () {
  if (check == 0) {
    a.innerHTML = "Friends";
    a.style.color = "Green";
    add.innerHTML = "Unfollow";
    check = 1;
  } else {
    a.innerHTML = "Stranger";
    a.style.color = " rgb(210, 72, 34)";
    add.innerHTML = "follow";

    check = 0;
  }
});

// rmv.addEventListener("click", function () {
//   a.innerHTML = "Respond";
//   a.style.color = "red";
// });
