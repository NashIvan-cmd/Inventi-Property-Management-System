import React from 'react';
import { BaseComponentProps } from '@/types';

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  actions,
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
        bg-white rounded-xl shadow-md border border-gray-200
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
    >
      {(title || subtitle || actions) && (
        <div className={`${paddingClasses[padding]} ${children ? 'border-b border-gray-200' : ''}`}>
          <div className="flex items-center justify-between">
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className="flex items-center space-x-2">{actions}</div>
            )}
          </div>
        </div>
      )}
      {children && (
        <div className={paddingClasses[padding]}>{children}</div>
      )}
    </div>
  );
};

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  color = 'primary',
  className = '',
}) => {
  const colorClasses = {
    primary: 'gradient-primary',
    success: 'gradient-success',
    warning: 'gradient-warning',
    danger: 'gradient-danger',
  };

  const changeClasses = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50',
  };

  return (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden ${className}`}>
      <div className={`h-2 ${colorClasses[color]}`} />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          </div>
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <span className="material-symbols-outlined text-white text-2xl">
              {icon}
            </span>
          </div>
        </div>
        {change !== undefined && (
          <div className="mt-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${changeClasses[changeType]}`}>
              <span className="material-symbols-outlined text-xs mr-1">
                {changeType === 'positive' ? 'trending_up' : changeType === 'negative' ? 'trending_down' : 'trending_flat'}
              </span>
              {Math.abs(change)}%
            </span>
            <span className="text-sm text-gray-600 ml-2">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};