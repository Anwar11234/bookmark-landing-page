class Tabs{ 
    constructor(container){ 
        this.container = container;
        this.tabs = [...this.container.querySelectorAll('[role="tab"]')];
    }

    switchTab(event){ 
        const oldTab = this.container.querySelector('[aria-selected]');
        const newTab = event.currentTarget;
        if(oldTab === newTab) return;

        const oldPanel = this.container.querySelector(`[aria-labelledby = ${oldTab.id}]`);
        const newPanel = this.container.querySelector(`[aria-labelledby = ${newTab.id}]`);
    
        this.hidePanel(oldTab , oldPanel);
        this.showPanel(newTab , newPanel);        
    }

    hidePanel(tab , panel){ 
        panel.hidden = true;
        tab.removeAttribute('aria-selected');
        tab.setAttribute('tabindex' , '-1');
    }

    showPanel(tab , panel){ 
        panel.hidden = false;
        tab.setAttribute('aria-selected' , 'true');
        tab.removeAttribute('tabindex');
    }

    moveRight(event){ 
        let currentIndex = this.tabs.indexOf(event.currentTarget);
        let nextTab = this.tabs[++currentIndex];
        if(!nextTab){ 
            this.selectFirstTab();
            return;
        }
        nextTab.focus();
    }

    moveLeft(event){ 
        let currentIndex = this.tabs.indexOf(event.currentTarget);
        let prevTab = this.tabs[--currentIndex];
        if(!prevTab){ 
            this.selectLastTab();
            return;
        }
        prevTab.focus();
    }

    selectFirstTab(){ 
        this.tabs[0].focus();
    }

    selectLastTab(){ 
        this.tabs[this.tabs.length - 1].focus();
    }

    manageFocus(event){ 
        const codes = ['ArrowRight' , 'ArrowLeft' , 'Home' , 'End'];

        if(codes.includes(event.code)) event.preventDefault();

        if(event.code === 'ArrowRight') this.moveRight(event);

        if(event.code === 'ArrowLeft') this.moveLeft(event);

        if(event.code === 'Home') this.selectFirstTab();

        if(event.code === 'End') this.selectLastTab();
    }

}

export {Tabs as default}