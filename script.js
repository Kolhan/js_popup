const images = ['img/bird.svg', 'img/cat.svg', 'img/dog.svg']

images.forEach(el => {
    const img = document.createElement("div");
    img.className = 'mini__item'
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener('click', e => 
        showPopup(`<img alt=pic src="${el}">`)
    )
    document.body.append(img)
})


const popup = document.querySelector('.popup')

const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

function closePopup(event) {
    event.target.parentElement.classList.remove('popup_active')
}

function showPopup(text) {
    popup.classList.add('popup_active')
    popupContent.innerHTML = text;
}

popupClose.addEventListener('click', closePopup)

/*
    #hw1 link(git)

    1) при нажатии на поле вне картинки закрывать popup
    2) закрывать по нажатию на 
        (keyup/keydown)
        - esc
        - alt+f4 (preventDefoult!!!!!)
    3) сделать интерфейс в виде lightbox - все элементы за popup становятся затененными

*/
