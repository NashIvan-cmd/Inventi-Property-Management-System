import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BadRequestError } from "../middlewares/error.middleware";
import { responseHelper } from "../helpers/response.helper";
import { oneTimePasswordChange, verifyOneTimePasswordLink } from "@/services/account.service";
import { send } from "process";
import { sendActivationEmail } from "@/services/email.service";

const prisma = new PrismaClient();

// Superadmin gets an account from an Inventi/FIT employee
// Superadmin creates Property Managers
export const createAdminAccount = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, role } = req.body;
    try {

        if (!name)throw new BadRequestError({ code: 404, message: "Admin name is required" });
        if (!email) throw new BadRequestError({ code: 404, message: "Admin email is required" });
        if (!role) throw new BadRequestError({ code: 404, message: "Admin role is required" }); 
        
        const admin = await prisma.Admins.create({
            data: {
                name,
                email,
                role
            }
        })

        if (!admin) throw new Error("Failed to create company account");

        const token = await oneTimePasswordChange(admin.id); // creates redis token for password change
        await sendActivationEmail(email, token);

        return responseHelper(res, 201, admin, { message: "Company account created successfully", keyName: "admin" })
    } catch (error) {
        next(error);
    }
}

/*
Department Roles
  ELECTRICAL
  PLUMBING
  HOUSEKEEPING
  SECURITY
  FINANCE
  IT 
*/
export const createDepartmentHeadAccount = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, department } = req.body;
    try {
        if (!email) throw new BadRequestError({ code: 404, message: "Department head email is required" });
        if (!department) throw new BadRequestError({ code: 404, message: "Department is required" });
        
        const departmentHead = await prisma.DepartmentHead.create({
            data: {
                name,
                email,
                department
            }
        });

        responseHelper(res, 201, departmentHead, { message: "Department head account created successfully", keyName: "departmentHead" })
    } catch (error) {
        next(error);
    }
}

/*
Staff Roles
    PLUMBER
    ELECTRICIAN
    CLEANER
    SECURITY_GUARD
    IT_TECHNICIAN
    GENERAL_MAINTENANCE
*/
export const createStaffAccount = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, role } = req.body;
    try {
        if (!name) throw new BadRequestError({ code: 404, message: "Staff name is required" });
        if (!role) throw new BadRequestError({ code: 404, message: "Staff role is required" });
        
        const staff = await prisma.MaintenanceStaff.create({
            data: {
                name,
                email,
                role
            }
        })
    } catch (error) {
        next(error);
    }
}

export const employeeLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    try {
        if (!username) throw new BadRequestError({ code: 404, message: "Username is required" });
        if (!password) throw new BadRequestError({ code: 404, message: "Password is required" });

        const trimmedUsername = username.trim();
        
    } catch (error) {
        next(error);
    }
}

export const changeEmployeePassword = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        if (!token) throw new BadRequestError({ code: 404, message: "Token is required" });
        if (!newPassword) throw new BadRequestError({ code: 404, message: "New password is required" });

        const isValidToken = await verifyOneTimePasswordLink(token);
        if (!isValidToken) {
            return responseHelper(res, 403, {}, { message: "Access Denied. The link is invalid or has expired." });
        }

        // Proceed with password change logic
        let dynamicTableName = ''

                
        responseHelper(res, 200, {}, { message: "Password changed successfully" });
    } catch (error) {
        next(error);
    }
}

// Regenerate OTP link for password change
export const regeneratePasswordChangeLink = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    try {
        if (!email) throw new BadRequestError({ code: 404, message: "Email is required" });
    } catch (error) {
        next(error);
    }
}

// Tenants Account given by Property managers