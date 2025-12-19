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

export const getDogImage = (
  fileName: string,
  fallback = '/placeholder-dog.jpg'
): string => {
  if (fileName.startsWith('http://') || fileName.startsWith('https://')) {
    return fileName;
  }
  return dogImages[fileName] || fallback;
};

export const allDogImages = dogImages;
export default dogImages;
