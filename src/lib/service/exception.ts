export class Exception extends Error {
  name = this.constructor.name

  constructor(public message: string, cause: any = undefined) {
    super(message)
    this.cause = cause
  }
}
