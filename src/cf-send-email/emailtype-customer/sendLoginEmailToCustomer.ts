import { templateMap, IInputSendLoginEmail } from '../postmarkTypes'
import { sendTemplatedEmailToCustomer } from './shared-customer-email-senders'
/**
 * Function that sends login url to the customer
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendLoginEmailToCustomer (event: any, callback: any){
  sendLoginEmailToCustomer(event.data)
  callback();
};

function sendLoginEmailToCustomer(input: IInputSendLoginEmail): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.LoginEmailToCustomer[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}