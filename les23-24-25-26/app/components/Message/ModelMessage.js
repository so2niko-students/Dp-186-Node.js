export class ModelMessage{
    link = '/data/data.json';
    messages;//array of objects
    paginationCount = 4;
    paginationPage = 1;
    constructor(cBack){
        this.handleLoad = cBack;
    }

    getMessages(){
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('load', ()=>{
            this.messages = JSON.parse(ajax.responseText);
            this.curList = this.messages;
            this.handleLoad(this.getPaginationData());
        });
        ajax.open('GET', this.link);
        ajax.send();
    }

    filter(str){//search like
        const regSearch = new RegExp(str, 'i');
        this.curList = this.messages.filter(({message})=>regSearch.test(message));
        return this.getPaginationData();
    }

    getPaginationData(where = 'nowhere'){
        switch(where){
            case 'next':{
                this.paginationPage = this.curList.length / this.paginationCount > this.paginationPage? this.paginationPage + 1: 1;
                break;
            }
            case 'prev':{
                this.paginationPage = this.paginationPage == 1? Math.ceil(this.curList.length / this.paginationCount): this.paginationPage - 1;
                break;
            }
            default:{
                this.paginationPage = 1;
            }
        }
        const from = (this.paginationPage - 1) * this.paginationCount;
        const to = this.paginationPage * this.paginationCount;
        return this.curList.slice(from, to);
    }
}