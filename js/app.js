import categoryview from "./categoryview.js";
import productview from "./productview.js";
document.addEventListener("DOMContentLoaded",()=>{
    categoryview.setApp();
    productview.setApp();
    categoryview.createCategoryList(categoryview.categories);
})