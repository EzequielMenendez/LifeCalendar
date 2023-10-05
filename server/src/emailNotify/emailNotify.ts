import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendEmailEvent = async(emailUser:string, startDate:Date|string, endDate:Date|string, title:string) => {
    try {
        await transport.sendMail({
            from: `"LIFE CALENDAR" : ${process.env.EMAIL}`,
            to: emailUser,
            subject: `the "${title}" event is going to start`,
            html: `<b>Your event is about to start</b> <p>We inform you that the ${title} event will begin at ${startDate.toString()} and will end at ${endDate.toString()}</p>`
        })
    } catch (error) {
        throw new Error('the email could not be sent')
    }
}

export const sendEmailRegister = async(emailUser:string)=>{
    try {
        await transport.sendMail({
            from: `"LIFE CALENDAR" : ${process.env.EMAIL}`,
            to: emailUser,
            subject: `Welcome to Life Calendar`,
            html: `<b>You can now use our virtual calendar!</b> <p>We welcome you to Life Calendar, I hope you like it, through this email you will receive event notifications</p>`
        })
    } catch (error) {
        console.log(error)
        throw new Error('the email could not be sent')
    }
}