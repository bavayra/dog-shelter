export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  imageUrl: string;
  isAdopted: boolean;
  adoptionDate?: Date;
}

export interface AdoptionRequest {
  id: string;
  dogId: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}
