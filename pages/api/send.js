import { CheckoutCart } from '../../components'

const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SG_API_KEY)

export default async function send(req,res){
  // const buyer = req.body
  const msg = {
    to: req.body.email,
    from: process.env.FROM_EMAIL,
    subject: `HappyTech - Order ${req.body.order_id} confirmation`,
    html: `<div>
      <p><strong>Name: </strong>${req.body.name}</p>
      <p><strong>Email: </strong>${req.body.email}</p>
      <p><strong>Phone: </strong>${req.body.phone}</p>
      <p><strong>Address: </strong>${req.body.address}</p>
      <p><strong>Note: </strong>${req.body.note}</p>
      <p><strong>Total: </strong>${req.body.price}</p>
    </div>
    `
  }
  await sgMail.send(msg)
  res.json({success:true})
}