export const SHOW_LOGIN_POPUP = 'SHOW_LOGIN_POPUP';
export const SET_LOGOUT_USER = 'SET_LOGOUT_USER';
export const SET_NEED_COMPLETE_INFOS = 'SET_NEED_COMPLETE_INFOS';
export const SET_LOGIN_USER = 'SET_LOGIN_USER';
export const SET_IS_CODE_SENT = 'SET_IS_CODE_SENT';
export const SET_IS_CHANGE_PASSWORD = 'SET_IS_CHANGE_PASSWORD';
export const SET_EMAIL_LOGIN_PROCESS = 'SET_EMAIL_LOGIN_PROCESS';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const SET_ERROR_LOGIN_PROCESS_MESSAGE =
  'SET_ERROR_LOGIN_PROCESS_MESSAGE';
export const SET_BACK_LOGIN_SCREEN_LOGIN_PROCESS =
  'SET_BACK_LOGIN_SCREEN_LOGIN_PROCESS';

export const SET_AUTO_COMPLETE_REGISTER = 'SET_AUTO_COMPLETE_REGISTER';
//FAVORITES
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_USER_FAVORITES = 'SET_USER_FAVORITES';
export const ADD_USER_FAVORITE = 'ADD_USER_FAVORITE';
export const REMOVE_USER_FAVORITE = 'REMOVE_USER_FAVORITE';
export const SET_PENDENCES = 'SET_PENDENCES';
export const SET_USER_REMEMBER_PRODUCTS = 'SET_USER_REMEMBER_PRODUCTS';
export const ADD_USER_REMEMBER_PRODUCTS = 'ADD_USER_REMEMBER_PRODUCTS';
export const REMOVE_USER_REMEMBER_PRODUCTS = 'REMOVE_USER_REMEMBER_PRODUCTS';

export interface SetAutocompleteRegisterAction {
  type: typeof SET_AUTO_COMPLETE_REGISTER;
  name: string;
  lastname: string;
}

export interface SetUserInfoAction {
  type: typeof SET_USER_INFO;
  userInfo: any; // replace with interface for user info
}

export interface SetFavoritesAction {
  type: typeof SET_USER_FAVORITES;
  favorites: any[]; // replace with interface for favorites
}

export interface AddUserFavoriteAction {
  type: typeof ADD_USER_FAVORITE;
  favorite: any; // replace with interface for favorite
}

export interface RemoveUserFavoriteAction {
  type: typeof REMOVE_USER_FAVORITE;
  favorite: any; // replace with interface for favorite
}

export interface SetPendencesAction {
  type: typeof SET_PENDENCES;
  pendences: any[]; // replace with interface for pendences
}

export interface SetUserRememberProductsAction {
  type: typeof SET_USER_REMEMBER_PRODUCTS;
  rememberProductKeys: string[];
}

export interface AddUserRememberProductsAction {
  type: typeof ADD_USER_REMEMBER_PRODUCTS;
  rememberProductKeys: string[];
}

export interface RemoveUserRememberProductsAction {
  type: typeof REMOVE_USER_REMEMBER_PRODUCTS;
  rememberProductKeys: string[];
}

export interface UserRememberProducts {
  [key: string]: boolean;
}

export interface UploadImageSuccessAction {
  type: 'UPLOAD_IMAGE_SUCCESS';
  payload: string;
}

export interface UploadImageFailureAction {
  type: 'UPLOAD_IMAGE_FAILURE';
  payload: Error;
}

export interface RespondQuestionAction {
  type: 'RESPOND_QUESTION';
  payload: Error;
}

export interface OpenPopupModalAction {
  type: 'OPEN_POPUP_MODAL';
  typeOfModal: any;
  payload?: any;
}

export interface SetLoginLoading {
  type: 'SET_LOGIN_LOADING';
  typeOfModal: any;
  payload?: any;
}

export type UserAction =
  | SetAutocompleteRegisterAction
  | SetUserInfoAction
  | SetFavoritesAction
  | AddUserFavoriteAction
  | RemoveUserFavoriteAction
  | SetPendencesAction
  | SetUserRememberProductsAction
  | AddUserRememberProductsAction
  | RemoveUserRememberProductsAction
  | UploadImageSuccessAction
  | UploadImageFailureAction
  | RespondQuestionAction
  | OpenPopupModalAction
  | SetLoginLoading;