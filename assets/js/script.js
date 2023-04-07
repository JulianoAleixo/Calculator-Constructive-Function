function Calculadora() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.captureClick();
        this.captureEnter();
    }

    this.captureClick = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.doTheMath();
        });
    };

    this.captureEnter = () => {
        document.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                this.doTheMath();
            }
        })
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.doTheMath = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('[ERRO] Conta inválida.');
                return;
            }

            this.display.value = conta;
        } catch (error) {
            alert('[ERRO] Conta inválida.');
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.init();
