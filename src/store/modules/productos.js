export const productosModule = {
  namespaced: true,
  state: {
    todosLosProductos: [
      {
        nombre: 'Margarita',
        categoria: 'Dulce',
        peso: '1kg',
        oferta: false,
        descuento: 0,
        precio: 6500,
        stock: 10,
        imagen:
          'https://th.bing.com/th/id/OIP.hLoofgXXprZtKj15xhIvIwHaE5?pid=ImgDet&rs=1'
      },
      {
        nombre: 'Peperoni',
        categoria: 'Salado',
        peso: '100gr',
        oferta: true,
        descuento: 10,
        precio: 8000,
        stock: 10,
        imagen: 'https://th.bing.com/th/id/OIP.1jNxQyfXuM2Af8AO2D3RAgHaE8?pid=ImgDet&rs=1'
      },
      {
        nombre: 'Napolitana',
        categoria: 'Salado',
        peso: '50gr',
        oferta: false,
        descuento: 0,
        precio: 10000,
        stock: 10,
        imagen:
          'https://truffle-assets.imgix.net/23df7da4-pizza-napolitana_l_thumb.jpg?w=600&fl=progressive&auto=format,compress&cs=tinysrgb&dpr=1'
      },
      {
        nombre: 'Pollo y bacon',
        categoria: 'Salado',
        peso: '500gr',
        oferta: true,
        descuento: 50,
        precio: 14000,
        stock: 10,
        imagen: 'https://i.blogs.es/40c9b7/pizza-casera-champinon/840_560.jpg'
      }
    ]
  },
  mutations: {
    AGREGAR_PRODUCTO(state, nuevoProducto) {
      state.todosLosProductos.push(nuevoProducto)
    }
  },
  actions: {
    crearProducto(context, producto) {
      context.commit('AGREGAR_PRODUCTO', producto)
    }
  }
}
