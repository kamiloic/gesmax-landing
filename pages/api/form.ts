// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'


type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    console.log(req.body)
    console.log(req.query)

    // create reusable transporter object using the default SMTP transport
    let transporter = createTransport({
        host: "premium150.web-hosting.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Bogital Forms" <${process.env.EMAIL_USER || req.body.email}>`,
        to: req.body._email,
        subject: req.body._subject,
        text: "",
        html: `
            <p>Noms et Prénoms: ${req.body.name}</p>
            <hr />
            <p>Téléphone: ${req.body.phone}</p>
            <hr />
            <p>Email: ${req.body.email}</p>
            <hr />
            <p>Message:</p>
            <p>${req.body.message}</p>
            <hr />
            <br />
            <br />
            <h6>FORMS by bogital</h6>
        `,
    });

    console.log(info)

    res.writeHead(301, { Location: req.body._next })
    return res.end()

}
