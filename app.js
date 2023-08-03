window.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.gallery a');
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.modal');
    const dialog = document.querySelector('.dialog');
    const close = document.querySelector('.close');

    const openModal = (item) => {

        dialog.querySelector('h2').innerText = item.dataset.title;
        dialog.querySelector('.description').innerText = item.dataset.description;
        dialog.querySelector('img').src = item.dataset.image;

        backdrop.style.display = 'block';
        modal.style.display = 'flex';
        setTimeout(() => {
            backdrop.style.opacity = 1;
            dialog.style.transform = 'translateY(0)';
            dialog.style.opacity = 1;
        })
    }

    const closeModal = () => {
        backdrop.style.opacity = 0;
        dialog.style.transform = 'translateY(-150px)';
        dialog.style.opacity = 0;
        setTimeout(() => {
            backdrop.removeAttribute('style');
            modal.removeAttribute('style');
            dialog.removeAttribute('style');
            dialog.querySelector('h2').innerText = '';
            dialog.querySelector('.description').innerText = '';
            dialog.querySelector('img').src = '';
        }, 400)
    }

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(item);
        })
    })

    close.addEventListener('click', () => {
        closeModal();
    })

});
