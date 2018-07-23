import * as postmark from 'postmark'
import { getRuntimeConfig } from './../gcloud-runtime-config'


export interface PostmarkMessageInterface {
  ReplyTo: string
  From: string
  To: string
  TemplateId: string
  TrackOpens?: boolean
  TrackLinks?: 'None' | 'HtmlAndText' | 'HtmlOnly' | 'TextOnly'
}

//const adminClient = new postmark.AdminClient(Config.postmark.accountKey, postmark.defaults)

export async function sendTemplatedEmail(message: PostmarkMessageInterface): Promise<object> {
  const googleRuntimeConfig = await getRuntimeConfig('cf-send-email',['postmarkToken','postmarkAccountKey','postmarkMailAddressOverride'])
  const Config = {
    dryRun: false,
    postmark: {
        token: googleRuntimeConfig["postmarkToken"] as string,
        accountKey: googleRuntimeConfig["postmarkAccountKey"] as string,
        mailAddressOverride: googleRuntimeConfig["postmarkMailAddressOverride"] as string,
    }
  }
  const client = new postmark.Client(Config.postmark.token, postmark.defaults)

  // DRYRUN means no e-mails are sent. If no mailAddressOverride exists, we don't send either
  if (Config.dryRun || Config.postmark.mailAddressOverride === undefined) {
    console.log('(DRYRUN) Would have sent email to ' + message.To + ' from ' + message.From)
    return Promise.resolve({})
  } else {
    // We look for mailAddressOverride to send e-mails to instead
    // We only send real mails if mailAddressOverride is empty (should only be empty on prod)
    if (Config.postmark.mailAddressOverride !== '') {
      // We don't track links and opens on non-prod environments
      // Link and open tracking is default in Postmark, hence we don't need to set it for prod
      message.TrackOpens = false
      message.TrackLinks = 'None'
      message.To = Config.postmark.mailAddressOverride
      console.log(`Overriding to e-mail address with: ${Config.postmark.mailAddressOverride}`)
    }
    console.log(
      `Sending email to ${message.To} from ${message.From}, reply-to ${message.ReplyTo}, template id: ${
        message.TemplateId
      }`,
    )
  }
  return new Promise<object>((resolve, reject) => {
    client.sendEmailWithTemplate(message, (error: any, result: any) => {
      if (!result) {
        result = {}
      }
      if (error || parseInt(result.ErrorCode, 10) !== 0) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

