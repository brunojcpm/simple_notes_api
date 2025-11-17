import type { ZodError } from 'zod';

export type ValidationErrors = Array<{
  key: string;
  errors: string[];
}>;

export function mapZodErrorToValidationErrors(error: ZodError): Array<{
  key: string;
  errors: string[];
}> {
  return error.issues.map((issue) => ({
    key: issue.path.join('.'),
    errors: [issue.message],
  }));
}

export function parseJSONWithFallback<Result>(
  json: string,
  fallback: Result,
): Result {
  try {
    if (!json || json === 'undefined') {
      return fallback;
    }

    return JSON.parse(json);
  } catch (_error) {
    return fallback;
  }
}

export function getObjectProperty(
  object: Record<string, any>,
  propertyPath: string,
) {
  return propertyPath
    .split('.')
    .filter((property) => property)
    .reduce((accumulator, property) => accumulator?.[property], object);
}
