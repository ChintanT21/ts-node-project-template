export class BaseError extends Error {
  public code: string;
  public msg: string;
  public type?: string;

  constructor(code: string, message: string, type?: string) {
    super(message);
    this.code = code;
    this.msg = message;
    this.type = type;
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export class BadRequestException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestException';
  }
}

export class BusinessRuleException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BusinessRuleException';
  }
}

export class NotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundException';
  }
}

export class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedException';
  }
}

export class UnhandledException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnhandledException';
  }
}

export class ForbiddenException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ForbiddenException';
  }
}
