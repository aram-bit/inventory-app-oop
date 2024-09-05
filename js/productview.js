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

    }
}
export default new ProductView();