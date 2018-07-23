import { sendTemplatedEmail } from '../postmarkPublisher'
import { PostmarkMessageDealerInterface } from '../postmarkTypes'
/**
 * Generic email function to send templated emails to dealers using a single message Object governed by an interface
 * @param message - compiled message to send
 * @returns {Promise<Object>}
 */
export function sendTemplatedEmailToDealer(message: PostmarkMessageDealerInterface): Promise<object> {
    return sendTemplatedEmail(message)
}