const routes = {
    login: '/login',
    register: '/register',
    
    home: '/',
    products: '/products',
    novelties: '/novelties',
    productDetails: '/details/:id',

    basket: '/basket',
    order: '/order',
    thank: '/thank',
    detailsOrder: '/order',

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
    }
}

export default routes;
