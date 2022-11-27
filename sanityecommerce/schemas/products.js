export default {
    name: 'products',
    tittle: 'Products',
    type: 'document',
    fields: [
        {
            name: 'image',
            tittle: 'Image',
            type: 'array',
            of: [{type:'image'}],
            options: {
                hotspot: true
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
            name: 'color',
            tittle: 'Color',
            type: 'array',
            of: [{type:'string'}]
        },
        {
            name: 'details',
            tittle: 'Details',
            type: 'string'
        },
        {
            name: 'type',
            tittle: 'Type',
            type: 'string'
        },
        {
            name: 'sales',
            tittle: 'Sale',
            type: 'number'
        },
    ]
}