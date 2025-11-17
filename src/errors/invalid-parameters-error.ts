import type { ValidationErrors } from '@/helpers/data-manipulation';

export class InvalidParametersError extends Error {
  readonly errorCode: string;

  constructor(readonly validationErrors: ValidationErrors) {
    super();
    this.message = 'The params provided are invalid';
    this.errorCode = 'INVALID_PARAMETERS';
    this.validationErrors = validationErrors;
  }
}
