// Смена кириллицы на латиницу по клику на кнопку
var change = document.getElementById('change');
change.addEventListener('click', change_all);

function change_all() {
    // Проверяем текущее состояние по фамилии
    var lastname = document.getElementById('lastname');

    if (lastname.innerText === 'Иванов') {
        // → на латиницу
        document.getElementById('lastname').innerText = 'Ivanov';
        document.getElementById('firstname').innerText = 'Ivan';
        document.getElementById('patronymic').innerText = 'Ivanovich';
        document.getElementById('birth').innerHTML = 'Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.2000';
        document.getElementById('issuer').innerText = 'GU MVD PO G.MOSKVE';
        document.getElementById('place').innerText = 'G.MOSKVA';
    } else {
        // ← обратно на кириллицу
        document.getElementById('lastname').innerText = 'Иванов';
        document.getElementById('firstname').innerText = 'Иван';
        document.getElementById('patronymic').innerText = 'Иванович';
        document.getElementById('birth').innerHTML = 'Муж &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01.01.2000';
        document.getElementById('issuer').innerText = 'ГУ МВД ПО Г.МОСКВЕ';
        document.getElementById('place').innerText = 'Г.МОСКВА';
    }
}