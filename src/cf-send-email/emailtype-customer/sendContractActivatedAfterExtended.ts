import { templateMap, IInputOfferExtendedEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract activated emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<Object>}
 */
export function pubSubSendContractActivatedAfterExtended (event: any, callback: any){
  sendContractActivatedAfterExtended(event.data)
  callback();
};

function sendContractActivatedAfterExtended(input: IInputOfferExtendedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractActivatedAfterExtended[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}
