import { templateMap, IInputResetPasswordEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends reset password mails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendResetPassword (event: any, callback: any){
  sendResetPassword(event.data)
  callback();
};

function sendResetPassword(input: IInputResetPasswordEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ResetPassword[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}