const imageModules = import.meta.glob<{ default: string }>(
  '../assets/dogs-images/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

const dogImages: Record<string, string> = {};

for (const path in imageModules) {
  const fileName = path.split('/').pop();

  if (fileName) {
    dogImages[fileName] = imageModules[path].default;
  }
}
const galleryImageModules = import.meta.glob<{ default: string }>(
  '../assets/gallery/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

const galleryImages: Record<string, string> = {};

for (const path in galleryImageModules) {
  const fileName = path.split('/').pop();

  if (fileName) {
    galleryImages[fileName] = galleryImageModules[path].default;
  }
}

// Lazy load image helper
export const loadImage = async (path: string): Promise<string> => {
  const module = await imageModules[path]?.();
  return module?.default || '';
};

export const loadGalleryImage = async (path: string): Promise<string> => {
  const module = await galleryImageModules[path]?.();
  return module?.default || '';
};

export const getDogImage = (
  fileName: string,
  fallback = '/placeholder-dog.jpg'
): string => {
  if (fileName.startsWith('http://') || fileName.startsWith('https://')) {
    return fileName;
  }
  return dogImages[fileName] || fallback;
};

export const getGalleryImage = (
  fileName: string,
  fallback = '/placeholder-gallery.jpg'
): string => {
  if (fileName.startsWith('http://') || fileName.startsWith('https://')) {
    return fileName;
  }

  return galleryImages[fileName] || fallback;
};

export const allDogImages = dogImages;
export default dogImages;
export const allGalleryImages = galleryImages;
