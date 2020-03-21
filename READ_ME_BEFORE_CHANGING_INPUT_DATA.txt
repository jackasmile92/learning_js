Для изменения входных данных
1) /js/cookie.js

    В переменную 
        let imageSrc = './images/';
    Пишем путь к картинкам.

2) файл с данными
    Меняем
    //module.exports = [
    На
    let input = [

3) в index.html 
    комментируем
    <script src="js/input_1.js"></script> 
    вставляем на его место путь к файлу с исходными данными