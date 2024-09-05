const categoryLink=document.querySelector(".category_link");
const categoryForm=document.querySelector(".category_form");
class CategoryView{
    constructor(){
      categoryLink.addEventListener("click",()=>this.showCategoryForm());
    }
    showCategoryForm(){
    categoryForm.style.opacity="1";
    categoryForm.style.height="auto";
    }
}
export default new CategoryView();