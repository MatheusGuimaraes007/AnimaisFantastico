import ScrollSuave from '/scrol-suave.js';
import initAcordion from '/acordion.js';
import iniTabNav from '/tab-nav.js';
import initModal from '/modal.js';
import initTooltip from '/tooltip.js';
import dropDownMenu from '/dropdownmenu.js';
import initMenuMobile from '/menumobile.js';
import initAnimaNumeros from '/anima-numeros.js';
import initFuncionamento from '/horariofuncionamento.js';
import initAnimacaoScroll from '/animacao-scroll.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAcordion();
iniTabNav();
initModal();
initTooltip();
dropDownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();









