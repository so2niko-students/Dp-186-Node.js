function loadData(link = '/data/data.csv', isJSON = false){
    //Создание объекта AJAX
    const aja = new XMLHttpRequest();
    //Настройка получения данных
//     aja.onreadystatechange = function(){
//         if(this.status == 404){
//             console.error('Error loading data');
//         }
        
//         console.log(`%creadyState: ${this.readyState}, 
// status: ${this.status}`, 'background-color: black; color: white; padding: 5px;');
//         console.log(this.responseText);     

              
//     }
    aja.onload = function(){
        if(this.status == 200){
            showData(this.responseText, isJSON);
        }
    }

    //Настройка отправки данных
    aja.open('GET', link);
    //Отправка
    aja.send();

    return `OK. the message was sent to ${link}`;
}

function showData(data, isJSON){
    const phones = isJSON? JSON.parse(data): data.split(/\n/).map(str=>str.split(';'));

    console.log(phones);
    console.table(phones);
}

