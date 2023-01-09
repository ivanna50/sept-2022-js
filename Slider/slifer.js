const IMG_WIDTH = 500
const IMG_COUNT = 10
const IMG_EXT = 'png'
const IMG_DIR = 'img'
const IMG_TOTAL_WIDTH = IMG_WIDTH * (IMG_COUNT - 3)

const img = document.querySelector('.img');

for (let i = 0, filename = 1; i < IMG_COUNT; i++, filename++) {
    const tmp = document.createElement('img');
    tmp.src = `${IMG_DIR}_${filename}.${IMG_EXT}`
    img.append(tmp)
}

let position = 0

document.querySelector('.left').onclick = () => {
    if (position > 0) {
        position -= IMG_WIDTH
        img.style.marginLeft = -position + 'px'
    }
}

document.querySelector('.right').onclick = () => {
    if (position < IMG_TOTAL_WIDTH) {
        position += IMG_WIDTH
        img.style.marginLeft = -position + 'px'
    }
}
