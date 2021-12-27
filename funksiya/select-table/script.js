function change() {
  let sec = document.getElementById("table").value;

  if (sec == 1) {
    table1();
  } else if (sec == 2) {
    table2();
  } else if (sec == 3) {
    table3();
  }
}

function table1() {
  let ekran = "";
  for (let i = 1; i <= 3; i++) {
    ekran += `<tr>`;
    for (let j = 1; j <= 3; j++) {
      ekran += `<th>${i},${j}</th>`;
    }
    ekran += `</tr>`;
  }
  document.getElementById("tbl").innerHTML = ekran;
}

function table2() {
  let ekran = "";
  for (let i = 1; i <= 6; i++) {
    ekran += `<tr>`;
    for (let j = 1; j <= 6; j++) {
      ekran += `<th>${i},${j}</th>`;
    }
    ekran += `</tr>`;
  }
  document.getElementById("tbl").innerHTML = ekran;
}

function table3() {
  let ekran = "";
  for (let i = 1; i <= 9; i++) {
    ekran += `<tr>`;
    for (let j = 1; j <= 9; j++) {
      ekran += `<th>${i},${j}</th>`;
    }
    ekran += `</tr>`;
  }
  document.getElementById("tbl").innerHTML = ekran;
}
