import Scanner from '../background/Scanner'; 

type Methods = { [key in keyof Scanner & string]: Scanner[key] extends CallableFunction ? key : never };

type CallableFunctions = Methods[keyof Methods];

type PossibleMessages = {
  [key in CallableFunctions]: Parameters<Scanner[key]>[0] extends {
    request: { data: infer P };
  }
    ? {
        action: key;
        data: P;
      }
    : { action: key };
};

export type AllowedType = PossibleMessages[keyof PossibleMessages];