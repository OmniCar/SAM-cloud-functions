import { sendTemplatedEmail } from '../postmarkPublisher'
import { PostmarkMessageContractInterface, IPostmarkAttachment, PostmarkMessageCustomerInterface } from '../postmarkTypes'

export function sendTemplatedContractEmailToCustomer(
    message: PostmarkMessageContractInterface,
    attachments?: IPostmarkAttachment[],
): Promise<object> {
// Add attachments, if any.
if (attachments && attachments.length) {
    message.Attachments = attachments
}
    return sendTemplatedEmail(message)
}
/**
 * Generic email function to send templated emails to customers using a single message Object governed by an interface
 * @param message - compiled message to send
 * @returns {Promise<Object>}
 */
export function sendTemplatedEmailToCustomer(message: PostmarkMessageCustomerInterface): Promise<object> {
    return sendTemplatedEmail(message)
}