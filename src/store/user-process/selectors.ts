import { State } from '../../types/state';
import { AuthorizationStatus, StoreSlice } from '../../const';

export const getAuthorizationStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getIsUserStatusLoading = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): boolean => USER_PROCESS.isUserStatusLoading;
