export class ViewDetails{
    constructor(listener){
        this.showClass = 'modal-show';
        this.modal = document.querySelector('.modal');
        this.modalInfo = document.querySelector('.modal-info');
        this.modal.addEventListener('click', listener);
    }

    show({id, author, message}){
        this.modalInfo.innerHTML = `<p data-id="${id}"><strong>${author}:</strong> <span>${message}</span></p>`;
        this.modal.classList.add(this.showClass);
    }

    close(e){
        this.modalInfo.innerHTML = '';
        this.modal.classList.remove(this.showClass);
    }

}