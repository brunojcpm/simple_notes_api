export class UnexpectedError extends Error {
  readonly errorCode: string;

  constructor() {
    super();
    this.message = 'Internal Server Error';
    this.errorCode = 'UNEXPECTED_ERROR';
  }
}
