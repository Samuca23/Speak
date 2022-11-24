class Speak {

    constructor() {
        this.createLayout();
    }

    createLayout = () => {
        let oDivContainer = document.getElementById('container');
        let oDivSpeak = this.createDiv('speak');
        let oText = this.createTextArea('', 'text-speak');
        let oButton = this.createButton('Speak', 'button-speak', 'btn btn-info');

        oDivContainer.appendChild(oDivSpeak);
        oDivSpeak.appendChild(oText);
        oDivSpeak.appendChild(oButton);

    }

    /**
     * Função para criar o Elemento de Button
     * 
     * @param {string} sContent 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createButton = (sContent = '', sId = '', sClass = '') => {
        let oButton = document.createElement('button');
        oButton.setAttribute('id', `buttonCard${sId}`);
        oButton.setAttribute('class', sClass);
        oButton.innerText = sContent;
        oButton.addEventListener('click', () => {
            removeCard(sId)
        });

        return oButton;
    }

    /**
     * Função para criar o Elemento de TextArea
     * 
     * @param {string} sContent 
     * @param {string} sClass 
     * @param {string} sId 
     * @returns 
     */
    createTextArea = (sContent = '', sId = '', sClass = '') => {
        let oTextArea = document.createElement('textarea');
        oTextArea.setAttribute('id', `inputDescricao${sId}`);
        oTextArea.setAttribute('class', sClass);
        oTextArea.value = sContent;
        oTextArea.addEventListener('change', () => {
            updateCard(sId)
        })

        return oTextArea;
    }

    /**
     * Função para criar div.
     * 
     * @param {string} sId 
     * @param {string} sClass 
     * @returns 
     */
    createDiv = (sId, sClass) => {
        let oDiv = document.createElement('div');
        oDiv.setAttribute('id', `div${sId}`);
        oDiv.setAttribute('class', sClass);

        return oDiv;
    }
}

let start = new Speak();