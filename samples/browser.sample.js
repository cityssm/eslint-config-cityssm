"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.getElementById('#test').innerHTML = document.getElementsByClassName('input')[0].value;
document.getElementById('#test').innerHTML = cityssm.escapeHTML(document.getElementsByClassName('input')[0].value);
document.getElementById('#test').innerHTML = `<p>
${cityssm.escapeHTML(document.getElementsByClassName('input')[0].value)})}
</p>`;
var text = document.getElementsByTagName('p')[2].textContent ?? '';
document.getElementById('#test').insertAdjacentHTML('beforeend', text);
document.getElementById('#test').insertAdjacentHTML('beforeend', cityssm.escapeHTML(text));
var val = 4;
val++;
const mesageElement = document.getElementById('message');
if (val >= 3) {
    messageElement.classList.add('is-active');
}
else {
    messageElement.classList.remove('is-active');
}
