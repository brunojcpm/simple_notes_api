export class InvalidCredentialsError extends Error {
  readonly errorCode: string = 'INVALID_CREDENTIALS';

  constructor() {
    super();
    this.message = 'Credentials provided are invalid';
  }
}
