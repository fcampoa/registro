export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  membership?: Membership;
  createdAt: Date;
}

export interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string;
  birthDate: Date;
  weight: number;
  gender: 'male' | 'female';
  color: string;
  healthStatus: 'healthy' | 'sick' | 'under-treatment';
  vaccinations: Vaccination[];
  registrationDate: Date;
  ownerId: string;
  vetExaminations: VetExamination[];
  paymentStatus: 'paid' | 'pending' | 'overdue';
  price?: number; // Precio de venta (opcional)
}

export interface Vaccination {
  id: string;
  name: string;
  date: Date;
  veterinarian: string;
  nextDue?: Date;
}

export interface VetExamination {
  id: string;
  veterinarianId: string;
  animalId: string;
  date: Date;
  diagnosis: string;
  treatment?: string;
  followUpRequired: boolean;
}

export interface Veterinarian {
  id: string;
  name: string;
  licenseNumber: string;
  specialization: string;
  phone: string;
  email: string;
  approvedBy: string;
  approvalDate: Date;
  isActive: boolean;
}

export interface Membership {
  id: string;
  type: 'basic' | 'premium' | 'enterprise';
  price: number;
  animalsAllowed: number;
  features: string[];
  billingCycle: 'monthly' | 'yearly';
}

export interface AnimalRegistrationRequest {
  id: string;
  animalData: Partial<Animal>;
  requestedBy: string;
  requestDate: Date;
  status: 'pending' | 'approved' | 'rejected';
  paymentIntentId?: string;
}

export interface RegistrationCertificate {
  id: string;
  certificateNumber: string;
  animalId: string;
  issuedDate: Date;
  issuedBy: string;
  qrCode?: string;
  digitalSignature: string;
  status: 'active' | 'revoked' | 'expired';
}

export interface AnimalSearchFilters {
  species?: string;
  breed?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  healthStatus?: string;
  gender?: string;
  ageRange?: {
    min: number;
    max: number;
  };
}