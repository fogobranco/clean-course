(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes  {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement implements InputEvents{
        public htmlElement : HtmlElement;
        public inputAttributes : InputAttributes;
        constructor( 
            public value: string, 
            public placeholder: string, 
            public id: string 
        ) {
            this.htmlElement = new HtmlElement(id,'input');
            this.inputAttributes = new InputAttributes(value,placeholder);
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()