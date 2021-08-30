import Menu from './components/menu';
import Tabs from './components/tabs';
import Accordion from './components/accordion';

const header = document.querySelector('.main__header');
const menuBtn = header.querySelector('.menu');

const menu = new Menu(header);
menuBtn.addEventListener('click' , () => { 
    menu.toggle();
});

const tabsContainer = document.querySelector('.tabs');
const tabList = [...tabsContainer.querySelectorAll('[role="tab"]')];
const tabs = new Tabs(tabsContainer)
tabList.forEach(tab => { 
    tab.addEventListener('click' , () =>{ 
        tabs.switchTab(event);
    });
    tab.addEventListener('focus' , () => { 
        tabs.switchTab(event);
    });
    tab.addEventListener('keydown' , () => { 
        tabs.manageFocus(event);
    })
});

const accordionContainer = document.querySelector('.faqs');
const accordionBtns = [...accordionContainer.querySelectorAll('h2 button')];
const accordion = new Accordion(accordionBtns);
accordionBtns.forEach(btn => { 
    btn.addEventListener('click' , () => { 
        accordion.togglePanel(event);
    });
    btn.addEventListener('keydown' , () => { 
        accordion.handleKeydown(event);
    })
});