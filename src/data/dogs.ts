import type { Dog } from '@/types';

const pets: Dog[] = [
  {
    id: 1,
    name: 'Bianka',
    breed: 'Rottweiler',
    age: '1-3',
    gender: 'Girl',
    health: 'Healthy',
    imageUrl: 'dog-bianka.webp',
    description: `Most of my life I was kept on a chain. My owner simply abandoned me even though I loved them very much. I was lonely, cold, and very hungry before Rotvodom took me in. Can you be a better owner for me? I already love you.
      -My food: I eat regular dog food and sometimes I get tasty treats.
      -My health: I'm healthy!
      -Doghouse: I prefer warm and cozy places so please give me a place inside your house.
      -Other animals: I adore other dogs, but I don't really like cats.
      -Kids: I love children!
      -Activities: I really love people, cuddling, and sitting on someone's laps.`,
    isAdopted: false,
  },

  {
    id: 2,
    name: 'Vasilisa',
    breed: 'Rottweiler',
    age: '4-7',
    gender: 'Girl',
    health: 'Healthy',
    imageUrl: 'dog-vasilisa.webp',
    description: `My previous owner didn't love me nor spent time with me, so I never really learned much about this life. I am not that young but with you, my new best friend, I will play and have fun for as long as you want. Please take me home?
      -My food: I eat everything, but Rotvomama told me to eat granules!
      -My health: I'm healthy!
      -Doghouse: I can sleep both outside and inside!
      -Other animals: I'm not good at making friends with other dogs or cats.
      -Kids: Yes but not very small children.
      -Activities: Sleep. Play. Eat. Repeat.`,
    isAdopted: false,
  },

  {
    id: 3,
    name: 'Birdy',
    breed: 'Mixed breed',
    age: '8-plus',
    gender: 'Girl',
    health: 'Special needs',
    imageUrl: 'dog-birdy.webp',
    description: `Most of my life felt like a real nightmare. I never went for walks or played outside, never felt a gentle touch… all they wanted from me was to have puppies. I was scared of everything... But now I have learnt that not all humans are bad. Where are you, my perfect human?,
      -My food: I eat soft food only.
      -My health: I am completely deaf and need help while walking.
      -Doghouse: I would love to live inside your home.
      -Other animals: I prefer to be the only pet.
      -Kids: Yes but gently.
      -Activities: Cuddles and short walks.`,
    isAdopted: false,
  },

  {
    id: 4,
    name: 'Archie',
    breed: 'Rottweiler',
    age: '1-3',
    gender: 'Boy',
    health: 'Special needs',
    imageUrl: 'dog-archie.webp',
    description: `I just adore people! My biggest talent? I am the best at protecting them! I’m still learning how to walk on a leash, but I know for sure — someone out there is looking for a friend exactly like me.
      -My food: Doesn’t matter, I eat everything!
      -My health: Some issues with my back legs, but I get around just fine.
      -Doghouse: Outside please, I love fresh air!
      -Other animals: Please no other animals.
      -Kids: Please no small children.
      -Activities: Running, playing, and protecting my human!`,
    isAdopted: false,
  },

  {
    id: 5,
    name: 'Baikal',
    breed: 'Cane Corso',
    age: '4-7',
    gender: 'Boy',
    health: 'Healthy',
    imageUrl: 'dog-baikal.webp',
    description: `I have been at the shelter for over a year now… I might look a little scary, but deep down I am the gentlest giant you will ever meet. I am a good listener, I am smart, and I'm chatty! I just really, really want to go home…
      -My food: Only granules please.
      -My health: I'm healthy!
      -Doghouse: I would love to live inside your home.
      -Other animals: I get along well with other dogs.
      -Kids: Yes, I love children.
      -Activities: Playing, sitting on your laps and cuddling.`,
    isAdopted: false,
  },

  {
    id: 6,
    name: 'Jessie',
    breed: 'Rottweiler',
    age: '8-plus',
    gender: 'Girl',
    health: 'Special needs',
    imageUrl: 'dog-jessie.webp',
    description: `I really am a good girl, I promise. I love people so much… but they have let me down. I have cancer, but I am not giving up! I just want to find my person and spend the rest of my life with them.
      -My food: Only special food for my health condition.
      -My health: I have cancer and need regular check-ups.
      -Doghouse: I would love to live inside your house.
      -Other animals: I love cats, but not so much other dogs.
      -Kids: Yes!
      -Activities: Mostly resting, but I do enjoy gentle walks and cuddles.`,
    isAdopted: false,
  },
];

const shelterStats = {
  totalDogsNow: 124,
  dogsAdoptedThisYear: 37,
  dogsAdoptedTotal: 289,
};

export { pets, shelterStats };
