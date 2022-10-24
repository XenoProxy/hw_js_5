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

//task7
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
        let space =  `&nbsp`; // непропускаемый пробел
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

//task 12 
function task12(){
    function studentData(){
        let name = prompt(`Ваше имя`),
            surname = prompt(`Ваша фамилия`),
            patronymic = prompt(`Ваше отчество`),
            group = prompt(`Ваша группа`);

        let str1 = `* Выполнил: студент гр. ${group}`,
            str2 = `* ${surname} ${name} ${patronymic}`;
            str3 = `* Домашняя работа: "Фунции"`;
        
        let len = 0,
            len1 = str1.length,
            len2 = str2.length;
        
        // добавляем к длине строки 2, т.к. учитываются * и пробел
        // в конце строки
        len1 > len2 ? len = len1 + 2 : len = len2 + 2;        
        let frame = `*`.repeat(len) + `\n`;

        let message = (
            frame +
            fillString(str3, len) +
            fillString(str1, len) +
            fillString(str2, len) +
            frame
        );
        console.log(message);
    }

    // создаём функцию для заполнения пробелов в конце строк
    // и выравнивания рамки по длине строки
    function fillString(str, len){
        let space =  ` `;
        let symbol = `*`;
        let diff = len - str.length; //разница в длине рамки и строки
        //заполняем строки недостающими пробелами и символом рамки
        let filled_str = (str + space.repeat(diff-1) + symbol + '\n');
        return filled_str;
    }

    document.write(`См. вывод в консоли`);
    studentData();
}

//task 13
function task13(){
    function validation(){
        let email;
        while (true) {
            email = prompt('Введите email');
            switch (true) {
                case (email.search(/[А-яЁё]/) !== -1):
                    alert('Почта не должна содержать русских букв. Введите почту заново');
                    continue;
                case (email.search(/[,!&?]/) !== -1):
                    alert('Почта не должна содержать подобные символы. Введите почту заново');
                    continue;
    
                case (email.split('@').length - 1 > 1):
                    alert('Почта не должна содержать более одного символа "@". Введите почту заново');
                    continue; 
                case (email.split('.').length - 1 > 1):
                    alert('Почта не должна содержать более одной точки. Введите почту заново');
                    continue;
                case (email.split('_').length - 1 > 1):
                    alert('Почта не должна содержать более одного символа "_". Введите почту заново');
                    continue;                           
                case (email.split('-').length - 1 > 1):
                    alert('Почта не должна содержать более одного символа "-". Введите почту заново');
                    continue;
    
                case (email.indexOf('@') == 0 || email.indexOf('@') == email.length - 1):
                    alert('Почта не должна начинаться или заканчиваться знаком "@". Введите почту заново');
                    continue;                
                case (email.indexOf('.') == 0 || email.indexOf('.') == email.length - 1):
                    alert('Почта не должна начинаться или заканчиваться точкой. Введите почту заново');
                    continue;               
                case (email.indexOf('_') == 0 || email.indexOf('_') == email.length - 1):
                    alert('Почта не должна начинаться или заканчиваться знаком "_". Введите почту заново');
                    continue;              
                case (email.indexOf('-') == 0 || email.indexOf('-') == email.length - 1):
                    alert('Почта не должна начинаться или заканчиваться знаком "-". Введите почту заново');
                    continue;  
    
                case (
                    email.indexOf('@') + 1 == email.indexOf('.') || email.indexOf('@') - 1 == email.indexOf('.') ||
                    email.indexOf('@') + 1 == email.indexOf('_') || email.indexOf('@') - 1 == email.indexOf('_') ||
                    email.indexOf('@') + 1 == email.indexOf('-') || email.indexOf('@') - 1 == email.indexOf('-')
                ):
                    alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                    continue;
                case (
                    email.indexOf('.') + 1 == email.indexOf('@') || email.indexOf('.') - 1 == email.indexOf('@') ||
                    email.indexOf('.') + 1 == email.indexOf('_') || email.indexOf('.') - 1 == email.indexOf('_') ||
                    email.indexOf('.') + 1 == email.indexOf('-') || email.indexOf('.') - 1 == email.indexOf('-')
                ):
                    alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                    continue;
                case (
                    email.indexOf('_') + 1 == email.indexOf('@') || email.indexOf('_') - 1 == email.indexOf('@') ||
                    email.indexOf('_') + 1 == email.indexOf('.') || email.indexOf('_') - 1 == email.indexOf('.') ||
                    email.indexOf('_') + 1 == email.indexOf('-') || email.indexOf('_') - 1 == email.indexOf('-')
                ):
                    alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                    continue;
                case (
                    email.indexOf('-') + 1 == email.indexOf('@') || email.indexOf('-') - 1 == email.indexOf('@') ||
                    email.indexOf('-') + 1 == email.indexOf('.') || email.indexOf('-') - 1 == email.indexOf('.') ||
                    email.indexOf('-') + 1 == email.indexOf('_') || email.indexOf('-') - 1 == email.indexOf('_')
                ):
                    alert('Почта не должна содержать несколько спец. символов подряд. Введите почту заново');
                    continue;
    
                case (email.split('@')[1].length <= 3):
                    alert('После знака "@" должно быть больше 2 символов. Введите почту заново');
                    continue;
                case (email.split('@')[1].length > 11):
                    alert('После знака "@" должно быть менее 11 символов. Введите почту заново');
                    continue;
                case (email.split('@')[0].length < 2):
                    alert('До знака "@" должно быть больше 2 символов. Введите почту заново');
                    continue;
                case true:        
                    break;
            }
            break;
        }
        document.write(email); 
    }

    validation();
}
