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

    basket: '/basket',
    order: '/order',
    thank: '/thank',
    detailsOrder: '/order-details',

    admin: '/admin',
    adminCategoriesList: '/admin/category',
    createCategory: '/admin/category/create',
    editCategory: '/admin/category/edit/:id',

    picPlaceholder: 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg',

    api: {
        novelties: '/pieces?filter=createdAt > DateTime.UtcNow.AddDays(-14)&sort=createdAt desc',
        dateOrdered: '/pieces?sort=createdAt desc',
        pieces: '/pieces?',
        popularity: '/pieces?&sort=product.AverageRating desc',
        care: '/pieces?filter=product.category.nameEn = "Care"',
        bottled: '/pieces?filter=isBottledParfume = true',
    }
}

export default routes;
