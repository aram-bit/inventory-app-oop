import Storage from "./storage.js";
const productTitle=document.getElementById("product_title");
const productQuantity=document.getElementById("product_quantity");
const productCategory=document.getElementById("product_category");
const productBtn=document.querySelector(".product_btn");

class ProductView{
    constructor(){
      productBtn.addEventListener("click",(e)=>this.addNewProduct(e));
      this.products=[];
    }
    setApp(){
        this.products=Storage.getAllProducts();
    }
    addNewProduct(e){
        e.preventDefault();
        const title=productTitle.value;
        const quantity=productQuantity.value;
        const category=productCategory.value;
        if(!title || !quantity || !category)return;
        Storage.saveProduct({title,quantity,category});
        this.products=Storage.getAllProducts();
        this.createProductList(this.products);
    }
    createProductList(products){
        let result="";
        products.forEach(product => {
            const foundCategory=Storage.getAllCategories().find(c=>c.id==product.category);
            result+=`<div class="product_setting">
                    <div >
                    <p class="product_name">${product.title}</p>
                    </div>
                    <div class="product_detail">
                    <p class="product_date">${new Date(product.updated).toLocaleDateString("fa-IR")}</p>
                    <p class="product_category-list">${foundCategory.title}</p>
                    <p class="product_numbers">${product.quantity}</p>
                    <button class="product_remove">delete</button>
                    </div>
                    </div>`;
        });
        document.querySelector(".products").innerHTML=result;        
    }
}
export default new ProductView();