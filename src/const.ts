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

export enum HttpCode {
  NotFound = 404
}

export enum StoreSlice {
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS',
  UserProcess = 'USER_PROCESS',
}
