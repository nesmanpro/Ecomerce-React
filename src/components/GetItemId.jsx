import data from '../data/products.json';

const PedirDatosId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);
        if(item) {
            resolve(item)
        } else {
            reject({
                error: 'No se encuentra el producto'
            })
        }

    })

}

export default PedirDatosId