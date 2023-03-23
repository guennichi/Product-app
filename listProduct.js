var products = JSON.parse(localStorage.getItem('productlist')) || []
function list() {
    var tbody = document.getElementById('tbody')
    products.map((element, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${element.nom}</td>
            <td>${element.des}</td>
            <td>${element.qt}</td>
            <td>${element.pr} Dt</td>
            <td><button onclick='loadData(${index})'type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
            <button onclick='supp(${index})' class="btn btn-danger btn-sm delete">Delete</button></td>
        </tr>
        `

    })
}
list()

function supp(i) {

    products.splice(i, 1)
    localStorage.setItem('productlist', JSON.stringify(products))
    window.location.reload()
}

var nom = document.getElementById('nom')
var des = document.getElementById('desc')
var qt = document.getElementById('quantity')
var pr = document.getElementById('Price')
var index = 5
function loadData(i) {
    nom.value = products[i].nom
    des.value = products[i].des
    qt.value = products[i].qt
    pr.value = products[i].pr
    index = i
}

function saveChanges() {

    var data = {
        nom: nom.value ,
        des :des.value ,
        qt :qt.value,
        pr:pr.value 
    }
    products.splice(index,1,data);
    localStorage.setItem('productlist',JSON.stringify(products))
    window.location.reload()
}