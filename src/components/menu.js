class Menu{ 
    constructor(menuContainer){ 
        this.menuContainer = menuContainer;
        this.menuBtn = this.menuContainer.querySelector('.menu');

        this.openIcon = '<svg aria-hidden = "true" xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>';

        this.closeIcon = '<svg aria-hidden = "true" xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>';

    }

    open(){ 
        this.menuContainer.classList.add('menu-opened');
        this.menuBtn.innerHTML = this.closeIcon;
        this.menuBtn.setAttribute('aria-label' , 'close menu');
    }

    close(){ 
        this.menuContainer.classList.remove('menu-opened');
        this.menuBtn.innerHTML = this.openIcon;
        this.menuBtn.setAttribute('aria-label' , 'open menu');
    }

    toggle(){ 
        if(!this.menuContainer.classList.contains('menu-opened')){ 
            this.open();
        }

        else{ 
            this.close();
        }
        
        this.menuContainer.addEventListener('keydown' , (event) => this.handleKeyDown(event))
    }

    handleKeyDown(event){ 
        const focusableChildren = [...this.menuContainer.querySelectorAll('[data-focusable]')];
        const firstChild = focusableChildren[0];
        const lastChild = focusableChildren[focusableChildren.length - 1];
        const withShift = event.shiftKey;

        if(event.code === 'Tab' && document.activeElement === lastChild){ 
            event.preventDefault();
            firstChild.focus();
        }

        if(withShift && event.code === 'Tab' && document.activeElement === firstChild){ 
            event.preventDefault();
            lastChild.focus();
        }
    }
}

export { Menu as default};