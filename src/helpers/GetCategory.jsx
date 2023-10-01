import data from '../components/data/products.json';

const PedirCategoria = (cat) => {
    return new Promise((resolve, reject) => {
        const itemCat = data.find((el) => el.categoria === cat);

        if(itemCat) {
            resolve(itemCat)
        } else {
            reject({
                error: 'No se encuentra esa categoria'
            })
        }

    })

}

export default PedirCategoria