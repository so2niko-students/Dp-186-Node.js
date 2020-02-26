// //Поиск элементов
// //id
// document.getElementById('root')//1 html element
// document.getElementsByClassName('className') //html collection
// document.getElementsByTagName('div') //html collection
// document.getElementsByName('info') // html collection

// document.querySelector('#root')//1 element
// document.querySelectorAll('div')//html collection

function turnModal(isShow = true){
    document.querySelector('#modal').style.display = isShow?'block':'none';
}