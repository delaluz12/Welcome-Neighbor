const sgMail = require('@sendgrid/mail');
require("dotenv").config({ 
    path: require("find-config")(".env") 
});


const sendEmail = async (msgObject) => {

    console.log('=====> Inside sendEmail Function!!!!!!!!!!!!!!!!!!!!!!!!!!');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    try {
        const msgSentData = await sgMail.send(msgObject);
        return msgSentData;
    } catch(error) {
        console.error(error);
        console.error(error.response.body);

        return error
    }
}
    const msg = {
        from: 'hildebrandtlogan@gmail.com', // Change to your recipient
        to: 'schmoe614@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }



module.exports = sendEmail;