function hesabla(say) {
  document.getElementById("screen").value += say;
}

function evaluation() {
  let x = document.getElementById("screen").value;
  let y = eval(x);

  let answer = (document.getElementById("screen").value = y);
  document.getElementById("screen").innerHTML = answer;
}

function clr() {
  document.getElementById("screen").value = "";
}
