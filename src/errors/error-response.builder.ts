import { ZodError } from 'zod';
import { InvalidParametersError } from '@/errors/invalid-parameters-error';
import { UnexpectedError } from '@/errors/unexpected.error';
import { mapZodErrorToValidationErrors } from '@/helpers/data-manipulation';

export class ErrorResponseBuilder {
  constructor(private readonly error: unknown) {}

  static withError(error: unknown): ErrorResponseBuilder {
    return new ErrorResponseBuilder(error);
  }

  build(): { message: string; error_code?: string; extra?: unknown } {
    switch (true) {
      case this.error instanceof UnexpectedError:
        return {
          message: this.error.message,
          error_code: this.error.errorCode,
        };

      case this.error instanceof InvalidParametersError:
        return {
          message: this.error.message,
          error_code: this.error.errorCode,
          extra: {
            validation_errors: this.error.validationErrors,
          },
        };

      case this.error instanceof ZodError: {
        const invalidParamsError = new InvalidParametersError(
          mapZodErrorToValidationErrors(this.error),
        );
        return {
          message: invalidParamsError.message,
          error_code: invalidParamsError.errorCode,
          extra: {
            validation_errors: invalidParamsError.validationErrors,
          },
        };
      }

      default: {
        const unexpectedError = new UnexpectedError();

        return {
          message: unexpectedError.message,
          error_code: unexpectedError.errorCode,
        };
      }
    }
  }
}
