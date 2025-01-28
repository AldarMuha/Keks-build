import { FilterRating } from '../const';

function getRandomPositiveInteger(a: number, b: number) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomArrayElement<T>(arr: T[]) {
  return arr[getRandomPositiveInteger(0, arr.length - 1)];
}

function getRandomArrayElements<T>(count: number, array: T[]): T[] {
  const set = new Set<number>();

  while (set.size < count) {
    const element = getRandomArrayElement<T>(array);
    set.add(array.indexOf(element));
  }

  const newArr = Array.from(set).map((i) => array[i]);

  return newArr;

  // for (let i = 0; i < array.length; i++) {
  //   if (newArray.length >= count) {
  //     break;
  //   }

  //   const element = getRandomArrayElement(array);

  //   set.add(element);

  //   if (newArray.length > 0 && !(newArray.some((newArrayElement) => newArrayElement === element))) {
  //     newArray.push(element);
  //   }

  //   if (newArray.length >= count) {
  //     return newArray;
  //   }
  // }

  // return newArray;
}


function translateCategory(category: string) {
  let categoryItem = category;
  switch (category) {
    case 'bisque':
      categoryItem = 'Бисквит';
      break;
    case 'cheesecake':
      categoryItem = 'Чизкейк';
      break;
    case 'shortbread':
      categoryItem = 'Песочное';
      break;
    case 'dessert':
      categoryItem = 'Десерт';
      break;
    default:
      categoryItem = category;
  }
  return categoryItem;
}

function translateTypes(type: string) {
  let typeItem = type;
  switch (type) {
    case 'chocolate':
      typeItem = 'Шоколадный';
      break;
    case 'vanilla':
      typeItem = 'Ванильный';
      break;
    case 'vegetarian':
      typeItem = 'Вегетерианский';
      break;
    case 'honey-cake':
      typeItem = 'Медовый';
      break;
    case 'lemon':
      typeItem = 'Лимонный';
      break;
    case 'new-york':
      typeItem = 'Нью-Йорк';
      break;
    case 'tart':
      typeItem = 'Тарт';
      break;
    case 'funnel-cake':
      typeItem = 'Воронкообразный';
      break;
    case 'basket-cake':
      typeItem = 'Корзинка';
      break;
    case 'chocolate-muffin':
      typeItem = 'Шоколадный кекс';
      break;
    case 'brand-muffin':
      typeItem = 'Фирменный кекс';
      break;
    default:
      typeItem = type;
  }
  return typeItem;
}

function translateFilterRating(filterRating: string) {
  let filterRatingItem = filterRating;
  switch (filterRating) {
    case FilterRating.Any:
      filterRatingItem = 'Любой';
      break;
    case FilterRating.High:
      filterRatingItem = 'Высокий';
      break;
    case FilterRating.Short:
      filterRatingItem = 'Низкий';
      break;
    default:
      filterRatingItem = filterRating;
  }
  return filterRatingItem;
}

export { getRandomArrayElement, translateCategory, translateTypes, getRandomArrayElements, translateFilterRating };
