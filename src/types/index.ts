export interface Dog {
  id: number;
  name: string;
  breed: string;
  age: string; // 'Young' | 'Adult' | 'Senior'
  gender: 'Boy' | 'Girl';
  health: string; // 'Healthy' | 'Special needs'
  description: string;
  imageUrl: string;
  isAdopted: boolean;
}

export interface DogFilters {
  age: string; // 'Young' | 'Adult' | 'Senior' | ''
  gender: string; // 'Boy' | 'Girl' | ''
  health: string; // 'Healthy' | 'Special needs' | ''
  breed: string; // 'Rottweiler' | 'Cane Corso' | 'Mixed breed' | ''
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  caption: string;
}
