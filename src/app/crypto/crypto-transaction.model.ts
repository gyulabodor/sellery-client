import { CurrencyEnum } from "../shared/enums/currency.enum";
import { CryptoCurrency } from "./crypto-currency.model";

export interface CryptoTransaction{
  resultCurrency: CurrencyEnum,
  fromCrypto: CryptoCurrency,
  toCrypto: CryptoCurrency,
  fromAmountOfCrypto: number,
  resultAmount: number
}
