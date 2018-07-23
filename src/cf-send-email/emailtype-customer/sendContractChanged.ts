import { templateMap, IInputChangedEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract changed emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractChanged (event: any, callback: any){
  sendContractChanged(event.data)
  callback();
};

function sendContractChanged(input: IInputChangedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractChanged[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}