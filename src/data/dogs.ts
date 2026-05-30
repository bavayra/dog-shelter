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
    description: {
      intro:
        'Most of my life I was kept on a chain. My owner simply abandoned me even though I loved them very much. I was lonely, cold, and very hungry before Rotvodom took me in. Can you be a better owner for me? I already love you.',
      traits: [
        {
          label: 'My food',
          value: 'I eat regular dog food and sometimes I get tasty treats.',
        },
        { label: 'My health', value: 'I am healthy!' },
        {
          label: 'Doghouse',
          value:
            'I prefer warm and cozy places so please give me a place inside your house.',
        },
        {
          label: 'Other animals',
          value: 'I adore other dogs, but I do not really like cats.',
        },
        { label: 'Kids', value: 'I love children!' },
        {
          label: 'Activities',
          value:
            "I really love people, cuddling, and sitting on someone's laps.",
        },
      ],
    },
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
    description: {
      intro:
        'My previous owner did not love me nor spent time with me, so I never really learned much about this life. I am not that young but with you, my new best friend, I will play and have fun for as long as you want. Please take me home?',
      traits: [
        {
          label: 'My food',
          value: 'I eat everything, but Rotvomama told me to eat granules!',
        },
        { label: 'My health', value: 'I am healthy!' },
        { label: 'Doghouse', value: 'I can sleep both outside and inside!' },
        {
          label: 'Other animals',
          value: 'I am not good at making friends with other dogs or cats.',
        },
        { label: 'Kids', value: 'Yes but not very small children.' },
        { label: 'Activities', value: 'Sleep. Play. Eat. Repeat.' },
      ],
    },
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
    description: {
      intro:
        'Most of my life felt like a real nightmare. I never went for walks or played outside, never felt a gentle touch… all they wanted from me was to have puppies. I was scared of everything... But now I have learnt that not all humans are bad. Where are you, my perfect human?',
      traits: [
        { label: 'My food', value: 'I eat soft food only.' },
        {
          label: 'My health',
          value: 'I am completely deaf and need help while walking.',
        },
        { label: 'Doghouse', value: 'I would love to live inside your home.' },
        { label: 'Other animals', value: 'I prefer to be the only pet.' },
        { label: 'Kids', value: 'Yes but gently.' },
        { label: 'Activities', value: 'Cuddles and short walks.' },
      ],
    },
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
    description: {
      intro:
        'I just adore people! My biggest talent? I am the best at protecting them! I am still learning how to walk on a leash, but I know for sure — someone out there is looking for a friend exactly like me.',
      traits: [
        { label: 'My food', value: 'Does not matter, I eat everything!' },
        {
          label: 'My health',
          value: 'Some issues with my back legs, but I get around just fine.',
        },
        { label: 'Doghouse', value: 'Outside please, I love fresh air!' },
        { label: 'Other animals', value: 'Please no other animals.' },
        { label: 'Kids', value: 'Please no small children.' },
        {
          label: 'Activities',
          value: 'Running, playing, and protecting my human!',
        },
      ],
    },
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
    description: {
      intro:
        'I have been at the shelter for over a year now… I might look a little scary, but deep down I am the gentlest giant you will ever meet. I am a good listener, I am smart, and I am chatty! I just really, really want to go home…',
      traits: [
        { label: 'My food', value: 'Only granules please.' },
        { label: 'My health', value: 'I am healthy!' },
        { label: 'Doghouse', value: 'I would love to live inside your home.' },
        { label: 'Other animals', value: 'I get along well with other dogs.' },
        { label: 'Kids', value: 'Yes, I love children.' },
        {
          label: 'Activities',
          value: 'Playing, sitting on your laps and cuddling.',
        },
      ],
    },
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
    description: {
      intro:
        'I really am a good girl, I promise. I love people so much… but they have let me down. I have cancer, but I am not giving up! I just want to find my person and spend the rest of my life with them.',
      traits: [
        {
          label: 'My food',
          value: 'Only special food for my health condition.',
        },
        {
          label: 'My health',
          value: 'I have cancer and need regular check-ups.',
        },
        { label: 'Doghouse', value: 'I would love to live inside your house.' },
        {
          label: 'Other animals',
          value: 'I love cats, but not so much other dogs.',
        },
        { label: 'Kids', value: 'Yes!' },
        {
          label: 'Activities',
          value: 'Mostly resting, but I do enjoy gentle walks and cuddles.',
        },
      ],
    },
    isAdopted: false,
  },
];

const shelterStats = {
  totalDogsNow: 124,
  dogsAdoptedThisYear: 37,
  dogsAdoptedTotal: 289,
};

export { pets, shelterStats };
