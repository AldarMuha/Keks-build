export type Product = {
  id: string;
  title: string;
  category: string;
  type: [string];
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
  type: [string];
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

export type NewReview = {
  positive: string;
  negative: string;
  rating: number;
}

export type User = {
  name: string;
  email: string;
  avatarUrl: string;
  token: string;
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
