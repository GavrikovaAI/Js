<!doctype HTML>
<html lang="Ru-Ru">

<head>
    <meta charset="utf-8">
    <title>Популяционная динамика</title>
    <meta name="description" content="The HTML5 sample">
    <meta name="author" content="from internet">
    <link rel="stylesheet" href="css\styles.css">
</head>

<body>
    <header>
        <hr>
        <h1>Краткие сведения о математическом моделировании популяционной динамики</h1>
        <hr>
    </header>
    <nav>
        <h2>Навигация</h2>
        <hr>
    </nav>
    <main>
        <header>
            <h2>Заголовк контента</h2>
            <hr>
        </header>

        <article>
            <header>
                <h3>Статья 1</h3>
            </header>
            <section>
                <h4>Введение</h4>
            </section>
            <section>
                <h4>Основная часть</h4>
            </section>
            <section>
                <h4>Заключение</h4>
            </section>
            <footer>
                <hr>
                <h4>Источник информации</h4>
                <address>
                    Ссылка на источник в сети интернет
                </address>
            </footer>
        </article>

    </main>
    <footer>
        <hr>
        <h4>Информация о разработчиках, контакты</h4>
        <hr>
    </footer>
    <script src="js\scripts.js"></script>
    <body>
    <script>
let infoPazient=["Иванов","Иван","Иванович", 15,"мая",1974,"м"];
 /*console.log(infoPazient);
 console.log(infoPazient[0]);
 console.log(infoPazient[5]);
 console.log(" Привет, JavaScript");
 let now;
 let lastname = prompt("Введите имя пациента", now)
 console.log(lastname)
 console.log(lastname);
 infoPazient[0]= lastname;
 console.log(infoPazient);*/
 
 var person = 
 { "SNILS 1":["Иванов","Иван","Иванович", 15, "мая", 1974,"м","исполнено"],
    "SNILS 2":["Сидоров","Сидор","Сидорович", 20, "мая", 1980,"м","медотвод"],
    "SNILS 3":["Петрова","Мария","июня", 1, "июня", 1975,"ж","назначено"]};
 
console.log(person);
SNILS="SNILS 4"

let now;
lastname=prompt("Введите фамилию пациента",now);
//console.log(lastname);
infoPazient[0]=lastname;
console.log(infoPazient);
let firstname;
firstname=prompt("Введите имя пациента",now);
//console.log(lastname);
infoPazient[1]=firstname;
console.log(infoPazient);
let middlename;
middlename=prompt("Введите отчество пациента",now);
//console.log(lastname);
infoPazient[2]=middlename;
console.log(infoPazient);
let date;
date=prompt("Введите дату рождения пациента",now);
infoPazient[3]=date;
console.log(infoPazient);
person.SNILS4= infoPazient;
console.log(person);

//Получаем информацию о пациенте по СНИЛС
let SNILS;
var FirstFunction = function (person, SNILS)
{SNILS=prompt("Введите SNILS пациента", SNILS);
inforname=person[SNILS];
//console.log(inforname);
alert("Информация о пациенте"+inforname);
statusPriv = person[SNILS][7];
console.log(statusPriv)
};

FirstFunction(person, SNILS);

/*let phase;
phase=prompt("Введите действие или медотвод или назначено или исполнено",phase);
inforname.push(phase);
console.log(inforname);
person[SNILS]=inforname;
console.log(person);*/

//Извлекаем информацию о текущем статусе прививки
var SecondFunction = function (statusPriv, infoname){
    //statusPriv = person[SNILS][7];

//Проверяем возможность изменения статуса
if (statusPriv === "исполнено") {
    alert("Отказано в прививке пацикнту" + inforname);
} else if (statusPriv === "медотвод") {
    alert("Отказано в прививке пациенту" + inforname);
} else {
    alert("Исполнить прививку пациенту"+ inforname);
}
forSecond = FirstFunction(person, SNILS);
SecondFunction(statusPriv, inforname);
//Предлагаем закончить или продложить работу в этом окне
while (confirm("Продолжить проверку привичного статуса?")){
    forSecond = FirstFunction(person, SNILS);
    SecondFunction(statusPriv, inforname);
}
   console.log("Сеанс проверки привичного статуса закончен");
    </script>
</body>
</html>