export class ViewPaginator{
    constructor(listener){
        this.btns = document.querySelectorAll('.pagination');
        this.btns.forEach(btn=>btn.addEventListener('click', listener));
    }
}