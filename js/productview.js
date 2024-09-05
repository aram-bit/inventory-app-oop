import Storage from "./storage.js";
const productTitle=document.getElementById("product_title");
const productQuantity=document.getElementById("product_quantity");
const productCategory=document.getElementById("product_category");
const productBtn=document.querySelector(".product_btn");
const searchProduct=document.getElementById("search");
class ProductView{
    constructor(){
      productBtn.addEventListener("click",(e)=>this.addNewProduct(e));
      searchProduct.addEventListener("input",(e)=>this.searchProduct(e));
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
                    <button class="product_remove" data-id=${product.id}>delete</button>
                    </div>
                    </div>`;
        });
        document.querySelector(".products").innerHTML=result;  
        const removeBtns=document.querySelectorAll(".product_remove");
        const btns=[...removeBtns];
        btns.forEach(btn=>{
            btn.addEventListener("click",(e)=>this.removeProduct(e));
        });
    }
    removeProduct(e){
    const id=e.target.dataset.id;
    const savedProducts=Storage.getAllProducts();
    const filteredProducts=savedProducts.filter(p=>(p.id)!==parseInt(id));
    this.createProductList(filteredProducts);
    this.products=filteredProducts;
    Storage.saveAllProducts(filteredProducts);
} 
    searchProduct(e){
     const searchValue= e.target.value.trim().toLowerCase();
     const filteredProducts=this.products.filter(p=>{
        return p.title.toLowerCase().includes(searchValue);
     });
     this.createProductList(filteredProducts);
      
   }
}
export default new ProductView();