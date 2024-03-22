const routes = {
    login: '/login',
    register: '/register',
    profile: '/profile',
    
    home: '/',
    productDetails: '/details/:id',

    products: '/products',
    novelties: '/novelties',
    care: '/care',
    bottled: '/bottled',
    full_sized: '/full-sized',

    order: '/order',
    thank: '/thank',
    detailsOrder: '/order-details',

    search: '/search',

    deliveryMain: '/deliveryMain',
    deliveryFreeLuxuryHub: '/deliveryFreeLuxuryHub',
    deliveryPickup: '/deliveryPickup',
    deliveryNewPost: '/deliveryNewPost',
    deliveryUkrPoshta: '/deliveryUkrPoshta',
    deliveryMeestMail: '/deliveryMeestMail',
    deliveryByCourierInUkraine: '/deliveryByCourierInUkraine',

    aboutUs: '/about',

    admin: '/admin',
    adminCategoriesList: '/admin/category',
    createCategory: '/admin/category/create',
    editCategory: '/admin/category/edit/:id',

    adminProductsList: '/admin/products',
    createProducts: '/admin/products/create',


    picPlaceholder: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',

    api: {
        novelties: '/pieces?filter=createdAt > DateTime.UtcNow.AddDays(-14)',
        dateOrdered: '/pieces?sort=createdAt desc',
        pieces: '/pieces?',
        popularity: '/pieces?&sort=product.AverageRating desc',
        care: '/pieces?filter=product.category.nameEn = "Care"',
        bottled: '/pieces?filter=isBottledParfume = true',
        full_sized: '/pieces?filter=isBottledParfume = false',
        search: '/search?q=',
    }
}

export default routes;
