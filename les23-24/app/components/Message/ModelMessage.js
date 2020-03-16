export class ModelMessage{
    link = '/data/data.json';
    messages;//array of objects
    constructor(cBack){
        this.handleLoad = cBack;
    }

    getMessages(){
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('load', ()=>{
            // console.log(ajax);
            // console.log(this);
            this.messages = JSON.parse(ajax.responseText);
            this.handleLoad(this.messages);
        });
        ajax.open('GET', this.link);
        ajax.send();
    }

    filter(str){
        const regSearch = new RegExp(str, 'i');
        return this.messages.filter(({message})=>regSearch.test(message));
    }
}