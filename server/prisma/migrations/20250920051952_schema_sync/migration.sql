/*
  Warnings:

  - You are about to drop the column `companyId` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the column `superAdminId` on the `properties` table. All the data in the column will be lost.
  - You are about to drop the `companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `super_admins` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adminId` to the `properties` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AdminRole" AS ENUM ('SUPER_ADMIN', 'PROPERTY_MANAGER');

-- DropForeignKey
ALTER TABLE "public"."properties" DROP CONSTRAINT "properties_companyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."properties" DROP CONSTRAINT "properties_superAdminId_fkey";

-- DropForeignKey
ALTER TABLE "public"."super_admins" DROP CONSTRAINT "super_admins_companyId_fkey";

-- AlterTable
ALTER TABLE "public"."department_heads" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."properties" DROP COLUMN "companyId",
DROP COLUMN "superAdminId",
ADD COLUMN     "adminId" TEXT NOT NULL,
ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."property_managers" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."tenants" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "public"."units" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "public"."companies";

-- DropTable
DROP TABLE "public"."super_admins";

-- CreateTable
CREATE TABLE "public"."admins" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "email" TEXT,
    "role" "public"."AdminRole" NOT NULL DEFAULT 'PROPERTY_MANAGER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "public"."admins"("username");

-- AddForeignKey
ALTER TABLE "public"."properties" ADD CONSTRAINT "properties_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
