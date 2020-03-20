export class ViewMessage{
    constructor(listener){
        this.list = document.querySelector('.topics-list');
        this.clickListener = listener;
    }

    renderMessages(arr){
        this.list.querySelectorAll('p').forEach(p=>p.removeEventListener('click', this.clickListener));

        this.list.innerHTML = arr.map(({author, message, id})=>`<p data-id="${id}"><strong>${author}:</strong> <span>${message.slice(0,20)}${message.length > 20? '...':''}</span></p>`).join('');

        this.list.querySelectorAll('p').forEach(p=>p.addEventListener('click', this.clickListener,{
            capture: true
        }));
    }

    getId(ev){
        const id = ev.target.dataset.id;
        
        return id? id: ev.target.closest('p').dataset.id;
    }
}