
var proName = document.getElementById("pro-name");
var proPrice = document.getElementById("pro-price");
var proItems = document.getElementById("pro-N-O-items");
var addBtn = document.getElementById("addbtn");
var inputs = document.getElementsByClassName("form-control");
var nameAlert = document.getElementById("NameAlert");
var priceAlert = document.getElementById("PriceAlert");
var numberAlert = document.getElementById("NumberAlert");
var searchinput = document.getElementById("search");
var Products = [];
var newindex = 0;

if (JSON.parse(localStorage.getItem("productlist") != null)) {
    Products = JSON.parse(localStorage.getItem("productlist"));
    displaydata();

}

addBtn.onclick = function () {
    proItems.classList.remove("is-valid");
    proName.classList.remove("is-valid");
    proPrice.classList.remove("is-valid");
    if (document.getElementById("addbtn").innerHTML == "Update") {
        update()
    } else {
        addproduct();
    }
    displaydata();
    resetForm();
    

}

function addproduct() {
    var Product = {
        name: proName.value,
        price: proPrice.value,
        items: proItems.value
    }

    Products.push(Product);
    localStorage.setItem("productlist", JSON.stringify(Products));
}



function displaydata() {
    var ProductsCartona = "";
    for (var i = 0; i < Products.length; i++) {
        ProductsCartona +=
            `<tr>
       <td>${i + 1}</td>
       <td>${Products[i].name}</td>
       <td>${Products[i].price}</td>
       <td>${Products[i].items}</td>
       <td><button class="btn btn-danger" onclick='deleteproduct(${i})'>Delete</button></td>
       <td><button class="btn btn-warning" onclick='updateproduct(${i})'>update</button></td>

       </tr>`;
    }

    document.getElementById("tableBody").innerHTML = ProductsCartona;
}

function resetForm() {
    for (i = 0; i <= inputs.length; i++) {
        inputs[i].value = "";

    }
}

function deleteproduct(index) {
    Products.splice(index, 1);
    localStorage.setItem("productlist", JSON.stringify(Products));
    displaydata();
    localStorage.setItem("productlist", JSON.stringify(Products));
}



function updateproduct(index) {
    proName.value = Products[index].name;
    proPrice.value = Products[index].price;
    proItems.value = Products[index].items;
    document.getElementById("addbtn").innerHTML = "Update";
    newindex = index;
}




function update() {
    var item = {
        name: proName.value,
        price: proPrice.value,
        items: proItems.value,

    }

    Products[newindex] = item;
    document.getElementById("addbtn").innerHTML = "Add";
    localStorage.setItem("productlist", JSON.stringify(Products));

}



searchinput.onkeyup = function () {
    var value = searchinput.value;
    var ProductsCartona = "";
    for (var i = 0; i < Products.length; i++) {
        if (Products[i].name.toLowerCase().includes(value.toLowerCase())) {
            ProductsCartona +=
                `<tr>
        <td>${i + 1}</td>
        <td>${Products[i].name}</td>
        <td>${Products[i].price}</td>
        <td>${Products[i].items}</td>
        <td><button class="btn btn-danger" onclick='deleteproduct(${i})'>Delete</button></td>
        <td><button class="btn btn-warning" onclick='updateproduct(${i})'>update</button></td>
 
        </tr>`;
        }
    }

    document.getElementById("tableBody").innerHTML = ProductsCartona;

}

proName.onkeyup = function () {
    var nameRejex = /^[A-Z][a-z]{2,6}$/;
    if (!nameRejex.test(proName.value)) {
        addBtn.disabled = "true";
        proName.classList.add("is-invalid");
        proName.classList.remove("is-valid");
        nameAlert.classList.remove("d-none")
    }
    else {
        addBtn.removeAttribute("disabled");
        proName.classList.add("is-valid");
        proName.classList.remove("is-invalid");
        nameAlert.classList.add("d-none")
    }
}

proPrice.onkeyup = function () {
    var priceRejex = /^[1-9][0-9]{2,6}$/;
    if (!priceRejex.test(proPrice.value)) {
        addBtn.disabled = "true";
        proPrice.classList.add("is-invalid");
        proPrice.classList.remove("is-valid");
        priceAlert.classList.remove("d-none")
    }
    else {
        addBtn.removeAttribute("disabled");
        proPrice.classList.add("is-valid");
        proPrice.classList.remove("is-invalid");
        priceAlert.classList.add("d-none")
    }
}

proItems.onkeyup = function () {
    var nameRejex = /^[1-9][0-9]{0,6}$/;
    if (!nameRejex.test(proItems.value)) {
        addBtn.disabled = "true";
        proItems.classList.add("is-invalid");
        proItems.classList.remove("is-valid");
        numberAlert.classList.remove("d-none")
    }
    else {
        addBtn.removeAttribute("disabled");
        proItems.classList.add("is-valid");
        proItems.classList.remove("is-invalid");
        numberAlert.classList.add("d-none")
    }
}