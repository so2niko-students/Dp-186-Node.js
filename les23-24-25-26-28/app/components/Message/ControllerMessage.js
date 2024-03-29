import { ViewMessage } from "./ViewMessage.js";
import { ModelMessage } from "./ModelMessage.js";

export class ControllerMessage{
    constructor({subscribe, notify}){
        this.view = new ViewMessage(this.handleClickDetails);
        this.model = new ModelMessage(this.handleLoadMessages.bind(this));

        this.model.getMessages();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('search', this.handleSearch);
        this.subscribe('pagination', this.handlePagination);
    }

    handleLoadMessages(arr){
        this.view.renderMessages(arr);
    }

    handleSearch = (str)=>{
        const data = this.model.filter(str);
        this.view.renderMessages(data);
    }

    handlePagination = (where = 'next')=>{
        const data = this.model.getPaginationData(where);
        this.view.renderMessages(data);
    }

    handleClickDetails = (ev)=>{
        console.log(ev);
        const post  = this.model.getPost(this.view.getId(ev));
        this.notify('show-details', post);
    }
}