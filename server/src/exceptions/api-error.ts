export class ApiError extends Error {
	status: any;
	erros: any;
	constructor(status: any, message: string, errors: any = []) {
		super(message);
		this.status = status;
		this.erros = errors;
	}
	static InternalServerError() {
		return new ApiError(500, "Internal Server Error");
	}
}
