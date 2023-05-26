import ScrollSuave from '/scrol-suave.js';
import Accordion from '/acordion.js';
import TabNav from '/tab-nav.js';
import Modal from '/modal.js';
import Tooltip from '/tooltip.js';
import dropDownMenu from '/dropdownmenu.js';
import initMenuMobile from '/menumobile.js';
import initAnimaNumeros from '/anima-numeros.js';
import initFuncionamento from '/horariofuncionamento.js';
import initAnimacaoScroll from '/animacao-scroll.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="acordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li' , '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]' , '[data-modal="fechar"]' , '[data-modal="container"]');
modal.init();

const toolTip = new Tooltip('[data-tooltip=""]');
toolTip.init();


dropDownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initAnimacaoScroll();









