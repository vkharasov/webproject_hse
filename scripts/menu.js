// Скрипт вставляет меню на всех страницах и подсвечивает текущую
(function () {
    var items = [
        { href: 'index.html',     text: 'Главная' },
        { href: 'info.html',      text: 'Информация' },
        { href: 'test_img.html',  text: 'Фото' },
        { href: 'form.html',      text: 'Формы' },
        { href: 'passport.html',  text: 'Паспорт' },
        { href: 'table.html',     text: 'Таблица' },
        { href: 'task.html',      text: 'Задача' },
        { href: 'DOM.html',       text: 'Считывание из DOM' }
    ];

    // Определяем, какая страница открыта
    var current = window.location.pathname.split('/').pop() || 'index.html';

    var menu = document.getElementById('menu');
    if (!menu) return;

    var html = '<h1>Меню</h1><ul>';

    for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var cls = (it.href === current) ? ' class="active"' : '';
        html += '<li><a href="' + it.href + '"' + cls + '>' + it.text + '</a></li>';
    }

    // Внешняя ссылка (в новом окне)
    html += '<li><a href="https://www.hse.ru/" target="_blank">Внешний сайт (ВШЭ)</a></li>';

    // Графическая ссылка (тоже в новом окне)
    html += '<li><a href="https://www.hse.ru/" target="_blank">' +
            '<img src="image/hse.png" width="20" alt="ВШЭ"></a></li>';

    html += '</ul>';

    menu.innerHTML = html;
})();