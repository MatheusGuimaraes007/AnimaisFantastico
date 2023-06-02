import ScrollSuave from '/scrol-suave.js';
import Accordion from '/acordion.js';
import TabNav from '/tab-nav.js';
import Modal from '/modal.js';
import Tooltip from '/tooltip.js';
import DropDownMenu from '/dropdownmenu.js';
import initMenuMobile from '/menumobile.js';
import fetchAnimais from '/fetchAnimais.js';
import initFuncionamento from '/horariofuncionamento.js';
import ScrollAnima from './scroll-anima.js';


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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

initMenuMobile();
initFuncionamento();

fetchAnimais('/animaisapi.json' , '.numeros-grid');









