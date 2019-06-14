/**
   * Demo.ts
   * I don't know TS, but I wanted to include a demo example
   * Code: https://github.com/swissmanu/pattern-matching-with-typescript
*/

interface PaymentPattern<T> {
    CreditCard: (card: CreditCardPayment) => T;
    Cash: (cash: CashPayment) => T;
  }
  
  interface PaymentMatcher {
    match<T>(p: PaymentPattern<T>): T;
  }
  
  export abstract class Payment implements PaymentMatcher {
    constructor(public readonly amount: number) {}
    abstract match<T>(p: PaymentPattern<T>): T;
  }
  
  export class CreditCardPayment extends Payment {
    constructor(amount: number, public readonly fee: number) {
      super(amount);
    }
  
    match<T>(p: PaymentPattern<T>): T {
      return p.CreditCard(this);
    }
  }
  
  export class CashPayment extends Payment {
    constructor(amount: number, public readonly discount: number) {
      super(amount);
    }
  
    match<T>(p: PaymentPattern<T>): T {
      return p.Cash(this);
    }
  }
  
  export function calculatePaymentAmount(payment: Payment) {
    return payment.match({
      CreditCard: card => card.amount + card.amount * card.fee,
      Cash: cash => cash.amount - cash.discount
    });
  }

  export type Argument = string | boolean | number;

interface ArgumentPattern<T> {
  String: (s: string) => T;
  Boolean: (b: boolean) => T;
  Number: (n: number) => T;
}

export function matchArgument<T>(p: ArgumentPattern<T>): (a: Argument) => T {
  return (a: Argument): T => {
    if (typeof a === 'string') {
      return p.String(a);
    } else if (typeof a === 'boolean') {
      return p.Boolean(a);
    } else if (typeof a === 'number') {
      return p.Number(a);
    }

    throw new Error(`matchArgument: Could not match type ${typeof a}`);
  };
}