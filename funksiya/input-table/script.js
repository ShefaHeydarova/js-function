function create(){

let inp1 = document.getElementById("inp1").value;
let inp2 = document.getElementById("inp2").value;

let ekran="";

for(let i=1;i<=inp1;i++){

     ekran+= `<tr>`;
     for (let j=1;j<=inp2;j++){

        ekran+=`<td>${i},${j}</td>`;
     }
     ekran+= `</tr>`;
}

document.getElementById("tbl").innerHTML= ekran;

}