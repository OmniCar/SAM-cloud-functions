import { templateMap,IMissingTranslationEmailData, IInputMissingTranslationEmailData } from '../postmarkTypes'
import { sendTemplatedEmail } from '../postmarkPublisher'

export function pubSubSendMissingTranslationEmail (event: any, callback: any){
  sendMissingTranslationEmail(event.data)
  callback();
};


function sendMissingTranslationEmail(input: IInputMissingTranslationEmailData) {
    const message: IMissingTranslationEmailData = {
      From: input.From,
      ReplyTo: input.ReplyTo,
      To: input.To,
      TemplateId: templateMap.MissingTranslation['da-DK'],
      TemplateModel: {
        url: input.translation.url,
        time:  input.translation.time,
        error:  input.translation.error,
        configuration: JSON.stringify( input.translation.configuration),
      },
    }
    return sendTemplatedEmail(message)
  }