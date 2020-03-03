import {testSum} from './test_sum.js';
import {testMulti} from './test_multi.js';
//Настройка работы Моки
mocha.setup('bdd');
//Лень писать chai.assert, буду писать ass
const ass = chai.assert;

//Где-то здесь будут тесты
//Тестирование функции sum
testSum(ass);
//Тестирование функции multi
testMulti(ass);

//Запуск тестов
mocha.run();