import { templateMap, IInputTerminatedEmailData } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract suspended emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractTerminated (event: any, callback: any){
  sendContractTerminated(event.data)
  callback();
};

function sendContractTerminated(input: IInputTerminatedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractTerminated[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}