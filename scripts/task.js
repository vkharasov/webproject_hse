function verify() {
    let X = parseFloat(document.getElementById('X').value);
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    console.log('X =', X, 'a =', a, 'b =', b);

    if (isNaN(X) || isNaN(a) || isNaN(b)) {
        document.getElementById('result').value = 'Ошибка: введите числа во все поля';
        return;
    }

    // Если границы заданы наоборот — поменяем
    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }

    let result = (X >= a && X <= b) ? 'Принадлежит' : 'Не принадлежит';
    document.getElementById('result').value = result;
}

document.getElementById('verify').addEventListener('click', verify);