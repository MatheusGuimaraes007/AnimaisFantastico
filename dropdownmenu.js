export default function dropDownMenu(){
    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    dropDownMenus.forEach((menu) =>{
        ['touchstart', 'click'].forEach((userEvent) =>{
            menu.addEventListener(userEvent, handClick);
        })
    })
    
    function handClick(event){
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, ['touchstart', 'click'], () =>{
            this.classList.remove('active');
        });
    }
    
    function outsideClick(element, events, callBack){
        const html = document.documentElement;
        const outside = 'data-outside';
    
        if(!element.hasAttribute(outside)){
            events.forEach(userEvents =>{
        html.addEventListener(userEvents , handleOutsideClick);
        })
        element.setAttribute(outside, '');
        }
            function handleOutsideClick(event){
                if(!element.contains(event.target)){
                element.removeAttribute(outside);
                events.forEach(userEvents =>{
                    html.removeEventListener(userEvents , handleOutsideClick);
                    }) 
                callBack();
                }
            }
    }
}

