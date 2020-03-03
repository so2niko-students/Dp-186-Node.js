import {sum} from '../app/sum.js';
export function testSum(ass){
    describe('Проверка функции sum', ()=>{
        it('Суммирование двух чисел', ()=>{
            ass.equal(sum(2,2), 4);
            ass.equal(sum(1,3), 4);
        });
        it('Суммирование трех чисел', ()=>{
            ass.equal(sum(2,2,2), 6);
        });
        it('Суммирование четырёх чисел', ()=>{
            ass.equal(sum(2,2,2,4), 10);
        });
        describe('Некорректные аргументы', ()=>{
            it('Проверка на string', ()=>{
                ass.equal(sum(2,3,'four'), 5);
            });
            it('Проверка на некорректные аргументы', ()=>{
                ass.equal(sum(true, 'haha', undefined,'four', []), 0);
                ass.equal(sum(true, 'haha', NaN,'four', []), 0);
            });
            it('Проверка на отсутствие аргументов', ()=>{
                ass.deepEqual(sum(), {
                    status : 'error',
                    description : 'Has not arguments'
                });
            });
        });
    });
}
