appendToDisplay = (value) => {
  document.getElementById("display").value += value;
};

clearDisplay = () => {
  document.getElementById("display").value = "";
};

deleteLast = () => {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = display.substring(
    0,
    display.length - 1
  );
};

calculateResult = () => {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = eval(display);
};
