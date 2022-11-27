export default {
    name: 'bestProduct',
    tittle: 'Best Selling Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            tittle: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            tittle: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            tittle: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: '90',
            }
        },
        {
            name: 'price',
            tittle: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            tittle: 'Details',
            type: 'string'
        },
    ]
}