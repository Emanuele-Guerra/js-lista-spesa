const elementiDentroLista = ["pane", "salame", "uova", "DooM", "voglia", "disagio"];
console.log(elementiDentroLista);
let unList = document.getElementById("ul");

let arrayLen = elementiDentroLista.length;
console.log(arrayLen)
let i = 0;
while (i <= arrayLen -1) {
    let listTag = document.createElement("li");
    unList.appendChild(listTag)
    listTag.innerHTML=(elementiDentroLista[i])
    i++;
}
