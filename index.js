const fs = require('fs');

const bufferData = Buffer.from('111\n', 'utf-8');

fs.appendFile('file.txt', bufferData, (err) => {
    if (err) console.log('Помилка:', err);
    else console.log('Буферні дані додані!');
});
fs.mkdir('new_folder2', (err) => {
    if (err) console.log(err);
    else console.log('Каталог створено!');
});
fs.stat('file.txt', (err, stats) => {
    if (err) console.log(err);
    else console.log(stats);
});
