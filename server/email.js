const email = require("nodemailer")

const transporter = email.createTransport({
    service:"gmail",
    auth:{
        user:"pro4groupe@gmail.com",
        pass:"ftqsuggqqycuwheu"
    }
});

const mailOp = {
    from:"pro4groupe@gmail.com",
    to:"seydinamandionem9@gmail.com",
    subject: "Commende",
    html: "On vous as commender une chemise <button>click ici</button>"
};


transporter.sendMail(mailOp, (err, info) =>{
    if(err){
        console.log(err);
    } else{
        console.log("send email " + info.response);
    }
});