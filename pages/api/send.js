const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SG_API_KEY)

export default async function send(req,res){
  if (req.method === "POST") {
    const msg = {
      to: req.body.email,
      from: "letrungtin2712@gmail.com",
      subject: `HappyTech - Order ${req.body.order_id} confirmation`,
      html: `<div>
        <p><strong>Name: </strong>${req.body.name}</p>
        <p><strong>Email: </strong>${req.body.email}</p>
        <p><strong>Phone: </strong>${req.body.phone}</p>
        <p><strong>Address: </strong>${req.body.address}</p>
        <p><strong>Note: </strong>${req.body.note}</p>
        <ul><strong>Items: </strong>
          ${req.body.cart.map(item =>`
            <li>${item.name} <strong>x${item.quantity}</strong></li>
            <p><strong>Price: </strong>$${item.price}</p>
          `)}
        </ul><br/>
        <p><strong>Promotion: </strong>${req.body.promo}</p>
        <p><strong>Total Price: </strong>$${req.body.price}</p>
        <p><strong>Shipping Method: </strong>$${req.body.shipping}</p>
        ${req.body.shipping === 'banking'?
          `
          <p><strong>Account Number: </strong>${req.body.banking.accNum}</p>
          <p><strong>Bank: </strong>${req.body.banking.bank}</p>
          <p><strong>Account Name: </strong>${req.body.banking.name}</p>
          `
        :``}
        <p>For more information, please contact to this FaceBook 
          <a className='email' target="_blank" href='https://www.facebook.com/profile.php?id=100006438044375'>Link</a>
        </p>
      </div>
      `
    }
    try {
      await sgMail.send(msg)
      res.status(200).json({success: true})
    } catch (error) {
      res.status(200).json({success: false})
    }
  }
  
}