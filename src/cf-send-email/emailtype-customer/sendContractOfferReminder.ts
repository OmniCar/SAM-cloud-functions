import { templateMap, IInputOfferEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract Offer reminders
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractOfferReminder (event: any, callback: any){
  sendContractOfferReminder(event.data)
  callback();
};

function sendContractOfferReminder(input: IInputOfferEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.OfferReminder[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}