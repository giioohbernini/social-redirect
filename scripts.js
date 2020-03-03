const url = window.location.search
const params = new URLSearchParams(url)

const target = params.get('target')
const fallback = params.get('fallback')

console.log({ target, fallback })

if (target) {
	setTimeout(() => {
		if(fallback) window.location.href = fallback
	}, 100)

	window.location.href = target
}
