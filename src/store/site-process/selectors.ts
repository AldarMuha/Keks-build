import { State } from '../../types/state';
import { FilterRating, Sorting, StoreSlice } from '../../const';

export const getShownCards = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): number => SITE_PROCESS.shownCards;

export const getCategory = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string => SITE_PROCESS.activeCategory;

export const getTypes = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string[] => SITE_PROCESS.activeTypes;

export const getSorting = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): Sorting => SITE_PROCESS.sorting;

export const getFilterRating = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): FilterRating => SITE_PROCESS.filterRating;
