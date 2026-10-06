document.getElementById('#test')!.innerHTML = document.getElementsByClassName('input')[0].value

 document.getElementById('#test')!.innerHTML = cityssm.escapeHTML(document.getElementsByClassName('input')[0].value)


document.getElementById('#test')!.innerHTML = `<p>
${cityssm.escapeHTML(document.getElementsByClassName('input')[0].value)})}
</p>`

var text = document.getElementsByTagName('p')[2].textContent ??  ''

document.getElementById('#test')!.insertAdjacentHTML('beforeend', text)

document.getElementById('#test')!.insertAdjacentHTML('beforeend'  , cityssm.escapeHTML(text))

var val = 4

val++

var x  = null

const mesageElement = document.getElementById('message')

if (val >= 3) {
  messageElement.classList.add('is-active')
} else {
  messageElement.classList.remove('is-active')
}

const firstInputEle = document.querySelectorAll('.input')[0]

document.write(`<p>
  Test ${'val'} `)

const html = /*html*/`<p>`

const addButtonElement = document.querySelector('.add-button') as HTMLElement

;(document.querySelector('main') as HTMLElement).innerHTML = /* html */ `
  <thead>
    <tr>
      <th>Title</th>
      <th>${mesageElement.value}</th>
      <th class="has-text-right">Actions</th>
    </tr>
  </thead>
  <tbody></tbody>
`

addButtonElement.addEventListener('click', () => {
  const newRow = document.createElement('tr')
  newRow.innerHTML = `
    <td>New Title</td>
    <td>${cityssm.escapeHTML(firstInputEle.value)}</td>
    <td class="has-text-right">
      <button class="delete-button">Delete</button>
    </td>
  `
  (document.querySelector('tbody') as HTMLElement).appendChild(newRow)
})
