const routes = {
    login: '/login',
    register: '/register',
    
    home: '/',
    productsPage: '/products',
    productDetails: '/details/:id',

    basket: '/basket',
    order: '/order',
    thank: '/thank',
    detailsOrder: '/detailsOrder',

    deliveryMain: '/deliveryMain',
    deliveryFreeLuxuryHub: '/deliveryFreeLuxuryHub',
    deliveryPickup: '/deliveryPickup',
    deliveryNewPost: '/deliveryNewPost',
    deliveryUkrPoshta: '/deliveryUkrPoshta',
    deliveryMeestMail: '/deliveryMeestMail',
    deliveryByCourierInUkraine: '/deliveryByCourierInUkraine',

    admin: '/admin',
    adminCategoriesList: '/admin/category',
    createCategory: '/admin/category/create',
    editCategory: '/admin/category/edit/:id',
}

export default routes;
