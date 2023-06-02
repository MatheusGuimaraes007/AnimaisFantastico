export default function outsideClick(element, events, callBack){
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleoutSideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent,handleoutSideClick);
            });
            callBack();
        }
    }

    if(!element.hasAttribute(outside)) {
        events.forEach((userEvent) => {
            setTimeout(() => html.addEventListener(userEvent, handleoutSideClick));
        });
        element.setAttribute(outside, '');
    }
}
