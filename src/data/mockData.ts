import type { User, Animal, Veterinarian, Membership, Vaccination, VetExamination } from '../types/index';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@ejemplo.com',
    name: 'Administrador',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    email: 'ganadero@ejemplo.com',
    name: 'Juan Pérez',
    role: 'user',
    membership: {
      id: 'm1',
      type: 'basic',
      price: 29.99,
      animalsAllowed: 10,
      features: ['Registro básico', 'Historial médico', 'Reportes básicos'],
      billingCycle: 'monthly'
    },
    createdAt: new Date('2024-02-15'),
  },
];

export const mockMemberships: Membership[] = [
  {
    id: 'm1',
    type: 'basic',
    price: 29.99,
    animalsAllowed: 10,
    features: [
      'Registro de hasta 10 animales',
      'Historial médico básico',
      'Reportes básicos',
      'Soporte por email'
    ],
    billingCycle: 'monthly'
  },
  {
    id: 'm2',
    type: 'premium',
    price: 59.99,
    animalsAllowed: 50,
    features: [
      'Registro de hasta 50 animales',
      'Historial médico completo',
      'Reportes avanzados',
      'Integración veterinaria',
      'Soporte prioritario',
      'Alertas automáticas'
    ],
    billingCycle: 'monthly'
  },
  {
    id: 'm3',
    type: 'enterprise',
    price: 199.99,
    animalsAllowed: -1, // Ilimitado
    features: [
      'Animales ilimitados',
      'Historial médico completo',
      'Reportes personalizados',
      'API dedicada',
      'Integración completa',
      'Soporte 24/7',
      'Gestor de cuenta dedicado'
    ],
    billingCycle: 'monthly'
  }
];

export const mockVaccinations: Vaccination[] = [
  {
    id: 'v1',
    name: 'Fiebre Aftosa',
    date: new Date('2024-03-15'),
    veterinarian: 'Dr. María González',
    nextDue: new Date('2024-09-15')
  },
  {
    id: 'v2',
    name: 'Brucelosis',
    date: new Date('2024-02-10'),
    veterinarian: 'Dr. Carlos López',
    nextDue: new Date('2025-02-10')
  }
];

export const mockAnimals: Animal[] = [
  {
    id: 'a1',
    name: 'Luna',
    species: 'Bovino',
    breed: 'Holstein',
    birthDate: new Date('2022-05-15'),
    weight: 450,
    gender: 'female',
    color: 'Negro y blanco',
    healthStatus: 'healthy',
    vaccinations: [mockVaccinations[0]],
    registrationDate: new Date('2024-01-20'),
    ownerId: '2',
    vetExaminations: [],
    paymentStatus: 'paid'
  },
  {
    id: 'a2',
    name: 'Toro Bravo',
    species: 'Bovino',
    breed: 'Angus',
    birthDate: new Date('2021-12-03'),
    weight: 680,
    gender: 'male',
    color: 'Negro',
    healthStatus: 'healthy',
    vaccinations: mockVaccinations,
    registrationDate: new Date('2024-02-10'),
    ownerId: '2',
    vetExaminations: [],
    paymentStatus: 'paid'
  },
  {
    id: 'a3',
    name: 'Estrella',
    species: 'Bovino',
    breed: 'Jersey',
    birthDate: new Date('2023-01-20'),
    weight: 380,
    gender: 'female',
    color: 'Marrón claro',
    healthStatus: 'under-treatment',
    vaccinations: [mockVaccinations[1]],
    registrationDate: new Date('2024-03-05'),
    ownerId: '2',
    vetExaminations: [],
    paymentStatus: 'pending'
  }
];

export const mockVeterinarians: Veterinarian[] = [
  {
    id: 'vet1',
    name: 'Dr. María González',
    licenseNumber: 'VET-2024-001',
    specialization: 'Medicina Bovina',
    phone: '+1-555-0101',
    email: 'maria.gonzalez@vetclinic.com',
    approvedBy: '1',
    approvalDate: new Date('2024-01-10'),
    isActive: true
  },
  {
    id: 'vet2',
    name: 'Dr. Carlos López',
    licenseNumber: 'VET-2024-002',
    specialization: 'Reproducción Animal',
    phone: '+1-555-0102',
    email: 'carlos.lopez@vetcenter.com',
    approvedBy: '1',
    approvalDate: new Date('2024-01-15'),
    isActive: true
  },
  {
    id: 'vet3',
    name: 'Dra. Ana Rodríguez',
    licenseNumber: 'VET-2024-003',
    specialization: 'Nutrición Animal',
    phone: '+1-555-0103',
    email: 'ana.rodriguez@animalnutrition.com',
    approvedBy: '1',
    approvalDate: new Date('2024-02-01'),
    isActive: false
  }
];

export const mockVetExaminations: VetExamination[] = [
  {
    id: 'exam1',
    veterinarianId: 'vet1',
    animalId: 'a3',
    date: new Date('2024-03-10'),
    diagnosis: 'Mastitis leve',
    treatment: 'Antibióticos por 7 días',
    followUpRequired: true
  }
];