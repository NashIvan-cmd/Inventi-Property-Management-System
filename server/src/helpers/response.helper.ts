import { Request, Response, NextFunction } from "express";

// T is a placeholder for the type of data being sent in the response
export const responseHelper = <T extends object> (
    res: Response,
    statusCode: number,
    payload: T, // Payload is of type T which extends object | object can be anything
    options: {
        message?: string;
        keyName?: string; // Optional custom name for the payload in response
    }
) => {
    if (res.headersSent) {
        console.warn("Headers already sent, cannot send response");
        return;
    }

    const key = options.keyName || "payload";

    // Can easily add Global fields in the response
    const responseBody = {
        // Use spread oprerator to spread
        ...(options.message && { message: options.message}),
        [key]: payload, // [] allows for dynamic key names
    }

    // Gives a central place to format all responses
    res.status(statusCode).json(responseBody);
}