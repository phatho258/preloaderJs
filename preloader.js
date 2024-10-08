const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    width: 200px;
    height: 200px;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
lottieContainer.style.display = 'none';

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // or 'svg'
        loop: true,
        autoplay: true,
        path: 'https://phatho258.github.io/preloaderJs/preload-lottie.json',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'black';
    hideOverlay();
});

// window.addEventListener('load');
