import data from '../components/data/products.json';

 const PedirDatosId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);

        if(item) {
            setTimeout(() => {
                resolve(item)
            }, 500)
        } else {
            reject({
                error: 'No se encuentra el producto'
            })
        }

    })

}

export default PedirDatosId