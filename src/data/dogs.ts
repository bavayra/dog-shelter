import type { Dog } from '@/types';

const pets: Dog[] = [
  {
    id: 1,
    name: 'Bianka',
    breed: 'Rottweiler',
    age: 'Adult',
    gender: 'Girl',
    health: 'Healthy',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Bianka',
    description:
      "Most of my life I was kept on a chain. My owner simply abandoned me. I really love people, cuddling, and sitting on someone's laps. I adore playing with other dogs, but I don't really like cats...",
    isAdopted: false,
  },

  {
    id: 2,
    name: 'Vasilisa',
    breed: 'Rottweiler',
    age: 'Adult',
    gender: 'Girl',
    health: 'Healthy',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Vasilisa',
    description:
      "My previous owner didn't love me nor spent time with me, so I never really learned much about this life. I'm not good at making friends with other dogs or cats, but with you, my new best friend, I'll play and have fun for as long as you want. Please take me home?",
    isAdopted: false,
  },

  {
    id: 3,
    name: 'Birdy',
    breed: 'Mixed breed',
    age: 'Senior',
    gender: 'Girl',
    health: 'Special needs',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Birdy',
    description:
      'Most of my life felt like a real nightmare. I never went for walks or played outside, never felt a gentle touch… all they wanted from me was to have puppies. I was scared of everything. I am completely deaf and barely can walk...But now I have learnt that not all humans are bad. Where are you, my perfect human?',
    isAdopted: false,
  },

  {
    id: 4,
    name: 'Archie',
    breed: 'Rottweiler',
    age: 'Adult',
    gender: 'Boy',
    health: 'Special needs',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Archie',
    description:
      'I just adore people! My biggest talent? I am the best at protecting them! I’m still learning how to walk on a leash, but I know for sure—someone out there is looking for a friend exactly like me.',
    isAdopted: false,
  },

  {
    id: 5,
    name: 'Baikal',
    breed: 'Cane Corso',
    age: 'Adult',
    gender: 'Boy',
    health: 'Healthy',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Baikal',
    description:
      "I have been at the shelter for over a year now… I might look a little scary, but deep down I am the gentlest giant you will ever meet. I am a good listener, I am smart, and I'm chatty! I just really, really want to go home…",
    isAdopted: false,
  },

  {
    id: 6,
    name: 'Jessie',
    breed: 'Rottweiler',
    age: 'Senior',
    gender: 'Girl',
    health: 'Special needs',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Jessie',
    description:
      'I really am a good girl, I promise. I love people so much… but they have let me down. I have cancer, but I am not giving up! I just want to find my person and spend the rest of my life with them.',
    isAdopted: false,
  },
];

const shelterStats = {
  totalDogsNow: 124,
  dogsAdoptedThisYear: 37,
  dogsAdoptedTotal: 289,
};

export { pets, shelterStats };
