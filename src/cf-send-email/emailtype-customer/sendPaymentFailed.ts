import { templateMap, IInputPaymentFailedEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract activated emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendPaymentFailed (event: any, callback: any){
  sendPaymentFailed(event.data)
  callback();
};

function sendPaymentFailed(input: IInputPaymentFailedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.PaymentFailed[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}