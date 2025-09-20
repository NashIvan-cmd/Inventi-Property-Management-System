import { ReactNode } from 'react';

// Core types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'resident' | 'maintenance' | 'security';
  avatar?: string;
  phone?: string;
  unit?: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  lastLogin?: Date;
}

// Dashboard Stats
export interface DashboardStat {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
  color: 'primary' | 'success' | 'warning' | 'danger';
}

// Marketplace Types
export interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'sale' | 'service' | 'rent';
  sellerId: string;
  sellerName: string;
  images: string[];
  status: 'active' | 'sold' | 'pending' | 'inactive';
  location?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MarketplaceTransaction {
  id: string;
  itemId: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
  completedAt?: Date;
}

// Financial Types
export interface BillingRecord {
  id: string;
  unitNumber: string;
  residentName: string;
  amount: number;
  type: 'maintenance_fee' | 'utility' | 'parking' | 'fine' | 'other';
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  dueDate: Date;
  paidDate?: Date;
  description: string;
  createdAt: Date;
}

export interface ExpenseApproval {
  id: string;
  title: string;
  description: string;
  amount: number;
  category: string;
  requestedBy: string;
  requestedAt: Date;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approvedAt?: Date;
  attachments: string[];
}

// Access Control Types
export interface AccessLog {
  id: string;
  userId: string;
  userName: string;
  location: string;
  accessType: 'entry' | 'exit';
  method: 'qr' | 'card' | 'manual';
  status: 'granted' | 'denied';
  timestamp: Date;
  deviceId?: string;
}

export interface QRCode {
  id: string;
  userId: string;
  type: 'resident' | 'visitor' | 'delivery' | 'contractor';
  expiresAt: Date;
  usageLimit?: number;
  usageCount: number;
  isActive: boolean;
  createdAt: Date;
}

// Maintenance Types
export interface MaintenanceTask {
  id: string;
  title: string;
  description: string;
  category: 'preventive' | 'corrective' | 'emergency';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  assignedTo: string;
  location: string;
  scheduledDate: Date;
  completedDate?: Date;
  estimatedDuration: number; // in hours
  actualDuration?: number;
  cost?: number;
  notes?: string;
  attachments: string[];
  createdAt: Date;
}

export interface MaintenanceSchedule {
  id: string;
  taskType: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually';
  nextDueDate: Date;
  lastCompletedDate?: Date;
  assignedTeam: string;
  location: string;
  isActive: boolean;
}

// Ticketing Types
export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: 'maintenance' | 'noise' | 'security' | 'facilities' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  reportedBy: string;
  assignedTo?: string;
  location?: string;
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  resolutionNotes?: string;
}

export interface TicketComment {
  id: string;
  ticketId: string;
  userId: string;
  userName: string;
  content: string;
  attachments: string[];
  createdAt: Date;
  isInternal: boolean;
}

// Monitoring Types
export interface MonitoringData {
  id: string;
  type: 'temperature' | 'humidity' | 'energy' | 'water' | 'security';
  location: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  timestamp: Date;
  deviceId: string;
}

export interface UtilityUsage {
  id: string;
  type: 'electricity' | 'water' | 'gas' | 'internet';
  location: string;
  usage: number;
  cost: number;
  period: string; // e.g., "2024-01"
  status: 'normal' | 'high' | 'critical';
}

export interface CCTVFeed {
  id: string;
  name: string;
  location: string;
  streamUrl: string;
  status: 'online' | 'offline' | 'maintenance';
  lastUpdate: Date;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'on_duty' | 'available' | 'on_leave';
  contactNumber: string;
  email: string;
  salary: number;
  hireDate: Date;
  skills: string[];
}

// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  badge?: number;
  children?: NavigationItem[];
}

// Common Component Props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Chart Data Types
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  timestamp: Date;
  value: number;
  label?: string;
}