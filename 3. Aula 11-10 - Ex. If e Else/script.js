const numero = document.querySelector(".inputTxt");
const botao = document.querySelector(".btnCalc");
const resultado = document.querySelector(".resultado");

botao.addEventListener("click", () => {
    const valor = numero.value;
    if (valor >= 3 && valor <= 10) {
        calculaForma(valor);
    } else {
        alert("Digite um número válido!");
    }
});

function calculaForma(valor) {
    const img = document.createElement("img");
    num = Number(valor);    

    if (num == 3) {
        img.setAttribute("src", "./img/triangulo.jpeg");
        aplicaResultado("A = b * h / 2", "P = l1 + l2 + l3", img);
    } else if (num == 4) {
        img.setAttribute("src", "./img/quadrado.webp");
        aplicaResultado("A = b * h", "P = (b + h) * 2", img);
    } else if (num == 5) {
        img.setAttribute("src", "./img/Pentagono.jpg");
        aplicaResultado("A = l * apótema", "P = l1 + l2 + l3 + l4 + l5", img);
    } else if (num == 6) {
        img.setAttribute("src", "./img/Hexagono.jpg");
        aplicaResultado("A = 6 * l² * √3/4", "P = l1 + l2 + l3 + l4 + l5 + l6", img);
    } else if (num == 7) {
        img.setAttribute("src", "./img/Heptagono.webp");
        aplicaResultado("A = (7/2) * a * l", "P = l1 + l2 + l3 + l4 + l5 + l6 + l7", img);
    } else if (num == 8) {
        img.setAttribute("src", "./img/octagono.jpg");
        aplicaResultado("A = 2(1 + √2) * l²", "P = l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8", img);
    } else if (num == 9) {
        img.setAttribute("src", "./img/Eneágono.jpg");
        aplicaResultado("A = (9/2) * a * l", "P = l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9", img);
    } else {
        img.setAttribute("src", "./img/Decagono.webp");
        aplicaResultado("A = (5/2) * a * l", "P = l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10", img);
    }
}

function aplicaResultado(area, perimetro, img) {
    resultado.innerHTML = "";

    areaP = document.createElement("p");
    perimetroP = document.createElement("p");

    areaP.innerText = area;
    perimetroP.innerText = perimetro;

    resultado.appendChild(img);
    resultado.appendChild(areaP);
    resultado.appendChild(perimetroP);
}