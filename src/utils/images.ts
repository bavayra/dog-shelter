const imageModules = import.meta.glob<{ default: string }>(
  '../assets/dogs-images/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

const dogImages: Record<string, string> = {};

for (const path in imageModules) {
  const fileName = path.split('/').pop();
  const module = imageModules[path] as { default: string };

  if (fileName && module?.default) {
    dogImages[fileName] = module.default;
  }
}

const galleryImageModules = import.meta.glob<{ default: string }>(
  '../assets/gallery/*.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);

const galleryImages: Record<string, string> = {};

for (const path in galleryImageModules) {
  const fileName = path.split('/').pop();
  const module = galleryImageModules[path] as { default: string };

  if (fileName && module) {
    galleryImages[fileName] = module.default;
  }
}

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
