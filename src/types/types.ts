import { addressesNames, Sorting } from '../const';

export type SortName = keyof typeof Sorting;

export type Product = {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type ProductId = {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: [string];
  weight: number;
  rating: number;
  reviewCount: number;
}

export type Category = {
  category: string;
  types: [string];
}

//export type FavoriteAuth = Pick<

export type Review = {
  id: string;
  isoDate: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  positive: string;
  negative: string;
  rating: number;
}

export type NewReview = Pick<Review, 'positive' | 'negative' | 'rating'> & Pick<Product, 'id'>;

export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
}

export type UserAvatar = {
  avatarUrl: string;
}

export type UserRegistration = {
  name: string;
  email: string;
  password: string;
}

export type UserAuth = {
  email: string;
  password: string;
}

export type AddressName = typeof addressesNames[number];

export type Location = {
  latitude: number;
  longtitude: number;
  iconMarker: string;
}

export type TextContent = {
  name: string;
  location: string;
}

export type Address = {
  id: number;
  name: AddressName;
  location: Location;
  textContent: TextContent;
}
