/* Selectors */
export const getAllProducts = ({products}) =>products;
export const getFilteredProducts = ({products,filters})=>{
    let output = products;

    //filter by searchPhrase
    if(filters.searchPhrase) {
        const pattern = new ReqExp(filters.searchPhrase, 'i');
        output = output.filter(product => pattern.test(product.name));
    }

    return output.reverse();
};

export const getProductById = ({products},productId) =>{
    const filtered = products.filter(function(product){
        return product.id = productID;
    });
    console.log('filtering prodducts by productId:',productId,filtered)
    return filtered.length? filtered[0]:{error:true}
};

