function CalculaTabuada() {
  const inputNum = document.querySelector(".inputNum");
  const tabuada = document.querySelector(".tabuadaSection");
  const resultado = document.querySelector(".resultado");

  const telaInicial = document.querySelector(".inicio");
  const telaTabuada = document.querySelector(".container");

  this.inicia = () => {
    this.ativaBotoes();
    this.escreveTabuadaPadrao();
    this.pressionaEnter();
  }

  this.ativaBotoes = () => {
    document.addEventListener("click", (e) => {
      el = e.target;
      if (el.classList.contains("btnTabuada")) {
        telaInicial.classList.add("oculto");
        telaTabuada.classList.remove("oculto");
      } else if (el.classList.contains("btnVoltar")) {
        telaInicial.classList.remove("oculto");
        telaTabuada.classList.add("oculto");
      }
    });
  }
  
  this.pressionaEnter = () => {
    inputNum.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.verificaInput(inputNum.value);
      }
    });
  }

  this.escreveTabuadaPadrao = () => {
    for (let i = 1; i <= 10; i++) {
      const div = document.createElement("div");
      div.classList.add("resultado");
      for (let j = 1; j <= 10; j++) {
        div.appendChild(this.criaP(i, j));
      }
      tabuada.appendChild(div);
    }
  }

  this.verificaInput = (valor) => {
    if (valor) {
      this.escreveTabuada(valor);
      this.limpaDisplay();
    }
  }

  this.escreveTabuada = (num) => {
    resultado.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const p = this.criaP(i, num);
      resultado.appendChild(p);
    }
  }
  
  this.criaP = (index, num) => {
    const p = document.createElement("p");
    p.innerHTML = `${num} <strong>x</strong> ${index} = ${num*index}`;
    p.classList.add("tabuada");
    return p;
  }

  this.limpaDisplay = () => {
    inputNum.value = "";
  }
}

const calculaTabuada = new CalculaTabuada();
calculaTabuada.inicia();

