export const PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';

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
  fallback = PLACEHOLDER_IMAGE
): string => {
  if (fileName.startsWith('http://') || fileName.startsWith('https://')) {
    return fileName;
  }
  return dogImages[fileName] || fallback;
};

export const getGalleryImage = (
  fileName: string,
  fallback = PLACEHOLDER_IMAGE
): string => {
  if (fileName.startsWith('http://') || fileName.startsWith('https://')) {
    return fileName;
  }

  return galleryImages[fileName] || fallback;
};
