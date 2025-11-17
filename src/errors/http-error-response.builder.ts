import { ZodError } from 'zod';
import { InvalidCredentialsError } from '@/errors/invalid-credentials.error';
import { InvalidParametersError } from '@/errors/invalid-parameters-error';
import { UnexpectedError } from '@/errors/unexpected.error';
import { mapZodErrorToValidationErrors } from '@/helpers/data-manipulation';

export class HttpErrorResponseBuilder {
  constructor(private readonly error: unknown) {}

  static withError(error: unknown): HttpErrorResponseBuilder {
    return new HttpErrorResponseBuilder(error);
  }

  build(): {
    statusCode: number;
    body: { message: string; error_code?: string; extra?: unknown };
  } {
    switch (true) {
      case this.error instanceof InvalidCredentialsError:
        return {
          statusCode: 401,
          body: {
            message: this.error.message,
            error_code: this.error.errorCode,
          },
        };

      case this.error instanceof ZodError: {
        const invalidParamsError = new InvalidParametersError(
          mapZodErrorToValidationErrors(this.error),
        );
        return {
          statusCode: 422,
          body: {
            message: invalidParamsError.message,
            error_code: invalidParamsError.errorCode,
            extra: {
              validation_errors: invalidParamsError.validationErrors,
            },
          },
        };
      }

      default: {
        const unexpectedError = new UnexpectedError();

        return {
          statusCode: 500,
          body: {
            message: unexpectedError.message,
            error_code: unexpectedError.errorCode,
          },
        };
      }
    }
  }
}
