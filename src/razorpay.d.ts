declare class Razorpay {
  constructor(options: any);
  on(event: string, callback: (response: any) => void): void;
  open(): void;
}

interface Window {
  Razorpay: typeof Razorpay;
}
