export default class Accordion{
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }
    ToggleAcordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

        //adiciona os eventos ao accordion
    AddAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => this.ToggleAcordion(item))
        })
    }
    //iniciar função
    init() {
        if(this.accordionList.length) {
            //ativar primeiro item
            this.ToggleAcordion(this.accordionList[0])
            this.AddAccordionEvent();
        }
        return this;
    }
}