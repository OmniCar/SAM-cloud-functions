import { templateMap, IInputReActivatedEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract Offers
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractReActivated (event: any, callback: any){
  sendContractReActivated(event.data)
  callback();
};

function sendContractReActivated(input: IInputReActivatedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractReActivated[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}