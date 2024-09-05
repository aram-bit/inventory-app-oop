export default class Storage{
    static getAllCategories(){
       const savedCategoris=JSON.parse(localStorage.getItem("category")) || [];
    //    sort
    return savedCategoris.sort((a,b)=>{
        return new Date(a.createdAt)>new Date(b.createdAt) ? -1:1;
    });
    }
    static saveCategory(categoryToSave){
        const savedCategories=Storage.getAllCategories();
        const isExisted=savedCategories.find(c=>c.id==categoryToSave.id);
        if(isExisted){
            isExisted.title=categoryToSave.title;
            isExisted.description=categoryToSave.description;
        }
        else{
            categoryToSave.id=new Date().getTime();
            categoryToSave.createdAt=new Date().toISOString();
            savedCategories.push(categoryToSave);
        }
        localStorage.setItem("category",JSON.stringify(savedCategories));
    }
    static getAllProducts(){
        const savedProducts=JSON.parse(localStorage.getItem("products")) || [];
        return savedProducts.sort((a,b)=>{
            return new Date(a.updated)>new Date(b.updated) ?-1 :1;
        });
    }
    static saveProduct(productToSave){
        const savedProducts=Storage.getAllProducts();
        const isExisted=savedProducts.find(p=>p.id==productToSave.id);
        if(isExisted){
         isExisted.title=productToSave.title;
         isExisted.quantity=productToSave.quantity;
         isExisted.category=productToSave.category;
        }
        else{
        productToSave.id=new Date().getTime();
        productToSave.updated=new Date().toISOString();
        savedProducts.push(productToSave);
        }
        localStorage.setItem("products",JSON.stringify(savedProducts));
    }
    static saveAllProducts(products){
        localStorage.setItem("products",JSON.stringify(products));
    }

}