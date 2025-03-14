import {getRandomArrayElement} from '../utils.js';

const mockEvents = [
  {
    type: 'flight',
    destinationID: 3,
    startDate: new Date('2025-02-18T09:30'),
    endDate: new Date('2025-02-18T11:30'),
    price: 80,
    offers: [1,4],
    isFavorite: true,
  },
  {
    type: 'flight',
    destinationID: 2,
    startDate: new Date('2025-02-20T22:30'),
    endDate: new Date('2025-02-22T03:00'),
    price: 110,
    offers: [1],
    isFavorite: false,
  },
  {
    type: 'check-in',
    destinationID: 2,
    startDate: new Date('2025-04-22T03:00'),
    endDate: new Date('2025-04-22T04:00'),
    price: 10,
    offers: [1,3,5],
    isFavorite: true,
  },
  {
    type: 'taxi',
    destinationID: 1,
    startDate: new Date('2025-02-22T18:00'),
    endDate: new Date('2025-02-22T23:30'),
    price: 35,
    offers: [1, 2],
    isFavorite: false,
  },
  {
    type: 'restaurant',
    destinationID: 1,
    startDate: new Date('2025-02-23T12:00'),
    endDate: new Date('2025-02-23T14:30'),
    price: 1500,
    offers: [3],
    isFavorite: true,
  },
  {
    type: 'taxi',
    destinationID: 4,
    startDate: new Date('2025-02-25T06:00'),
    endDate: new Date('2025-02-25T12:00'),
    price: 50,
    offers: [2,3,5],
    isFavorite: true,
  }
];

function getRandomEvent() {
  return {
    id: self.crypto.randomUUID(),
    ...getRandomArrayElement(mockEvents)
  };
}

export {getRandomEvent};
