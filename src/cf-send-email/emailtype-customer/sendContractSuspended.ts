import { templateMap, IInputSuspendedEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract suspended emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractSuspended (event: any, callback: any){
  sendContractSuspended(event.data)
  callback();
};

function sendContractSuspended(input: IInputSuspendedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractSuspended[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}