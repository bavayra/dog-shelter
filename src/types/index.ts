export interface Dog {
  id: number;
  name: string;
  breed: string;
  age: string; // 'Young' | 'Adult' | 'Senior'
  gender: 'Male' | 'Female';
  health: string; // 'Healthy' | 'Special needs'
  description: string;
  imageUrl: string;
  isAdopted: boolean;
  adoptionDate?: Date;
}

export interface AdoptionRequest {
  id: number;
  dogId: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

export interface DogFilters {
  age: string; // 'Young' | 'Adult' | 'Senior' | ''
  gender: string; // 'Male' | 'Female' | ''
  health: string; // 'Healthy' | 'Special needs' | ''
  breed: string; // 'Rottweiler' | 'Cane Corso' | 'Mixed breed' | ''
}
