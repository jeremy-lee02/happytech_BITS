
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import banner from './banner'
import products from './products'
import logo from './logo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([banner, products, logo])
})

