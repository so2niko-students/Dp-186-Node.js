export class Publisher{
    constructor(){
        this.subscribes = {};
    }

    get methods(){
        return {
            subscribe : this.subscribe,
            notify : this.notify,
            unsubscribe : this.unsubscribe
        };
    }

    subscribe = (event, callbackFunc)=>{
        if(!this.subscribes[event]){
            this.subscribes[event] = [];
        }
        this.subscribes[event].push(callbackFunc);
    }

    notify = (event, data)=>{
        if(!this.subscribes[event]){
            this.subscribes[event] = [];
        }
        console.log('notify', event, data);
        this.subscribes[event].forEach(func=>func(data));
    }

    unsubscribe = (event, callbackFunc)=>{
        if(!this.subscribes[event]){
            this.subscribes[event] = [];
        }

        this.subscribes[event] = this.subscribes[event].filter(func => func != callbackFunc);
    }


}