const productName = document.getElementById("product-name");
const productCategory = document.getElementById("product-category");
const productPrice = document.getElementById("product-price");
const stockQuantity = document.getElementById("stock-quantity");
const productStatus = document.getElementById("product-status");
const addProBtn = document.getElementById("add-product-button");
const inventoryTable = document.getElementById("inventory-table-body");


let productData = JSON.parse(localStorage.getItem("proData")) || [];
addToInventory(productData);

let mode = "add";
let editingId = null;


function addProduct() {


    if (mode === "edit") {

        const ElToEdit = productData.find((data) => data.id === editingId);

        ElToEdit.productname = productName.value;
        ElToEdit.productCategory = productCategory.value;
        ElToEdit.productprice = productPrice.value;
        ElToEdit.stockquantity = stockQuantity.value;
        ElToEdit.productstatus = productStatus.value;

        localStorage.setItem("proData", JSON.stringify(productData));
        addToInventory(productData);

        mode = "add";
        editingId = null;
        addProBtn.textContent = "Add Product";

        productName.value = "";
        productCategory.value = "";
        productPrice.value = "";
        stockQuantity.value = "";
        productStatus.value = "";

    }
    else{

        let skuNumber;
    
        skuNumber = JSON.parse(localStorage.getItem("skuNumber")) || 1;
    
    
        productData.push({
            id: crypto.randomUUID(),
            sku: skuNumber,
            productname: productName.value,
            productcategory: productCategory.value,
            productprice: productPrice.value,
            stockquantity: stockQuantity.value,
            productstatus: productStatus.value,
        })
    
        localStorage.setItem("proData", JSON.stringify(productData));
    
        productName.value = "";
        productCategory.value = "";
        productPrice.value = "";
        stockQuantity.value = "";
        productStatus.value = "";
    
        skuNumber++;
        localStorage.setItem("skuNumber", JSON.stringify(skuNumber));
    }

}

function addToInventory(dataToAdd) {

    inventoryTable.innerHTML = "";

    dataToAdd.forEach(data => {

        const splittingStock = data.productstatus.split("-").map((char) => char.slice(0, 1).toUpperCase() + char.slice(1)).join('-');

        inventoryTable.innerHTML += `
         <tr class="product-row" id="${data.id}" >
              <td>
                <div class="product-info">
                  <strong>${data.productname}</strong>
                  <span>SKU-${data.sku}</span>
                </div>
              </td>

              <td>${data.productcategory}</td>

              <td>₹${data.productprice}</td>

              <td>${data.stockquantity}</td>

              <td>
                <span class="status-badge status-${data.productstatus}">
                  ${splittingStock}
                </span>
              </td>

              <td>
                <div class="table-actions">
                  <button type="button" class="action-btn edit-btn">
                    Edit
                  </button>

                  <button type="button" class="action-btn delete-btn">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
        `

    });


}

function deleteProduct(deleteBtn) {

    const parentEle = deleteBtn.closest("tr");

    const idOfParent = parentEle.id;

    productData = productData.filter(({ id }) => id !== idOfParent);

    localStorage.setItem("proData", JSON.stringify(productData));

    addToInventory(productData);
}

function editProduct(editBtn) {

    const parentEle = editBtn.closest("tr");

    const idOfParent = parentEle.id;

    const elementToEdit = productData.find(({ id }) => id === idOfParent);

    productName.value = elementToEdit.productname;
    productCategory.value = elementToEdit.productcategory;
    productPrice.value = elementToEdit.productprice;
    stockQuantity.value = elementToEdit.stockquantity;
    productStatus.value = elementToEdit.productstatus;

    mode = "edit";
    editingId = idOfParent;
    addProBtn.textContent = "Update Product";


}


addProBtn.addEventListener("click", () => {
    addProduct();
    addToInventory(productData);
})

inventoryTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        deleteProduct(event.target);
    }
})

inventoryTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-btn")) {
        editProduct(event.target);
    }
})