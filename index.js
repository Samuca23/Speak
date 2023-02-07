class Speak {

    constructor() {
        this.createLayout();
    }

    /**
     * Função responsável pela criação do Layout
     */
    createLayout = () => {
        let oDivContainer = document.getElementById('container');
        let oDivSpeak = this.createDiv('speak');
        let oText = this.createTextArea('', 'text_speak');
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
            this.onClickSpeak();
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
        oTextArea.setAttribute('id', sId);
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

    getDataTextArea = () => {
        let oTextArea = document.getElementById('text_speak');
        if (oTextArea) {
            return oTextArea.value;
        }

        return window.alert('Invalid content!');
    }

    onClickSpeak = () => {
        let sSentence = this.getDataTextArea();
        let oUtterance = new SpeechSynthesisUtterance(sSentence);
        speechSynthesis.speak(oUtterance);
    }
}

let start = new Speak();