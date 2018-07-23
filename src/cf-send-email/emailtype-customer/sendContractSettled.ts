import { templateMap, IInputSettledEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract Offers
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractSettled (event: any, callback: any){
  sendContractSettled(event.data)
  callback();
};

function sendContractSettled(input: IInputSettledEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractSettled[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}
