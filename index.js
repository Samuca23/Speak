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
        let oSelect = this.createListVoice();

        oDivContainer.appendChild(oDivSpeak);
        oDivSpeak.appendChild(oText);
        oDivSpeak.appendChild(oButton);
        oDivSpeak.appendChild(oSelect);

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

        return oTextArea;
    }

    createListVoice = () => {
        let oSelect = document.createElement('select');
        oSelect.setAttribute('id', 'select_voice');
        let aVoice = this.getVoice(true);
        
        aVoice.forEach((oVoice, key) => {
            let oOption = document.createElement('option');
            oOption.setAttribute('value', key);
            oOption.innerText = oVoice.name;
            oSelect.appendChild(oOption);
        });

        return oSelect;
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

    getVoice = (bReturnAll = false) => {
        let synth = window.speechSynthesis;
        if (bReturnAll) {
           return synth.getVoices();
        } else {
            let oSelect = document.getElementById('select_voice');
            if (oSelect) {
                return synth.getVoices()[oSelect.value];
            }
        }
    }

    onClickSpeak = () => {
        let sSentence = this.getDataTextArea();
        let oUtterance = new SpeechSynthesisUtterance(sSentence);
        let oVoice = this.getVoice();
        oUtterance.voice = oVoice;
        speechSynthesis.speak(oUtterance);
    }
}

let start = new Speak();