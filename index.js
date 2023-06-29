const form = document.getElementById('my-form');
const productList = document.querySelector('.product-list');
const productValue = document.querySelector('.product-value');
let total=0;// for calculating total cost
//url
const url = 'http://localhost:4000/admin/';
//event listener
form.addEventListener('submit',addProduct);

//function for adding products in the product list
function addToProductList(product){
    const li = document.createElement('li');
    li.id = product.id;
    li.innerHTML = `<span>${product.price} - ${product.name} 
    <button class="delete btn-sm btn-secondary m-2" onClick="deleteProduct(${product.id}, ${product.price})">delete</button>`
    //inserting the product in the product-list
    productList.appendChild(li);
    total =total + +product.price;

    displayTotalValue();
}

//function for displaying total cost of products
function displayTotalValue(price){
    
    productValue.innerHTML= `<h3>Total Value Worth of Products: Rs.${total}</h3>`
}

window.addEventListener('DOMContentLoaded', async ()=>{
    displayTotalValue();
    try{
        const products = await axios.get(url);
        //as products.data is an array so using a HOF
        products.data.forEach((product) =>{
            addToProductList(product)
        })
    }catch(err) {console.log(err)};
})

//function to add product in the database
async function addProduct(e){
    e.preventDefault();
    const productDetails ={
        price: e.target.price.value,
        name:e.target.name.value
    }
    try{
        const product = await axios.post(url,productDetails);
        addToProductList(product.data);
        form.reset();
    }
    catch(err) {console.log(err)};
}

//deleting the product
async function deleteProduct(id,price){
    try{
        
        await axios.delete(`${url}delete/${id}`);
        productList.removeChild(document.getElementById(id));
        total-=price;
        displayTotalValue();
    }catch(err) {console.log(err)};
}