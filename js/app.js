import categoryview from "./categoryview.js";
document.addEventListener("DOMContentLoaded",()=>{
    categoryview.setApp();
    categoryview.createCategoryList(categoryview.categories);
})