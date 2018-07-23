import { templateMap, IInputActivatedEmailData, IPostmarkAttachment } from '../postmarkTypes'
import { sendTemplatedContractEmailToCustomer } from './shared-customer-email-senders'
/**
 * Specialized function that sends contract activated emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractActivatedToCustomer (event: any, callback: any){
  sendContractActivatedToCustomer(event.data)
  callback();
};

function sendContractActivatedToCustomer(input: IInputActivatedEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  const attachments: IPostmarkAttachment[] = []
  if (input.files) {
    input.files.forEach(file => {
      attachments.push(file)
    })
  }
  return sendTemplatedContractEmailToCustomer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractActivatedToCustomer[input.localeIsoName], 
    TemplateModel: input.TemplateModel,
    Attachments: attachments
  })
}