import { State } from '../../types/state';
import { StoreSlice } from '../../const';

export const getShownCards = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): number => SITE_PROCESS.shownCards;

export const getCategory = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string => SITE_PROCESS.activeCategory;
