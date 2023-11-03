import { AllowedType, SenderInformation } from './methodsKeys';

export type Fetch_Data = {
    request: AllowedType,
    sender: SenderInformation;
    sendResponse: any;
}

export interface ParsedTransaction {
    accountFrom: string;
    accountTo: string;
    transferredValue: number,
    hashValue: string,
    resultValue: string,
    confirmedValue: string,
    timeRange: Date,
    blockValue: number,
    feeLimit: number,
    costValues: {
      netFee: number,
      energyTotal: number,
    },
    transactionSymbol: string,
    transferredStatus: string,
    confirmedStatus: string,
}

export interface TransactionHash {
  action: string;
  data: {
    hash: string;
  }
}