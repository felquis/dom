document.body.classList.add('js')

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)

function onDOMContentLoaded (event) {
	var container = document.querySelector('[data-container]')

	container.insertAdjacentHTML('beforebegin', createContainer())

	var h1List = document.querySelectorAll('h1')

	Array.prototype.slice.call(h1List).map(function (element, index) {
		element.innerText = index + ' ' + element.innerText

		setTimeout(function () {
			element.classList.add('entering')
		}, 100 * index)
	})
}

function createContainer() {
	var fragment = '<div class="container">'

	for (var i = 0; i < 10; i++) {
		fragment += '<h1>Olá</h1>'
	}

	fragment += '</div>'

	return fragment
}
