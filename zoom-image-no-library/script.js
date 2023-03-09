const image = document.querySelector('.image');
const mirror = document.querySelector('.mirror');
const container = document.querySelector('.container');

function handleEventImage(e) {
    console.log('log message sss');

    const w = this.offsetWidth;
    const h = this.offsetHeight;

    const mouseWithBorderX = e.pageX - container.offsetLeft;
    const mouseWithBorderY = e.pageY - container.offsetTop;

    console.log(e.clientX, e.clientY);

    const percentMouseByW = (mouseWithBorderX / w) * 100;
    const percentMouseByH = (mouseWithBorderY / h) * 100;

    console.log(percentMouseByW, percentMouseByH);
    console.log('e: ', container.offsetTop);

    mirror.style.backgroundPosition = `${percentMouseByW}% ${percentMouseByH}%`;
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;
    mirror.classList.add('show');
    // image.style.cursor = 'none';
}

function handleMouseOutImage(e) {
    mirror.classList.remove('show');
}

image.addEventListener('mousemove', handleEventImage.bind(image));
container.addEventListener('mouseout', handleMouseOutImage);
