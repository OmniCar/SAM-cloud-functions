import { templateMap, IInputActivatedDealerEmailData } from '../postmarkTypes'
import { sendTemplatedEmailToDealer } from './shared-dealer-email-senders'
/**
 * Specialized function that sends contract activated emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractActivatedToDealerRecipients (event: any, callback: any){
  sendContractActivatedToDealerRecipients(event.data)
  callback();
};

function sendContractActivatedToDealerRecipients(input: IInputActivatedDealerEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedEmailToDealer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractActivatedToDealerRecipients[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}