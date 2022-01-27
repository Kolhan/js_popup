const images = [
    'img/bird.svg', 
    'img/cat.svg', 
    'img/dog.svg',
    'img/hamster.svg'
]

//инициализация кнопок
images.forEach(el => {
    const img = document.createElement("div");
    img.className = 'mini__item'
    img.style.backgroundImage = `url(${el})`;
    img.addEventListener('click', e => 
        showPopup(`<img alt=pic src="${el}">`)
    )
    document.body.append(img)
})


//Всплывающее окно
const popup = document.querySelector('.popup')

const popupLightBox = document.querySelector('.popup__ligthbox')
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

function closePopup(event) {    
    popup.classList.remove('popup_active')
    popupLightBox.classList.remove('popup_active')
    
}

function keydown(event) {
    event.preventDefault()
    if (event.key == 'Escape' ||  (event.key == 'F4' && event.altKey) ) {
        closePopup(event)
    }     
    console.log(event)
}


function showPopup(text) {
    popup.classList.add('popup_active')
    popupContent.innerHTML = text;

    popupLightBox.classList.add('popup_active')
}

popupClose.addEventListener('click', closePopup)
popupLightBox.addEventListener('click', closePopup)
document.body.addEventListener('keydown', keydown)

//Думаю реализация Alt+F4 не возможна
window.webContents.on("before-input-event",(event,input)=>{
    if(input.code=='F4'&&input.altKey)event.preventDefault();});

/*
    #hw1 link(git)

    1) при нажатии на поле вне картинки закрывать popup
    2) закрывать по нажатию на 
        (keyup/keydown)
        - esc
        - alt+f4 (preventDefoult!!!!!)
    3) сделать интерфейс в виде lightbox - все элементы за popup становятся затененными

*/
