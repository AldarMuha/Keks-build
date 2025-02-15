import { Address, Review, SortName } from './types/types';

export enum AppRoute {
  Root = '/',
  Catalog = '/Catalog',
  Favorites = '/Favorites',
  NotPage = '/404',
  Login = '/LogIn',
  Registre = '/SignUp',
  ErrorPage = '/ErrorPage',
  ProductPage = '/ProductPage',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
}

export enum RegistrationStatus {
  Registration = 'REGISTRATION',
  NoRegistration = 'NO_REGISTRATION',
}

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401,
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}

export enum Sorting {
  DateAscending = 'DateAscending',
  DateDescending = 'DateDescending',
}

export enum FilterRating {
  Any = 'Any',
  High = 'High',
  Short = 'Short',
}

export const Comparator: {
  [key in SortName]: (a: Review, b: Review) => number;
} = {
  DateAscending: (a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime(),
  DateDescending: (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime(),
};

export const addressesNames = ['confectionery-1', 'confectionery-2', 'factory'];

export const addresses: Address[] = [
  {
    id: 1,
    name: 'confectionery-1',
    location: {
      latitude: 59.970969,
      longtitude: 30.316252,
      iconMarker: 'img/content/map-marker2.svg',
    },
    textContent: {
      name: 'Кондитерская 1',
      location: 'Морской пр. 2А',
    }
  },
  {
    id: 2,
    name: 'confectionery-2',
    location: {
      latitude: 59.967947,
      longtitude: 30.274708,
      iconMarker: 'img/content/map-marker2.svg',
    },
    textContent: {
      name: 'Кондитерская 2',
      location: 'Морской пр. 2А',
    }
  },
  {
    id: 3,
    name: 'factory',
    location: {
      latitude: 59.960380,
      longtitude: 30.308725,
      iconMarker: 'img/content/map-marker1.svg',
    },
    textContent: {
      name: 'Производство',
      location: 'Морской пр. 2А',
    }
  },

];
