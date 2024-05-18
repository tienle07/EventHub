export interface EventModel {
  __v: number;
  _id: string;
  authorId: string;
  category: string;
  createdAt: string;
  description: string;
  endAt: string;
  locationAddress: string;
  locationTitle: string;
  photoUrl: string;
  position: Position;
  price: string;
  startAt: string;
  title: string;
  updatedAt: string;
  users: any[];
}

export interface Position {
  _id: string;
  lat: number;
  long: number;
}
