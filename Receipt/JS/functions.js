function renderAll() {
    killPage(getInfo());
    setElements();
}

function getInfo() {
    return window.location.href.split('#')[1];
}

function getInfoArray() {
    let info = getInfo();
    info = info.split('&');
    return info;
}

function killPage(info) {
    if (info == 'undefined' || !info || info == '' || info == null) {
        window.location.replace('../index.html');
    }
    let infoArray = getInfoArray();
    if (infoArray.length != 2) {
        window.location.replace('../index.html');
    }
}

function forceKill() {
    window.location.replace('../index.html');
}

function setElements() {
    setCounter();
    setStatus();
}

function setCounter() {
    let info = getInfoArray()[0];
    let numbersF = document.getElementsByClassName('OrNr');

    if (info.length != 3) {
        return forceKill();
    }

    for (let i = 0; i < numbersF.length; i++) {
        numbersF[i].textContent = info[i];
    }
}

function setStatus() {
    let info = getInfoArray()[1];
    let bar = document.getElementById('bar');

    if (info.length != 1) {
        return forceKill();
    }

    switch (info) {
        case '0':
            bar.style.width = "5%";
            bar.style.animation = "loading5";
            break;
        case '1':
            bar.style.width = "36%";
            bar.style.animation = "loading36";
            break;
        case '2':
            bar.style.width = "63%";
            bar.style.animation = "loading63";
            break;
        case '3':
            bar.style.width = "100%";
            bar.style.animation = "loading100";
            break;
        default:
            return forceKill();
            break;
    }
    bar.style.animationDuration = "3s";
    bar.style.animationIterationCount = "1";
}