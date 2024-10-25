function CalculaTabuada() {
  const inputNum = document.querySelector(".inputNum");
  const resultado = document.querySelector(".resultado");
  const btnEnviar = document.querySelector(".btnEnviar");

  this.inicia = () => {
    this.pressionaBtnEnviar();
    this.pressionaEnter();
  }

  this.pressionaBtnEnviar = () => {
    btnEnviar.addEventListener("click", () => {
      this.verificaInput(inputNum.value);
    });
  }
  
  this.pressionaEnter = () => {
    inputNum.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.verificaInput(inputNum.value);
      }
    });
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
      this.criaP(i, num);
    }
  }
  
  this.criaP = (index, num) => {
    const p = document.createElement("p");
    p.innerHTML = `${num} x ${index} = ${num*index}`;
    resultado.appendChild(p);
  }

  this.limpaDisplay = () => {
    inputNum.value = "";
  }
}

const calculaTabuada = new CalculaTabuada();
calculaTabuada.inicia();

