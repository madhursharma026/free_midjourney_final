import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
    apiKey: process.env.NEXT_MAILJET_API_KEY,
    apiSecret: process.env.NEXT_MAILJET_SECRET_KEY
});

type MailProps = {
    toEmail: string;
    toName: string;
    subject: string;
    html: string;
}

export default async function sendMail (body: MailProps) {
    const request = mailjet.post("send", { 'version': 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: "freemidjourneyai@gmail.com",
                    Name: "Support Team"
                },
                To: [
                    {
                        Email: body.toEmail,
                        Name: body.toName
                    }
                ],
                Subject: body.subject,
                HTMLPart: body.html
            }
        ],
        SandboxMode: false
    })

    return request;
}
