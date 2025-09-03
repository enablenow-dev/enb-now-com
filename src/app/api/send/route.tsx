import nodemailer from 'nodemailer'

export async function POST(request:Request) {
  const { name, email, phone, subject, message } = await request.json()
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL for secure connection
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: 'enablenow@gmail.com',
    to: process.env.TO,
    subject:subject,
    text: "Name: " + name + "\n" +"Email: " + email + "\n" + "Phone: "+ phone + "\n" + "Message: " + message
  };
  //sending mail using promise based api
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if(error){ 
          reject(error);  
        }
        else {
          resolve(info.response)
        }
      })
    })
    return new Response("ok", {status: 200})
  } catch (error) {
    return new Response("Error Occurred" + error, {status: 500})
  }
}
