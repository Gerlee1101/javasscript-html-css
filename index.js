// const container = document.getElementsByClassName("container");
// container[0].addEventListener("click", () => {
//   container[0].style.backgroundColor = "red";
// });
const boxes = document.querySelectorAll(".box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (boxes[i].style.backgroundColor === "blue") {
      boxes[i].style.backgroundColor = "green";
    } else {
      boxes[i].style.backgroundColor = "blue";
    }
  });
}
