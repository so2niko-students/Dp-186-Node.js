import { ViewDetails } from "./ViewDetails.js";

export class ControllerDetails{
    constructor({subscribe}){
        this.view = new ViewDetails(this.closeModal);
        this.subscribe = subscribe;
        this.subscribe('show-details', this.showModal);
    }

    closeModal = (e)=>{
        this.view.close(e);
    }

    showModal = (post)=>{
        this.view.show(post);
    }

}