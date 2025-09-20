# FIT Property Management System

A comprehensive property management system built with React TypeScript, combining multiple modules for complete building management.

## Features

### 🏠 Dashboard
- Real-time overview of all building systems
- Key performance indicators and statistics
- Quick actions and recent activities
- System status monitoring

### 🛒 Marketplace
- Resident-to-resident buying and selling platform
- Service offerings and requests
- Transaction management
- Community commerce facilitation

### 💰 Financial Management
- Automated billing and collections
- Expense approval workflows
- Financial reporting and analytics
- Revenue tracking

### 🔑 Access Control
- QR code-based entry system
- Access logs and monitoring
- Visitor management
- Security permissions

### 🔧 Maintenance
- Preventive maintenance scheduling
- Work order management
- Equipment tracking
- Contractor coordination

### 🎫 Ticketing System
- Tenant concern management
- Issue tracking and resolution
- Communication workflows
- Priority handling

### 📊 Monitoring
- Building systems monitoring
- CCTV integration
- Utility usage tracking
- Environmental sensors

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Google Material Symbols
- **State Management**: React Hooks
- **Build Tool**: Create React App
- **Package Manager**: npm

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (Button, Card, etc.)
│   └── layout/          # Layout components (Header, Sidebar)
├── pages/               # Page components for each module
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── constants/           # Application constants
└── assets/              # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd property-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Module Details

### Dashboard
Central hub providing:
- Key metrics and KPIs
- Quick access to all modules
- Recent activity feed
- System health status

### Marketplace
Enables residents to:
- List items for sale or rent
- Offer services to neighbors
- Browse available offerings
- Manage transactions securely

### Financial Management
Streamlines:
- Monthly fee collection
- Utility billing
- Expense approvals
- Financial reporting

### Access Control
Provides:
- QR code generation for residents/visitors
- Real-time access monitoring
- Security event logging
- Permission management

### Maintenance
Facilitates:
- Scheduled maintenance planning
- Emergency repair coordination
- Vendor management
- Asset tracking

### Ticketing System
Handles:
- Resident complaints and requests
- Issue prioritization
- Resolution tracking
- Communication threads

### Monitoring
Tracks:
- Building security via CCTV
- Environmental conditions
- Utility consumption
- Equipment status

## Design System

The application uses a consistent design system based on:
- **Colors**: Blue primary palette with semantic colors
- **Typography**: Inter font family
- **Spacing**: 4px base unit grid system
- **Components**: Reusable, accessible UI components
- **Responsive**: Mobile-first responsive design

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React functional component patterns
- Implement proper error handling
- Write descriptive component interfaces

### File Naming
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- Types: PascalCase interfaces (e.g., `User`, `ApiResponse`)
- Utilities: camelCase (e.g., `formatDate.ts`)

### Component Structure
```typescript
import React from 'react';
import { ComponentProps } from '@/types';

interface MyComponentProps {
  // Props definition
}

export const MyComponent: React.FC<MyComponentProps> = ({
  // Props destructuring
}) => {
  // Component logic
  return (
    // JSX
  );
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the project repository.