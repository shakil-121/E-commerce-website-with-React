import { getShoppingCart } from "../utilities/fakedb";

const CartProductLoader= async ()=>{ 
    const loadedProduct=await fetch('products.json'); 
    const products=await loadedProduct.json(); 

    //if card data is in database. you have to use asycn await 
    const storedCart=getShoppingCart(); 
    
    const savedCart=[]; 

    for(const id in storedCart)
    {
        const addedProduct=products.find(pd=>pd.id===id); 
        if(addedProduct){ 
            const quantity=storedCart[id]; 
            addedProduct.quantity=quantity; 
            savedCart.push(addedProduct)
        }
    } 
    return savedCart;

} 

export default CartProductLoader;