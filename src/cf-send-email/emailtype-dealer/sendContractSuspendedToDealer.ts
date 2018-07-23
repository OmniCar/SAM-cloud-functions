import { templateMap, IInputSuspendedDealerEmailData } from '../postmarkTypes'
import { sendTemplatedEmailToDealer } from './shared-dealer-email-senders'
/**
 * Specialized function that sends contract activated emails
 * @param From
 * @param ReplyTo
 * @param To
 * @param TemplateModel
 * @returns {Promise<any>}
 */
export function pubSubSendContractSuspendedToDealer (event: any, callback: any){
  sendContractSuspendedToDealer(event.data)
  callback();
};

function sendContractSuspendedToDealer(input: IInputSuspendedDealerEmailData): Promise<any> {
  input.localeIsoName ? undefined : input.localeIsoName = 'da-DK'

  return sendTemplatedEmailToDealer({
    From: input.From,
    ReplyTo: input.ReplyTo,
    To: input.To,
    TemplateId: templateMap.ContractSuspendedToDealer[input.localeIsoName],
    TemplateModel: input.TemplateModel,
  })
}