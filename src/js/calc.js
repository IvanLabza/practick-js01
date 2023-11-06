const velResult = document.getElementById("result");

const inputFirst = document.getElementById("input1");

const inputToo = document.getElementById("input2");

const submitResult = document.getElementById("submit");

const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");

const delBtn = document.getElementById("del");

const mngBtn = document.getElementById("umnag");

let action = "+";

plusBtn.onclick = () => {
  action = "+";
};

minusBtn.onclick = () => {
  action = "-";
};

delBtn.onclick = () => {
  action = "/";
};

mngBtn.onclick = () => {
  action = "*";
};

function colorResult(result) {
  if (result < 0) {
    velResult.style.color = "red";
  } else {
    velResult.style.color = "green";
  }
}

submitResult.onclick = () => {
  if (action === "+") {
    const sum = (velResult.textContent =
      Number(inputFirst.value) + Number(inputToo.value));
    colorResult(sum);
  } else if (action === "-") {
    const sum = (velResult.textContent =
      Number(inputFirst.value) - Number(inputToo.value));
    colorResult(sum);
  } else if (action === "/") {
    const sum = (velResult.textContent =
      Number(inputFirst.value) / Number(inputToo.value));
    colorResult(sum);
  } else if (action === "*") {
    const sum = (velResult.textContent =
      Number(inputFirst.value) * Number(inputToo.value));
    colorResult(sum);
  }
};
