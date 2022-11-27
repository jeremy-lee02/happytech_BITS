import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client =  sanityClient({
    projectId:'pf0uxjg1',
    dataset: 'production',
    apiVersion: '2022-11-26',
    useCdn: true,
    token: ''
})