export interface Dog {
  id: number;
  name: string;
  breed: string;
  age: '' | 'under-1' | '1-3' | '4-7' | '8-plus';
  gender: 'Boy' | 'Girl';
  health: 'Healthy' | 'Special needs';
  description: string;
  imageUrl: string;
  isAdopted: boolean;
}

export interface DogFilters {
  age: '' | 'under-1' | '1-3' | '4-7' | '8-plus';
  gender: 'Boy' | 'Girl' | '';
  health: '' | 'Healthy' | 'Special needs';
  breed: '' | 'Rottweiler' | 'Cane Corso' | 'Mixed breed';
}

export interface GalleryImage {
  id?: number;
  imageUrl: string;
  caption: string;
}
