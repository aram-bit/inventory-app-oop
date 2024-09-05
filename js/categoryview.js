import Storage from "./storage.js";
const categoryLink=document.querySelector(".category_link");
const categoryForm=document.querySelector(".category_form");
const categoryTitle=document.getElementById("category_title");
const categoryDescription=document.getElementById("category_description");
const categoryBtn=document.querySelector(".btn_add-category");
class CategoryView{
    constructor(){
      categoryLink.addEventListener("click",()=>this.showCategoryForm());
      categoryBtn.addEventListener("click",(e)=>this.addNewCategory(e));
      this.categories=[];
    }
    showCategoryForm(){
    categoryForm.style.opacity="1";
    categoryForm.style.height="auto";
    }
    addNewCategory(e){
        e.preventDefault();
        const title=categoryTitle.value;
        const description=categoryDescription.value;
        if(!title || !description)return;
        Storage.saveCategory({title,description});
        this.categories=Storage.getAllCategories();
      }
}
export default new CategoryView();