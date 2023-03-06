import nodemailer from "nodemailer";

class MailService {
  transporter: any;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 587,
      secure: false,
      auth: {
        user: "reronsho@mail.ru",
        pass: "jcQ7viECu19AP6CXkvEk",
      },
    });
  }

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: "reronsho@mail.ru",
      to,
      subject: "Активация аккаунта на " + "http://localhost:8000",
      text: "",
      html: `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `,
    });
  }
  async sendRecoverynMail(to, link) {
    await this.transporter.sendMail({
      from: "reronsho@mail.ru",
      to,
      subject: "Восстановления пароля для " + "http://localhost:3000",
      text: "",
      html: `
                    <div>
                        <h1>Для восстановления перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `,
    });
  }
  async sendAlerUser({ to, link, info }) {
    await this.transporter.sendMail({
      from: "reronsho@mail.ru",
      to,
      subject: `${info}`,
      text: "",
      html: `
                    <div>
                    <h1>${info}</h1>

                        <h1>
                        
                        <a href="${link}">Перейти на портал лк</a></h1>
                    </div>
                `,
    });
  }
  async sendCommentUser(
    to: string,
    link: string,
    text: string,
    name_pole: string
  ) {
    await this.transporter.sendMail({
      from: "reronsho@mail.ru",
      to,
      subject: `Ошибка в поле ввода  ${name_pole}`,
      text: "",
      html: `
                  <div>
                  <h1>Ошибка в поле ввода  ${name_pole}${text}</h1>
                      <h1>
                      <a href="${link}">Перейти на портал лк</a></h1>
                  </div>
              `,
    });
  }
}

export const mailService = new MailService();
