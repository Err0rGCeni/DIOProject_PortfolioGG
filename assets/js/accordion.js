const accordionTriggers = document.querySelectorAll('.accordion .trigger')

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordion = trigger.parentElement
        const isOpen = accordion.classList.contains('open')

        if (isOpen) {
            accordion.classList.remove('open')
        } else {
            accordion.classList.add('open')
        }
    })
})