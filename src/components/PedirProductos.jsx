import data from '../data/products.json';

const PedirProductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export default PedirProductos