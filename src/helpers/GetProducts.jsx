import data from '../components/data/products.json';

const GetProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
            reject('No se han podido encontrar los productos')
        }, 500)
    })
}

export default GetProducts
