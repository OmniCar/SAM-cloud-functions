// @TODO Move this file to locale/localeTypes.ts.
// inspiration https://gist.github.com/jacobbubu/1836273
export enum Locale {
    da_DK = 1,
    sv_SE,
    nb_NO,
    nn_NO,
    de_DE,
  }
  
  export type IsoLocale = 'da-DK' | 'sv-SE' | 'en-GB'
  
  export type IsoCountry =
    | 'DK'
    | 'GB'
    | 'CA'
    | 'FR'
    | 'SE'
    | 'ES'
    | 'NO'
    | 'DE'
    | 'IS'
    | 'GR'
    | 'EG'
    | 'CN'
    | 'CL'
    | 'JP'
    | 'US'
    | 'AU'
  
  export type Currency = 'DKK' | 'SEK'
  
  export type CurrencyAbbreviation = 'kr.'
  
  const currencyMap: { [C in Currency]: CurrencyAbbreviation } = {
    DKK: 'kr.',
    SEK: 'kr.',
  }
  
  export const currencyAbbreviation = (currency: Currency): CurrencyAbbreviation => currencyMap[currency]
  
  export type VatPct = 0.25
  
  export type VatFactor = 1.25
  
  export type TaxVatPercent = 25