var products = [
    "Samsung Glaxy",
    "Nokia",
    "Iphone 6s",
    "Iphone 7 plus",
    "Iphone X",
    "Iphone 8"
]
const key_enter = 13;
function renderProduct() {
    let tbProducts = document.querySelector('.table>tbody');
    let htmls = products.map(function (product, index) {
        return `
        <tr>
        <td>${index + 1} </td>
        <td>${product} </td>
        <td>
        <button class="btn" onclick="modify(${index})">Edit</button>
        <button class="btn" onclick='removeProduct(${index})'>Remove</button>
    </td>
</tr>
`
    })
    tbProducts.innerHTML = htmls.join("");
}

function addproduct() {
    let productName = document.querySelector("#productname").value;
    if (productName != null && productName.trim() != "") {
        products.push(productName);
        reset();
        renderProduct();
    } else {
        alert("Product name is required!")
        document.querySelector("#productName").focus();
    }
}
function reset() {
    document.querySelector("#productname").value = "";
}

function pressEnter(e) {
    if (e.keyCode == key_enter) {
        createProduct();
    }
}
function removeProduct(index) {
    let confirmed = window.confirm(`Are sure to want to remove ${products[index]} ?`);
    if (confirmed) {
        products.splice(index, 1);
        renderProduct();
    }
}
function modify(index) {
    document.querySelector('#modifyProduct').classList.remove('d-none');
    document.querySelector("#new_ProductName").value = products[index];
    // position = index;
    document.querySelector("#btnUpdate").onclick = function () {
        let new_ProductName = document.querySelector("#new_ProductName").value;
        if (new_ProductName != null && new_ProductName.trim() != "") {
            products[index] = new_ProductName;
            renderProduct();
            clearForm();
        }
        else {
            alert("Product name is required!")
            document.querySelector("#new_ProductName").focus();
        }
    }
}
function clearForm() {
    document.querySelector('#modifyProduct').classList.add('d-none');
    position = 0;
}
function sort(direction) {
    direction == 'asc' ? products.sort() : products.reverse();
    renderProduct(products);
}
function search(event) {
    let keyword = event.target.value;
    let result = products.filter(function(product,index) {
        return product.toLowerCase().indexOf(keyword.toLowerCase()) != 1;
    })
    renderProduct(result);
}
renderProduct(products);