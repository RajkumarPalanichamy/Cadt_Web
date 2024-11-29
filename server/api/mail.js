import nodemailer from 'nodemailer';


export default defineEventHandler(async (event) => {
  
  const { name, email, message } = await readBody(event);

  
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.user,
        pass: process.env.pass
      }
  });

 
  const mailOptions = {
    from: process.env.user,         
    to: [email,process.env.user],           
    subject: `New Contact Form Submission from ${name}`,
 
    text: `You have received a new message from ${name} (${email}):\n\n${message}`
  };

  try {
  
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
    
    
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email.' };
  }
});
