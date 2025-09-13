-- CreateEnum
CREATE TYPE "public"."Department" AS ENUM ('ELECTRICAL', 'PLUMBING', 'HOUSEKEEPING', 'SECURITY', 'FINANCE', 'IT');

-- CreateEnum
CREATE TYPE "public"."UserType" AS ENUM ('TENANT', 'DEPARTMENT_HEAD', 'PROPERTY_MANAGER', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "public"."UnitStatus" AS ENUM ('OCCUPIED', 'VACANT', 'MAINTENANCE', 'RESERVED');

-- CreateEnum
CREATE TYPE "public"."TicketStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED');

-- CreateEnum
CREATE TYPE "public"."TicketPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "public"."ScheduleType" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "public"."TaskStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."StaffRole" AS ENUM ('PLUMBER', 'ELECTRICIAN', 'CLEANER', 'SECURITY_GUARD', 'IT_TECHNICIAN', 'GENERAL_MAINTENANCE');

-- CreateEnum
CREATE TYPE "public"."BillingStatus" AS ENUM ('PENDING', 'PAID', 'OVERDUE', 'PARTIAL');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'BANK_TRANSFER', 'CREDIT_CARD', 'GCASH', 'PAYMAYA', 'CHECK');

-- CreateEnum
CREATE TYPE "public"."RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "public"."QRType" AS ENUM ('TENANT', 'VISITOR');

-- CreateEnum
CREATE TYPE "public"."QRAction" AS ENUM ('ENTRY', 'EXIT');

-- CreateEnum
CREATE TYPE "public"."NoticePriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "public"."IncidentType" AS ENUM ('THEFT', 'FIGHT', 'VANDALISM', 'NOISE_COMPLAINT', 'TRESPASSING', 'FIRE', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."IncidentSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "public"."BedType" AS ENUM ('SINGLE', 'DOUBLE', 'QUEEN', 'KING', 'TWIN');

-- CreateTable
CREATE TABLE "public"."companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."super_admins" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "super_admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."properties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "totalUnits" INTEGER NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" TEXT NOT NULL,
    "superAdminId" TEXT,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."units" (
    "id" TEXT NOT NULL,
    "unitNumber" TEXT NOT NULL,
    "floor" INTEGER,
    "bedrooms" INTEGER,
    "bedCount" INTEGER,
    "bedType" "public"."BedType" DEFAULT 'SINGLE',
    "bathrooms" INTEGER,
    "area" DOUBLE PRECISION,
    "baseRent" DOUBLE PRECISION NOT NULL,
    "status" "public"."UnitStatus" NOT NULL DEFAULT 'VACANT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."property_managers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "property_managers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."department_heads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "department" "public"."Department" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "managerId" TEXT NOT NULL,

    CONSTRAINT "department_heads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tenants" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "emergencyContact" TEXT,
    "moveInDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tickets" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT true,
    "status" "public"."TicketStatus" NOT NULL DEFAULT 'OPEN',
    "priority" "public"."TicketPriority" NOT NULL DEFAULT 'MEDIUM',
    "tags" TEXT[],
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "autoCloseDate" TIMESTAMP(3) NOT NULL,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tenantId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "assignedDepartmentId" TEXT,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ticket_comments" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ticketId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "authorType" "public"."UserType" NOT NULL,

    CONSTRAINT "ticket_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ticket_upvotes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ticketId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "ticket_upvotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."maintenance_schedules" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "scheduleType" "public"."ScheduleType" NOT NULL,
    "frequency" INTEGER NOT NULL DEFAULT 1,
    "nextDue" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "propertyId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,

    CONSTRAINT "maintenance_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."maintenance_tasks" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scheduledDate" TIMESTAMP(3) NOT NULL,
    "completedDate" TIMESTAMP(3),
    "status" "public"."TaskStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "scheduleId" TEXT NOT NULL,
    "assignedStaffId" TEXT,
    "ticketId" TEXT,

    CONSTRAINT "maintenance_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."maintenance_staff" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "role" "public"."StaffRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "overallRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentHeadId" TEXT NOT NULL,

    CONSTRAINT "maintenance_staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."job_completion_logs" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timeSpent" DOUBLE PRECISION,
    "materialsUsed" TEXT,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskId" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "departmentHeadId" TEXT NOT NULL,

    CONSTRAINT "job_completion_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."staff_reviews" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "staffId" TEXT NOT NULL,

    CONSTRAINT "staff_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."billings" (
    "id" TEXT NOT NULL,
    "billingPeriod" TEXT NOT NULL,
    "baseRent" DOUBLE PRECISION NOT NULL,
    "waterBill" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "electricityBill" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "otherCharges" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" "public"."BillingStatus" NOT NULL DEFAULT 'PENDING',
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidAt" TIMESTAMP(3),
    "tenantId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,

    CONSTRAINT "billings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."payments" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" "public"."PaymentMethod" NOT NULL DEFAULT 'CASH',
    "referenceNumber" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantId" TEXT NOT NULL,
    "billingId" TEXT,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."budget_requests" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "purpose" TEXT NOT NULL,
    "description" TEXT,
    "department" "public"."Department" NOT NULL,
    "status" "public"."RequestStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),
    "departmentHeadId" TEXT,
    "propertyManagerId" TEXT,

    CONSTRAINT "budget_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."financial_reports" (
    "id" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "totalIncome" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalExpenses" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netProfit" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "collectionsReceived" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "delinquentUnits" INTEGER NOT NULL DEFAULT 0,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "financial_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."inventory_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "currentStock" INTEGER NOT NULL DEFAULT 0,
    "minimumStock" INTEGER NOT NULL DEFAULT 0,
    "costPerUnit" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inventory_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."inventory_usage" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "itemId" TEXT NOT NULL,
    "departmentHeadId" TEXT NOT NULL,

    CONSTRAINT "inventory_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tenant_qr_codes" (
    "id" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "tenant_qr_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."visitor_qr_codes" (
    "id" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "visitorName" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "visitor_qr_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."qr_logs" (
    "id" TEXT NOT NULL,
    "qrType" "public"."QRType" NOT NULL,
    "action" "public"."QRAction" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" TEXT NOT NULL,
    "tenantQRCodeId" TEXT,
    "visitorQRCodeId" TEXT,

    CONSTRAINT "qr_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Blacklisted" (
    "id" TEXT NOT NULL,
    "visitorName" TEXT NOT NULL,

    CONSTRAINT "Blacklisted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notices" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "priority" "public"."NoticePriority" NOT NULL DEFAULT 'LOW',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "notices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."security_incidents" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "incidentType" "public"."IncidentType" NOT NULL,
    "severity" "public"."IncidentSeverity" NOT NULL DEFAULT 'LOW',
    "reportedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "security_incidents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "super_admins_email_key" ON "public"."super_admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "units_propertyId_unitNumber_key" ON "public"."units"("propertyId", "unitNumber");

-- CreateIndex
CREATE UNIQUE INDEX "property_managers_email_key" ON "public"."property_managers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "department_heads_email_key" ON "public"."department_heads"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_email_key" ON "public"."tenants"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_username_key" ON "public"."tenants"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_unitId_key" ON "public"."tenants"("unitId");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_upvotes_ticketId_tenantId_key" ON "public"."ticket_upvotes"("ticketId", "tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "maintenance_staff_email_key" ON "public"."maintenance_staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "billings_tenantId_billingPeriod_key" ON "public"."billings"("tenantId", "billingPeriod");

-- CreateIndex
CREATE UNIQUE INDEX "financial_reports_propertyId_month_year_key" ON "public"."financial_reports"("propertyId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "tenant_qr_codes_qrCode_key" ON "public"."tenant_qr_codes"("qrCode");

-- CreateIndex
CREATE UNIQUE INDEX "visitor_qr_codes_qrCode_key" ON "public"."visitor_qr_codes"("qrCode");

-- AddForeignKey
ALTER TABLE "public"."super_admins" ADD CONSTRAINT "super_admins_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."properties" ADD CONSTRAINT "properties_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."properties" ADD CONSTRAINT "properties_superAdminId_fkey" FOREIGN KEY ("superAdminId") REFERENCES "public"."super_admins"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."units" ADD CONSTRAINT "units_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."property_managers" ADD CONSTRAINT "property_managers_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."department_heads" ADD CONSTRAINT "department_heads_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "public"."property_managers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tenants" ADD CONSTRAINT "tenants_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tenants" ADD CONSTRAINT "tenants_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "public"."units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tickets" ADD CONSTRAINT "tickets_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tickets" ADD CONSTRAINT "tickets_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tickets" ADD CONSTRAINT "tickets_assignedDepartmentId_fkey" FOREIGN KEY ("assignedDepartmentId") REFERENCES "public"."department_heads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket_comments" ADD CONSTRAINT "ticket_comments_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "public"."tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket_upvotes" ADD CONSTRAINT "ticket_upvotes_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "public"."tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ticket_upvotes" ADD CONSTRAINT "ticket_upvotes_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."maintenance_schedules" ADD CONSTRAINT "maintenance_schedules_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."maintenance_schedules" ADD CONSTRAINT "maintenance_schedules_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."property_managers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."maintenance_tasks" ADD CONSTRAINT "maintenance_tasks_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "public"."maintenance_schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."maintenance_tasks" ADD CONSTRAINT "maintenance_tasks_assignedStaffId_fkey" FOREIGN KEY ("assignedStaffId") REFERENCES "public"."maintenance_staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."maintenance_tasks" ADD CONSTRAINT "maintenance_tasks_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "public"."tickets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."maintenance_staff" ADD CONSTRAINT "maintenance_staff_departmentHeadId_fkey" FOREIGN KEY ("departmentHeadId") REFERENCES "public"."department_heads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."job_completion_logs" ADD CONSTRAINT "job_completion_logs_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "public"."maintenance_tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."job_completion_logs" ADD CONSTRAINT "job_completion_logs_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "public"."maintenance_staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."job_completion_logs" ADD CONSTRAINT "job_completion_logs_departmentHeadId_fkey" FOREIGN KEY ("departmentHeadId") REFERENCES "public"."department_heads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."staff_reviews" ADD CONSTRAINT "staff_reviews_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "public"."maintenance_staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."billings" ADD CONSTRAINT "billings_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."billings" ADD CONSTRAINT "billings_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "public"."units"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_billingId_fkey" FOREIGN KEY ("billingId") REFERENCES "public"."billings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."budget_requests" ADD CONSTRAINT "budget_requests_departmentHeadId_fkey" FOREIGN KEY ("departmentHeadId") REFERENCES "public"."department_heads"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."budget_requests" ADD CONSTRAINT "budget_requests_propertyManagerId_fkey" FOREIGN KEY ("propertyManagerId") REFERENCES "public"."property_managers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."financial_reports" ADD CONSTRAINT "financial_reports_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."inventory_usage" ADD CONSTRAINT "inventory_usage_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."inventory_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."inventory_usage" ADD CONSTRAINT "inventory_usage_departmentHeadId_fkey" FOREIGN KEY ("departmentHeadId") REFERENCES "public"."department_heads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tenant_qr_codes" ADD CONSTRAINT "tenant_qr_codes_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."visitor_qr_codes" ADD CONSTRAINT "visitor_qr_codes_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "public"."tenants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."qr_logs" ADD CONSTRAINT "qr_logs_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."qr_logs" ADD CONSTRAINT "qr_logs_tenantQRCodeId_fkey" FOREIGN KEY ("tenantQRCodeId") REFERENCES "public"."tenant_qr_codes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."qr_logs" ADD CONSTRAINT "qr_logs_visitorQRCodeId_fkey" FOREIGN KEY ("visitorQRCodeId") REFERENCES "public"."visitor_qr_codes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notices" ADD CONSTRAINT "notices_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
