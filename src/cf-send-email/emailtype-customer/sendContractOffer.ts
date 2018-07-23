import { templateMap, IInputOfferEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract Offers
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractOffer (event: any, callback: any){
  sendContractOffer(event.data)
  callback();
};

function sendContractOffer(input: IInputOfferEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractOffer[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}