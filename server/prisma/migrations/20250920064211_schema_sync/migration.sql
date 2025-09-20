/*
  Warnings:

  - You are about to drop the column `propertyManagerId` on the `budget_requests` table. All the data in the column will be lost.
  - You are about to drop the column `managerId` on the `department_heads` table. All the data in the column will be lost.
  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_managers` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `department_heads` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `maintenance_staff` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adminId` to the `department_heads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `department_heads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `maintenance_staff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `maintenance_staff` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `maintenance_staff` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."budget_requests" DROP CONSTRAINT "budget_requests_propertyManagerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."department_heads" DROP CONSTRAINT "department_heads_managerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."maintenance_schedules" DROP CONSTRAINT "maintenance_schedules_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."properties" DROP CONSTRAINT "properties_adminId_fkey";

-- DropForeignKey
ALTER TABLE "public"."property_managers" DROP CONSTRAINT "property_managers_propertyId_fkey";

-- AlterTable
ALTER TABLE "public"."budget_requests" DROP COLUMN "propertyManagerId",
ADD COLUMN     "adminId" TEXT;

-- AlterTable
ALTER TABLE "public"."department_heads" DROP COLUMN "managerId",
ADD COLUMN     "adminId" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."maintenance_staff" ADD COLUMN     "disabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- DropTable
DROP TABLE "public"."admins";

-- DropTable
DROP TABLE "public"."property_managers";

-- CreateTable
CREATE TABLE "public"."admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "email" TEXT,
    "role" "public"."AdminRole" NOT NULL DEFAULT 'PROPERTY_MANAGER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "public"."admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "department_heads_username_key" ON "public"."department_heads"("username");

-- CreateIndex
CREATE UNIQUE INDEX "maintenance_staff_username_key" ON "public"."maintenance_staff"("username");

-- AddForeignKey
ALTER TABLE "public"."properties" ADD CONSTRAINT "properties_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."department_heads" ADD CONSTRAINT "department_heads_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."budget_requests" ADD CONSTRAINT "budget_requests_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
