class Speak {

    constructor() {
        this.createLayout();
    }

    createLayout = () => {
        let oDivContainer = document.getElementById('container');

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