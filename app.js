"use strict";
// Получаем элемент по ID и устанавливаем текстовое содержимое.
const element = document.getElementById('message');
if (element) {
    element.textContent = 'Hello TypeScript!';
}
