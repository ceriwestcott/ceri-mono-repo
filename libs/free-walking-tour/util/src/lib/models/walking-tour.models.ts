export interface WalkingTour {
  tourName: string;
  tourDescription: string;
  tourPrice: number;
  tourDuration: string;
  tourLocation: string;
  tourId: string;
  tourDate?: string;
}

export const WalkingTourMock: WalkingTour[] = [
  {
    tourName: 'Tour 1',
    tourDescription: 'Tour 1 Description',
    tourPrice: 10,
    tourDuration: '2 hours',
    tourLocation: 'Location 1',
    tourId: '1',
    tourDate: '2021-01-01',
  },
  {
    tourName: 'Tour 2',
    tourDescription: 'Tour 2 Description',
    tourPrice: 20,
    tourDuration: '3 hours',
    tourLocation: 'Location 2',
    tourId: '2',
    tourDate: '2021-01-01',
  },
  {
    tourName: 'Tour 3',
    tourDescription: 'Tour 3 Description',
    tourPrice: 30,
    tourDuration: '4 hours',
    tourLocation: 'Location 3',
    tourId: '3',
    tourDate: '2021-01-01',
  },
];
