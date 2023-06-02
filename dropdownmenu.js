import outsideClick from "./outsideClick.js";

export default class dropDownMenu{
    constructor(dropdownMenu, events) {
        this.dropDownMenus = document.querySelectorAll(dropdownMenu);
        //define touchstar e click, argumento padrao de events
        if (events === undefined) this.events = ['touchstart' , 'click'];
        else this.events = events;

        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }
    //ativa o dropdown mene e adiciona a funcao que oberva o click fora dele
    activeDropdownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    addDropdownMenusEvent() {
        this.dropDownMenus.forEach((menu) => {
            this.events.forEach((userEvents) => {
                menu.addEventListener(userEvents, this.activeDropdownMenu);
            });
        });
    }

    init() {
        if (this.dropDownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this;
    }
}

