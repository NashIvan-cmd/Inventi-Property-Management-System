import { redisClient } from "@/configs/redis.config";
import { PrismaClient } from "@/generated/prisma"
import { BadRequestError } from "@/middlewares/error.middleware";
import crypto from "crypto";

const prisma = new PrismaClient();

export const findAdmin = async (username: string) => {
    try {
        if (!username) throw new BadRequestError({ code: 404, message: "Username or Email missing "});
        
        const admin = await prisma.admin.findFirst({
            where:{
                OR: [
                    { username: username },
                    { email: username }
                ]
            }
        });
        return admin;
    } catch (error) {
        throw error;
    }   
}

export const findDepartmentHead = async (username: string) => {
    try {
        if (!username) throw new BadRequestError({ code: 404, message: "Username or Email missing "});

        const departmentHead = await prisma.departmentHead.findFirst({
            where:{
                OR: [
                    { username: username },
                    { email: username }
                ]
            }
        });
        
        return departmentHead;
    } catch (error) {
        throw error;
    }
}

export const findStaff = async (username: string) => {
    try {
        if (!username) throw new BadRequestError({ code: 404, message: "Username or Email missing "});

        const staff = await prisma.maintenanceStaff.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: username }
                ]
            }
        });

        return staff;
    } catch (error) {
        throw error;
    }
}


// =================== Account Utils ====================
export const generatePassword = (length: number = 8): string => {
    return crypto.randomBytes(length)
    .toString("base64url")  // url-safe encoding
    .slice(0, length);
}

export const oneTimePasswordChange = async (id: string): Promise<string> => {
    try {
        const token = crypto.randomBytes(16).toString("hex");
        const key = `otp:${token}`;

        if (!redisClient) throw new Error("Redis client not initialized");

        await redisClient.set(key, id, { ex: 86400 }) // 24 hours expiration

        return token;
    } catch (error) {
        throw error;
    }   
}

export const verifyOneTimePasswordLink = async (token: string): Promise<boolean> => {
    try {
        const key = `otp:${token}`;
        if (!redisClient) throw new Error("Redis client not initialized");

        const result = await redisClient.get(key);
        
        if (result) {
            return result;
        }
        return false;
    } catch (error) {
        throw error;
    }
}