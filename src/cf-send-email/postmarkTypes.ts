import { CurrencyAbbreviation, IsoLocale } from './enum/Locale'

/**
 * Interfaces for the specific emails
 *
 * TODO: These interfaces duplicate those from @types/postmark - for some reason,
 * they are not discovered by the TS type loader.
 */
export interface IPostmarkAttachment {
  Content: string
  Name: string
  ContentType: string
}

// tslint:disable-next-line:interface-name
export interface PostmarkMessageInterface {
  ReplyTo: string
  From: string
  To: string
  TemplateId: string
  TrackOpens?: boolean
  TrackLinks?: 'None' | 'HtmlAndText' | 'HtmlOnly' | 'TextOnly'
}

// tslint:disable-next-line:interface-name
export interface PostmarkMessageContractInterface extends PostmarkMessageInterface {
  TemplateModel: IEmailContractData | IResetPasswordEmailData
  Attachments?: IPostmarkAttachment[]
}

// tslint:disable-next-line:interface-name
export interface PostmarkMessageDealerInterface extends PostmarkMessageInterface {
  TemplateModel: IEmailDealerData
}

// tslint:disable-next-line:interface-name
export interface PostmarkMessageCustomerInterface extends PostmarkMessageInterface {
  TemplateModel: IEmailCustomerData
}


/**
 * Interface that defines the generic data needed to send emails to customers
 */
export interface IEmailContractData {
  contract_id: string
  contract_template_name: string
  contract_template_logo_url: string
  activation_url?: string
  tos_url?: string
  contract_preview_url?: string
  contract_change_reason?: string
  contract_change_consequence?: string
  contract_start_date?: string
  contract_duration?: string
  contract_type_name?: string
  contract_mileage?: string
  contract_options?: string
  customer_address?: string
  contract_end_date?: string
  contract_reapprove?: {
    description: string
    url: string
  }
  currency: CurrencyAbbreviation
  reset_password_url?: string
  seller_name?: string
  provider_name: string
  provider_email: string
  provider_phone: string
  provider_address: string
  provider_address2?: string
  provider_zipcode: string
  provider_city: string
  provider_logo_url: string
  customer_name: string
  customer_login_url?: string
  customer_reset_password_url?: string
  customer_username?: string
  vehicle_brand?: string
  vehicle_model?: string
  vehicle_regnr: string
  suspension_reason?: string
  suspension_warning_days?: string
}

/**
 * Interface that defines the generic data needed to send emails to dealers
 */
export interface IEmailDealerData {
  contract_id: string
  recipient_name: string
  contract_template_name: string
  contract_template_logo_url: string
  contract_start_date?: string
  contract_duration?: string
  contract_type_name?: string
  contract_mileage?: string
  contract_options?: object[]
  customer_address?: string
  contract_end_date?: string
  currency: CurrencyAbbreviation
  seller_name?: string
  customer_name: string
  vehicle_brand?: string
  vehicle_model?: string
  vehicle_regnr: string
}
/**
 * Interface that defines the generic data needed to send emails to dealers
 */
export interface IEmailCustomerData {
  customer_id?: string
  customer_address?: string
  seller_name?: string
  customer_name: string
  provider_name?: string
  provider_email?: string
  provider_phone?: string
  provider_address?: string
  provider_address2?: string
  provider_zipcode?: string
  provider_city?: string
  provider_logo_url: string
}

export interface IOfferEmailData extends IEmailContractData {
  activation_url: string
  contract_preview_url: string
  tos_url: string
  vehicle_brand: string
  vehicle_model: string
}

export interface IOfferExtendedEmailData extends IEmailContractData {
  activation_url: string
  contract_preview_url: string
  tos_url: string
  vehicle_brand: string
  vehicle_model: string
  vehicle_regnr: string
  activation_date: string
  duration: string | number
  mileage: string | number
  price: string | number
  new_contract_template_name: string
  new_price: string | number
  new_duration: string | number
  new_mileage: string | number
  price_diff: string
}

export interface IActivatedEmailData extends IEmailContractData {
  vehicle_brand: string
  vehicle_model: string
}

export interface IActivatedDealerEmailData extends IEmailDealerData {
  vehicle_brand: string
  vehicle_model: string
}

export interface ISuspendedEmailData extends IEmailContractData {
  vehicle_brand: string
  vehicle_model: string
  customer_login_url: string
  suspension_reason: string
}

export interface ISuspendedDealerEmailData extends IEmailDealerData {
  provider_name: string
  customer_email: string
  customer_phone: string
}

export interface ISendLoginEmail extends IEmailCustomerData {
  customer_login_url: string
}

export interface ITerminatedEmailData extends IEmailContractData {
  vehicle_brand: string
  vehicle_model: string
}

export interface ISettledEmailData extends IEmailContractData {
  vehicle_brand: string
  vehicle_model: string
}

export interface IReActivatedEmailData extends IEmailContractData {
  vehicle_brand: string
  vehicle_model: string
}

export interface IChangedEmailData extends IOfferExtendedEmailData {
  contract_change_reason: string
  contract_change_consequence: string
}

export interface IPaymentFailedEmailData extends IEmailContractData {
  suspension_warning_days: string
}

export interface IResetPasswordEmailData {
  customer_name: string
  provider_name: string
  provider_email: string
  provider_phone: string
  provider_address: string
  provider_address2?: string
  provider_zipcode: string
  provider_city: string
  provider_logo_url: string
  reset_password_url: string
}

export interface IMissingTranslationEmailData extends PostmarkMessageInterface {
  TemplateModel: {
    url: string
    time: string
    error: string
    configuration: string
  }
}

export type MailType =
  | 'OfferReminder'
  | 'ContractOffer'
  | 'ContractActivatedToCustomer'
  | 'ContractActivatedToDealerRecipients'
  | 'LoginEmailToCustomer'
  | 'ContractActivatedAfterExtended'
  | 'ContractSuspended'
  | 'ContractSuspendedToDealer'
  | 'ContractReActivated'
  | 'ContractTerminated'
  | 'ContractSettled'
  | 'ContractChanged'
  | 'PaymentFailed'
  | 'ResetPassword'
  | 'MissingTranslation'

export const templateMap: { [T in MailType]: { [L in IsoLocale]: string } } = {
  OfferReminder: {
    'da-DK': '4628364',
    'sv-SE': '6551162',
    'en-GB': '',
  },
  ContractOffer: {
    'da-DK': '4581861',
    'sv-SE': '6462346',
    'en-GB': '',
  },
  ContractActivatedToCustomer: {
    'da-DK': '1404961',
    'sv-SE': '6462461',
    'en-GB': '',
  },
  ContractActivatedToDealerRecipients: {
    'da-DK': '2941004',
    'sv-SE': '6462462',
    'en-GB': '',
  },
  LoginEmailToCustomer: {
    'da-DK': '4637701',
    'sv-SE': '6462464',
    'en-GB': '',
  },
  ContractActivatedAfterExtended: {
    'da-DK': '4638084',
    'sv-SE': '6462345',
    'en-GB': '',
  },
  ContractSuspended: {
    'da-DK': '4628462',
    'sv-SE': '6551161',
    'en-GB': '',
  },
  ContractSuspendedToDealer: {
    'da-DK': '5725501',
    'sv-SE': '6462343',
    'en-GB': '',
  },
  ContractReActivated: {
    'da-DK': '4628201',
    'sv-SE': '6462344',
    'en-GB': '',
  },
  ContractTerminated: {
    'da-DK': '4637162',
    'sv-SE': '6551181',
    'en-GB': '',
  },
  ContractSettled: {
    'da-DK': '1906841',
    'sv-SE': '6462463',
    'en-GB': '',
  },
  ContractChanged: {
    'da-DK': '4638084',
    'sv-SE': '6462345',
    'en-GB': '',
  },
  PaymentFailed: {
    'da-DK': '4638081',
    'sv-SE': '6551163',
    'en-GB': '',
  },
  ResetPassword: {
    'da-DK': '4638082',
    'sv-SE': '6551182',
    'en-GB': '',
  },
  MissingTranslation: {
    'da-DK': '6694504',
    'sv-SE': '6694504',
    'en-GB': '',
  },
}

export interface IMissingTranslation {
  url: string
  time: string
  error: string
  configuration: object
}

export interface IEmailInputParameters {
  From: string,
  To: string,
  ReplyTo: string,
  TemplateModel: IOfferExtendedEmailData | IActivatedEmailData | IChangedEmailData | IOfferEmailData | IReActivatedEmailData | ISettledEmailData | ISuspendedEmailData | ITerminatedEmailData | ISendLoginEmail | IPaymentFailedEmailData | IResetPasswordEmailData | IActivatedDealerEmailData | ISuspendedDealerEmailData,
  files?: IPostmarkAttachment[],
  localeIsoName?: IsoLocale,
}

export interface IInputOfferExtendedEmailData extends IEmailInputParameters {
  TemplateModel: IOfferExtendedEmailData
}
export interface IInputActivatedEmailData extends IEmailInputParameters {
  TemplateModel: IActivatedEmailData
}
export interface IInputChangedEmailData extends IEmailInputParameters {
  TemplateModel: IChangedEmailData
}
export interface IInputOfferEmailData extends IEmailInputParameters {
  TemplateModel: IOfferEmailData
}
export interface IInputReActivatedEmailData extends IEmailInputParameters {
  TemplateModel: IReActivatedEmailData
}
export interface IInputSettledEmailData extends IEmailInputParameters {
  TemplateModel: ISettledEmailData
}
export interface IInputSuspendedEmailData extends IEmailInputParameters {
  TemplateModel: ISuspendedEmailData
}
export interface IInputTerminatedEmailData extends IEmailInputParameters {
  TemplateModel: ITerminatedEmailData
}
export interface IInputSendLoginEmail extends IEmailInputParameters {
  TemplateModel: ISendLoginEmail
}
export interface IInputPaymentFailedEmailData extends IEmailInputParameters {
  TemplateModel: IPaymentFailedEmailData
}
export interface IInputResetPasswordEmailData extends IEmailInputParameters {
  TemplateModel: IResetPasswordEmailData
}
export interface IInputActivatedDealerEmailData extends IEmailInputParameters {
  TemplateModel: IActivatedDealerEmailData
}
export interface IInputSuspendedDealerEmailData extends IEmailInputParameters {
  TemplateModel: ISuspendedDealerEmailData
}
export interface IInputMissingTranslationEmailData {
  From: string,
  To: string,
  ReplyTo: string,
  translation: IMissingTranslation
}

