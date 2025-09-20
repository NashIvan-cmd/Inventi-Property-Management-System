// Navigation constants
export const ROUTES = {
  DASHBOARD: '/',
  MARKETPLACE: '/marketplace',
  FINANCE: '/finance',
  ACCESS: '/access',
  MAINTENANCE: '/maintenance',
  TICKETING: '/ticketing',
  MONITORING: '/monitoring',
} as const;

// Status constants
export const STATUS_COLORS = {
  active: 'bg-green-100 text-green-600',
  inactive: 'bg-gray-100 text-gray-600',
  pending: 'bg-yellow-100 text-yellow-600',
  error: 'bg-red-100 text-red-600',
  warning: 'bg-orange-100 text-orange-600',
} as const;

// Priority levels
export const PRIORITY_LEVELS = {
  low: { label: 'Low', color: 'bg-blue-100 text-blue-600' },
  medium: { label: 'Medium', color: 'bg-yellow-100 text-yellow-600' },
  high: { label: 'High', color: 'bg-orange-100 text-orange-600' },
  critical: { label: 'Critical', color: 'bg-red-100 text-red-600' },
} as const;

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  RESIDENT: 'resident',
  MAINTENANCE: 'maintenance',
  SECURITY: 'security',
} as const;

// Marketplace categories
export const MARKETPLACE_CATEGORIES = {
  SALE: 'sale',
  SERVICE: 'service',
  RENT: 'rent',
} as const;

// Maintenance task types
export const MAINTENANCE_TYPES = {
  PREVENTIVE: 'preventive',
  CORRECTIVE: 'corrective',
  EMERGENCY: 'emergency',
} as const;

// Ticket categories
export const TICKET_CATEGORIES = {
  MAINTENANCE: 'maintenance',
  NOISE: 'noise',
  SECURITY: 'security',
  FACILITIES: 'facilities',
  OTHER: 'other',
} as const;

// API endpoints (for future use)
export const API_ENDPOINTS = {
  USERS: '/api/users',
  MARKETPLACE: '/api/marketplace',
  FINANCE: '/api/finance',
  ACCESS: '/api/access',
  MAINTENANCE: '/api/maintenance',
  TICKETS: '/api/tickets',
  MONITORING: '/api/monitoring',
} as const;

// Date formats
export const DATE_FORMATS = {
  SHORT: 'MMM d, yyyy',
  LONG: 'MMMM d, yyyy',
  WITH_TIME: 'MMM d, yyyy h:mm a',
  TIME_ONLY: 'h:mm a',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50],
} as const;