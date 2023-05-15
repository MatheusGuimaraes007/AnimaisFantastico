export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        this.EventToggleModal = this.EventToggleModal.bind(this);
        this.Cliquefora = this.Cliquefora.bind(this);
    }
    //abre ou fecha o modal
    ToggleModal()  {
        this.containerModal.classList.toggle('ativo');
    }
    //adiciona o evento de toggle ao modal
    EventToggleModal(event) {
        event.preventDefault();
        this.ToggleModal();
    }

        //fecha o modal ao clicar do lado de fora
    Cliquefora(event) {
        if (event.target == this.containerModal) { 
            this.ToggleModal(event);
        }
    }
    //adiciona aos elementos do modal
    AddModalEvents() {
        this.botaoAbrir.addEventListener('click', this.EventToggleModal);
        this.botaoFechar.addEventListener('click', this.EventToggleModal);
        this.containerModal.addEventListener('click', this.Cliquefora);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal){
            this.AddModalEvents();
        }
        return this;
    }
}

 