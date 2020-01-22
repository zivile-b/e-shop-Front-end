updateHeaderTime();
loadCont('dashboard');

function updateHeaderTime() {

    let date = new Date();
    let timeBox = document.getElementById('today');

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nor', 'Dec'];
    month = monthNames[month - 1];

    if (day <= 9) {
        day = "0" + day;
    }

    return timeBox.innerHTML = year + " " + month + " " + day;
}

function loadCont(loc) {
    changeCurrentContTitle(loc);
    changeBtn_LeftMenu(loc);
    renderContent(loc);
}

function changeCurrentContTitle(loc) {
    return document.getElementById('current-container').innerHTML = loc;
}

function changeBtn_LeftMenu(loc) {
    let btn = document.querySelector('#item-' + loc);
    try {
        document.querySelector('.left_list-item-active').classList.remove("left_list-item-active");
    }
    catch{ }
    btn.classList.add("left_list-item-active");
}

function renderContent(loc) {
    let content = document.querySelector('#content > .cont-' + loc);
    try {
        document.querySelector('.show-container').classList.remove("show-container");
    }
    catch{ }
    content.classList.add("show-container");

    try {
        let rm = document.querySelectorAll('.destroy');
        Array.prototype.forEach.call(rm, function (node) {
            node.parentNode.removeChild(node);
        });
    }
    catch { }

    switch (loc) {
        case "dashboard":
            renderFor_dashboard();
            break;
        case "users":
            renderFor_users();
            break;
        case "vendors":
            renderFor_vendors();
            break;
        case "edit":
            renderFor_edit();
            break;
        case "inbox":
            renderFor_inbox();
            break;
        default:

            break;
    }
}


function renderFor_dashboard() {
    //insert data
}


function renderFor_users() {
    let table = document.querySelector('#users-table');
    let HTML;
    for (let i = 0; i < fakeUsers.length; i++) {
        HTML = '';
        HTML += `<tr class='destroy'>
        <td>${i}</td>
        <td>${fakeUsers[i].name}</td>
        <td>${fakeUsers[i].email}</td>
        <td>${fakeUsers[i].tel}</td>
        </tr>`;
        table.insertAdjacentHTML('beforeend', HTML);
    }
}

function renderFor_vendors() {
    let table = document.querySelector('#vendor-table');
    let HTML;
    for (let i = 0; i < trucks.length; i++) {
        HTML = '';
        HTML += `<tr class='destroy'>
        <td>${i}</td>
        <td>${trucks[i].name}</td>
        <td>${trucks[i].email}</td>
        <td>${trucks[i].tel}</td>
        </tr>`;
        table.insertAdjacentHTML('beforeend', HTML);
    }
}

function renderFor_edit() {
    let table = document.querySelector('#edit-table');
    let HTML;
    for (let i = 0; i < trucks.length; i++) {
        HTML = '';
        HTML += `<tr class='destroy'>
        <td>${i}</td>
        <td>${trucks[i].name}</td>
        <td>${trucks[i].email}</td>
        <td>${trucks[i].tel}</td>
        <td class='btn-delete'>Delete</td>
        </tr>`;
        table.insertAdjacentHTML('beforeend', HTML);
    }
}

function renderFor_inbox() {
    let table = document.querySelector('#inbox-table');
    let HTML;
    for (let i = 0; i < trucks.length; i++) {
        HTML = '';
        HTML += `<tr class='destroy'>
        <td>${inbox[i].name}</td>
        <td>${inbox[i].email}</td>
        <td class='btn-open'>Open</td>
        </tr>`;
        table.insertAdjacentHTML('beforeend', HTML);
    }
}

function addNewUserModal() {
    document.querySelector('#modal-adduser').style.display = 'block';
    document.querySelector('#lightbox-adduser').style.display = 'block';
    // document.querySelector('#left-menu').style.position = 'unset';
}

function sendMailModal() {
    document.querySelector('#modal-sendmail').style.display = 'block';
    document.querySelector('#lightbox-sendmail').style.display = 'block';
    // document.querySelector('#left-menu').style.position = 'unset';
}

function closeModal(){
    document.querySelector('#modal-adduser').style.display = 'none';
    document.querySelector('#lightbox-adduser').style.display = 'none';
    document.querySelector('#modal-sendmail').style.display = 'none';
    document.querySelector('#lightbox-sendmail').style.display = 'none';
    // document.querySelector('#left-menu').style.position = 'fixed';
}