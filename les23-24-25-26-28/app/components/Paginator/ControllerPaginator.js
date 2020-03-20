import { ViewPaginator } from "./ViewPaginator.js";

export class ControllerPaginator{
    constructor({notify}){
        this.view = new ViewPaginator(this.handlePagination);
        this.notify = notify;
    }

    handlePagination = (e)=>{
        this.notify('pagination', e.target.dataset.id);
    }

}