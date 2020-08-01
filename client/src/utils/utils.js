export const utils={}; // eslint-disable-line no-unused-vars

utils.createDomFromHTML = function (htmlString) {
    let div = document.createElement('div');
    div.innerHTML=htmlString.trim();
    return div.firstChild;
}
utils.convertDataSourceToDbJson = function (){
    const ProductJson =[];
    for (let key in dataSource.products) {
        ProductJson.push(object.assign({

            id:key,
        },dataSource.products[key]));
    }
    console.log(JSON.stringify({
        products:ProductJson,
        order:[],
    },null,' '));
};