//task1
function task1(){
    function operation1(num1, num2, num3){
        let result = ((num1 - num2) / num3);
        document.write(
            `Результат операции с числами: ${result}`
        );
    }
    operation1(10, 4, 2);    
}


//task2
function task2(){
    function cube_square(num){
        let cube = Math.pow(num, 3);
        let square = Math.pow(num, 2);
        document.write(
            `Куб числа ${num}: ${cube}</br>
            Квадрат числа ${num}: ${square}`
        );
    }
    cube_square(2);
}

//task3
function task3(){
    function min(a, b){
        if(a > b){
            document.write(`Min: ${b}</br>`);
        }
    }
    function max(a, b){
        if(a > b){
            document.write(`Max: ${a}`);
        }
    }
    min(10, 6);
    max(10, 6);
}

//task4
function task4(){
    let arr_task4 = [];

    //Пользователь вводит значения в массив
    function arrInput(arr){
        while(true){
            let input = prompt(
                `Введите числа.
                Чтобы остановиться, просто нажмите Enter`
            );
            if (input == ``){
                break;
            } else if (isNaN(input)){
                alert(`Введите число, а не слово!`);
            
            } else{
                arr.push(input);
            }
        }
        return arr;
    }
    
    //вывод массива
    function arrOutput(arr){
        return arr;
    }

    arrInput(arr_task4);
    document.write(arrOutput(arr_task4));
}

//task 5
function task5(){
    document.write(`Число 3 чётное?</br> ${isEven(3)}`);
}

function isEven(num){
    return num %2 == 0 ? true : false;
}

//task 6
function task6(){
    function getArr(arr){
        let even_arr = []
        for (let i = 0; i < arr.length; i++){
            if (isEven(arr[i])){
                even_arr.push(arr[i]);
            }
        }
        return even_arr;
    }

    let arr = [1,6,3,9,2,3,10,5];
    document.write(getArr(arr));
}

//task7  ============================================
//При вводе доп. параметра не выводится ничего.
function task7(){
    let height = prompt(`Введите высоту треугольника: `);

    function pyramid(height){  
        for (let i = 1; i <= height; i++){
            arguments[1] == undefined ? symbol = i.toString() : symbol = `*`;
            document.write(symbol.repeat(i) + `</br>`);
        }
    }
    pyramid(height);
}

//task 8
function task8(){

    let height = prompt(`Введите высоту равнобедренного треугольника: `); 
    
    function isoscelesPyramid(height){    
        let weight = (height - 1);
        let symbol = `*`;
        let space =  `&nbsp`;
        for (let i = 1; i <= height; i++){
            document.write(
                space.repeat(weight) + symbol.repeat(i) + space.repeat(weight) +`<br>`
            );
            weight--;
        }
    }

    // перевернутый треугольник
    function rev_isoscelesPyramid(height){    
        let weight = (height - 1);
        let symbol = `*`;
        let space =  `&nbsp`;
        for (let i = 1; i <= weight + 1; i++){
            document.write(
                space.repeat(i) + symbol.repeat(height) + space.repeat(i) +`<br>`
            );
            height--;
        }
    }

    isoscelesPyramid(height);
    document.write(`</br>`);
    rev_isoscelesPyramid(height);
}


//task 9
function task9(){    
    let arr = [];

    // генерация чисел Фибоначи
    function fibonachi(n){
        if (n == 0 || n == 1){
            return 1;
        } else{
            return (fibonachi(n-1) + fibonachi(n-2));
        }
    }

    for(let i = 0; i < 16; i++){
        arr.push(fibonachi(i));
    }
    document.write(arr);
}

//task 10
function task10(){
    function sumNum(num){  
        let sum = 0;   
        for(let i = 0; i < num.length; i++){
            sum += num[i];
        }
        if (sum > 9){
            return sumNum(sum);
        } else{
            return sum;
        }           
    }
    document.write(sumNum(876));
}

//task 11
function task11(){
    let i = 0;
    function recursionArray(arr){
        document.write(`${arr[i]} </br>`);
        i++;
        if (i < arr.length) {
            recursionArray(arr);
        }
    }

    recursionArray([1,7,3,8,2])
}

//task 12 ================================================
function task12(){
    function studentData(){
        let name = prompt(`Ваше имя`),
            surname = prompt(`Ваша фамилия`),
            patronymic = prompt(`Ваше отчество`),
            group = prompt(`Ваша группа`);

        let str1 = `* Выполнил: студент гр. ${group} `,
            str2 = `* ${surname} ${name} ${patronymic} `;
        
        let len = 0,
            len1 = str1.length,
            len2 = str2.length;
        len1 > len2 ? len = len1 : len = len2;

        let frame = `*`.repeat(len) + `\n`;

        let message = (frame +
            `* Домашняя работа: "Фунции" ` + `*\n` +
            str1 + `*\n` +
            str2 + `*\n` +
            frame
        );
        console.log(message);
    }

    document.write(`См. вывод в консоли`);
    studentData();
}

//task 13 ================================================
function task13(){
    function validation(){
        let email = prompt(`Введите email`);
        let ru_alph = [
            'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з',
            'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р',
            'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ',
            'э', 'ю', 'я'];
        let RU_alph = [
            'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З',
            'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р',
            'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ',
            'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
        
        let uncorrect_special_sym = [
            `!`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`,
            `+`, `=`, `[`, `]`, `{`, `}`, `'`, `"`, `<`, `>`,
            `/`, `?`, `\\`, `|`, `\``];

        let special_sym = [`@`, `-`, `_`, `.`];

        if (email.includes(ru_alph) || email.includes(RU_alph)){
            alert(`Неверный email. Содержаться русские буквы`);
        } else if (email.includes(uncorrect_special_sym)){
            alert(
                `Введены некорректные спецсимволы. Разрешены лишь @, -, _ и .`
            );
        } else if(email[0] == special_sym || email[-1] == special_sym){
            `Адресс не может начинаться со специального символа`
        }
    }
}
