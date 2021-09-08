class Accordion { 
    constructor(btns){ 
        this.btns = btns;
    }

    togglePanel(event){ 
        const btn = event.currentTarget;
        const target = document.querySelector(`[aria-labelledby=${btn.id}]`);
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded' , !expanded);
        target.hidden = expanded;
    }

    handleArrowDown(event){ 
        let currentBtnIndex = this.btns.indexOf(event.currentTarget);
        const nextAccordionHeader = this.btns[++currentBtnIndex];
        if(!nextAccordionHeader){ 
            this.btns[0].focus();
            return;
        }
        nextAccordionHeader.focus();
    }

    handleArrowUp(event){ 
        let currentBtnIndex = this.btns.indexOf(event.currentTarget);
        const prevAccordionHeader = this.btns[--currentBtnIndex];
        if(!prevAccordionHeader){ 
            this.btns[this.btns.length - 1].focus();
            return;
        }
        prevAccordionHeader.focus();
    }

    handleKeydown(event){ 
        const codes = ['ArrowRight' , 'ArrowLeft' , 'Home' , 'End'];
        if(codes.includes(event.code)) event.preventDefault();

        if(event.code === 'ArrowDown') this.handleArrowDown(event);

        if(event.code === 'ArrowUp') this.handleArrowUp(event);

        if(event.code === 'Home')    this.btns[0].focus();

        if(event.code === 'End')     this.btns[this.btns.length - 1].focus();
    }
}

export {Accordion as default}