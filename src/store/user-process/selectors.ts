import { State } from '../../types/state';
import { AuthorizationStatus, StoreSlice } from '../../const';
import type { User } from '../../types/types';

export const getAuthorizationStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getIsUserStatusLoading = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): boolean => USER_PROCESS.isUserStatusLoading;
export const getUser = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): User | null => USER_PROCESS.user;
export const getIsRegistration = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): boolean => USER_PROCESS.isRegistration;
