//on load:
checkUser();

function checkUser() {
    let userid = window.location.href.split("#")[1];

    for (let i = 0; i < login_info.length; i++) {
        if (login_info[i].id == userid) {
            document.querySelector("#display-name").innerHTML = login_info[i].username;
        }
    }
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id == userid) {
            return renderTable(userid);
        }
    }
    for (let i = 0; i < login_info.length; i++) {
        if (login_info[i].id == userid) {
            return renderError();
        }
    }
    location.replace('../login/login.html'); // user not found
}

function renderError() {
    document.querySelector('#stalas').innerHTML = "<h1 class='error'>No orders found</h1>";
}

function renderTable(userid) {
    let HTML = `<tr>
                    <th>Order</th>
                    <th>Time</th>
                    <th>Name</th> 
                    <th>Phone</th> 
                    <th>Status</th> 
                </tr>`;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id == userid) {
            HTML += `<tr><td class='order' onclick='showModal(${orders[i].orderID})'>${orders[i].orderID}</td>
                <td>${orders[i].laikas}</td>
                <td>${orders[i].vardas}</td> 
                <td>${orders[i].telefonas}</td>
                <td><input onclick='incrementOrder(${orders[i].orderID});' class='btn-main status${orders[i].status}' type='button' id='btnStatus-${orders[i].orderID}' value='${changeBtnName(orders[i].status)}'></td></tr>`;
        }
    }
    document.querySelector('#stalas').innerHTML = HTML;
}

function showModal(id) {
    renderModal(id);
    document.querySelector('#modal').style.display = 'block';
    document.querySelector('#lightbox').style.display = 'block';
}

function closeModal() {
    document.querySelector('#modal').style.display = 'none';
    document.querySelector('#lightbox').style.display = 'none';
}

function renderModal(id) {

    const contKiekis = document.querySelector('#kiekis');
    const contItem = document.querySelector('#item');
    const contMsg = document.querySelector('#msg');

    let kiekisHTML = '<p class="amount-title" >Quantity:</p>'
    let itemHTML = '<span onclick="closeModal();">X</span><p class="item-title">Item:</p>'
    let msgHTML = '<p class="msg-p">';

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].orderID == id) {
            for (let j = 0; j < orders[i].item.length; j++) {
                let temp = orders[i].item[j].split('|');
                kiekisHTML += `<p>${temp[0]}</p>`;
                itemHTML += `<p class="item-item">${temp[1]}</p>`;
            }
            msgHTML += orders[i].msg;
            contKiekis.innerHTML = kiekisHTML;
            contItem.innerHTML = itemHTML;
            contMsg.innerHTML = msgHTML + "</p>";
        }
    }
}

function incrementOrder(id) {
    let btn = document.getElementById('btnStatus-' + id);
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].orderID == id) {
            if (orders[i].status <= 1) {
                btn.classList.remove("status" + orders[i].status);
                orders[i].status++;
                btn.classList.add("status" + orders[i].status);
                btn.value = changeBtnName(orders[i].status);
            }
            else {
                orders.splice(i, 1);
                renderTable(window.location.href.split("#")[1]);
            }
        }
    }
}

function changeBtnName(status) {

    switch (status) {
        case 0:
            return "Take order";
            break;
        case 1:
            return "Finish order";
            break;
        case 2:
            return "Ready";
            break;
        default:
            return "Ready";
            break;
    }

}