const popupImg = document.querySelector('.popup_add_img');
const closeButton = popupImg.querySelector('.popup_close-button');
const popupPic = popupImg.querySelector('.popup_image');
const cardsContainer = document.querySelector('.photo-grid__container');
const popupCloseButton = popupImg.querySelector('.popup_close-button');

const cards = [{
        link: 'https://images.unsplash.com/photo-1558162921-0f9c3fb8928b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1596003903067-bf5762ad5c19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1553964125-e5327de9cb79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1535728699252-b064f980e8db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1536854929247-f5fac0a5b23b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1534421341437-b70c23255702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1516128935666-9742cf27e24c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1591087381441-729279897c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1555948560-27b32a752ff3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1595890993739-a16cf0465925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80'
    }, {
        link: 'https://images.unsplash.com/photo-1563275158-b71aeb3a727e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    },

]

function createCard(links) {
    const template = document.querySelector('#photo-grid').content;
    const templElement = template.cloneNode(true);
    const cardSrc = templElement.querySelector('.photo-grid__item');
    cardSrc.src = links;

    cardSrc.addEventListener('click', () => {
        popupPic.src = links
        popupImg.classList.add('popup_open');
    })

    return templElement
}

function closePopup() {
    popupImg.classList.remove('popup_open');
    document.addEventListener('keydown', closeEsc);
    document.addEventListener('click', closeOverlay) 
}

function renderCard(card) {
    cardsContainer.prepend(card)
}

cards.forEach((item) => {
    renderCard(createCard(item.link))
});

function closeEsc(evt) { 
    if (evt.key === 'Escape') { 
        closePopup(document.querySelector('.popup_open')); 
    } 
}; 

function closeOverlay(evt) { 
    if (evt.target.classList.contains('popup')) { 
        closePopup(document.querySelector('.popup_open')); 
    } 
}; 
 
popupCloseButton.addEventListener('click', () => closePopup())