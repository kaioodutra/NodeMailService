const clientEmailHTML = (props) => {
  //General Configs
  const title = "E-mail Automático da Vittalis"
  const logo =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"

  const companyName = "EmpresaX"

  const backgroundColor = "#ffffff"

  const primaryColor = "#000f50"
  const hoverPrimaryColor = "#1a276b"

  const secondaryColor = "#f0f0fa"
  const hoverSecondaryColor = "#e6e6f9"

  const shaderColor = "#7F87A7"

  const whatsAppLink =
    "https://api.whatsapp.com/send?phone=5521123456789&text=Ol%C3%A1%2C%20vim%20do%20e-mail%20da%20EmpresaX!"

  const whatsAppButton = "Abrir WhatsApp"

  const linkDevBy = "https://www.kaiodutra.com"
  const devBy = "Kaio Dutra"

  //Address Configs
  const street = "Rua das Flores"
  const number = "100"
  const district = "Tijuca"
  const city = "Rio de Janeiro"
  const stateUF = "RJ"
  const cep = "20270-245"

  //Parameters
  const name = props.name ? props.name : "Nome"
  const subject = props.subject ? props.subject : "Assunto"
  const message = props.message ? props.message : "Mensagem"

  //Date Auto Config
  const date = new Date()

  const dia = date.getDate()
  const mes = date.getMonth()
  const ano = date.getFullYear()

  const horas = date.getHours()
  const minutos = date.getMinutes()

  const abbreviation = false //change de true for abbreviation
  var mesString = ""

  switch (mes) {
    case 0:
      mesString = abbreviation ? "Jan" : "Janeiro"
      break
    case 1:
      mesString = abbreviation ? "Fev" : "Fevereiro"
      break
    case 2:
      mesString = abbreviation ? "Mar" : "Março"
      break
    case 3:
      mesString = abbreviation ? "Abr" : "Abril"
      break
    case 4:
      mesString = abbreviation ? "Mai" : "Maio"
      break
    case 5:
      mesString = abbreviation ? "Jun" : "Junho"
      break
    case 6:
      mesString = abbreviation ? "Jul" : "Julho"
      break
    case 7:
      mesString = abbreviation ? "Ago" : "Agosto"
      break
    case 8:
      mesString = abbreviation ? "Set" : "Setembro"
      break
    case 9:
      mesString = abbreviation ? "Out" : "Outubro"
      break
    case 10:
      mesString = abbreviation ? "Nov" : "Novembro"
      break
    case 11:
      mesString = abbreviation ? "Dez" : "Dezembro"
      break
  }

  return `<!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>${title}</title> 
      <style>      
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }
        table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
          font-size: 16px !important;
        }
        table[class=body] .wrapper,
              table[class=body] .article {
          padding: 10px !important;
        }
        table[class=body] .content {
          padding: 0 !important;
        }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important;
        }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        table[class=body] .btn table {
          width: 100% !important;
        }
        table[class=body] .btn a {
          width: 100% !important;
        }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
    
      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
        .btn-primary table td:hover {
          background-color: ${hoverPrimaryColor} !important;
        }
        .btn-primary a:hover {
          background-color: ${hoverPrimaryColor} !important;
        }
      }
      </style>
    </head>
    <body class="" style="background-color: ${backgroundColor}; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">${message}</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: ${backgroundColor};">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
            <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">
            
              <!-- START CENTERED WHITE CONTAINER -->
              <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: ${secondaryColor}; border-radius: 10px;">
              
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; color: ${primaryColor}">
                          <br>
                          <br>
                          <img style="display: block; margin-left: auto; margin-right: auto; text-align: center;" src="${logo}">
                          <br>
                          <br>
                          <br>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Olá, ${name}</p>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Você nos enviou uma mensagem através do formulário de nosso site com os seguintes detalhes.</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Assunto: ${subject}</p>                     
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Mensagem: ${message}</p>
                          <br>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Agradecemos o seu contato! Te responderemos o mais breve possível. <br> Caso tenha urgência em uma resposta, sugerimos fazer contato via <b><a href="${whatsAppLink}" target="_blank">WhatsApp</a></b>. Basta clicar no link ou no botão abaixo!</p>
                          <br>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                            <tbody>
                              <tr>
                                <td align="left" style="font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                    <tbody>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; border-radius: 10px; text-align: center;"> <a href="${whatsAppLink}" target="_blank" style="display: inline-block; color: ${secondaryColor}; background-color: ${primaryColor}; border-radius: 10px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize;">${whatsAppButton}</a> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <br>
                          <br>
                          <br>
                          <br>
                          <br>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;"><i>Atenciosamente, Equipe da ${companyName}.</i></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              
              <!-- END MAIN CONTENT AREA -->
              </table>
            
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                  <tr>
                    <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: ${shaderColor}; text-align: center;">
                      <span class="apple-link" style="color: ${shaderColor}; font-size: 12px; text-align: center;">${companyName.toUpperCase()}</span>
                      <br>${street}, ${number} - ${district}
                      <br>${city} - ${stateUF}, CEP ${cep}</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: ${shaderColor}; text-align: center;">
                      Desenvolvido por <a href="${linkDevBy}" style="color: ${shaderColor}; font-size: 12px; text-align: center; text-decoration: none;">${devBy}</a>.
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
            
            <!-- END CENTERED WHITE CONTAINER -->
            </div>
          </td>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;">&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>`
}

module.exports = clientEmailHTML
