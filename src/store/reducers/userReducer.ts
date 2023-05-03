/* eslint-disable indent */
import { SET_USER_NOTIFICATION } from '../actions/user/notifications';
import {
  SET_AUTO_COMPLETE_REGISTER,
  SET_LOGIN_USER,
  SET_USER_INFO,
  SET_USER_FAVORITES,
  ADD_USER_FAVORITE,
  REMOVE_USER_FAVORITE,
  SET_PENDENCES,
  SET_USER_REMEMBER_PRODUCTS,
  ADD_USER_REMEMBER_PRODUCTS,
  REMOVE_USER_REMEMBER_PRODUCTS,
  SET_BACK_LOGIN_SCREEN_LOGIN_PROCESS,
  SET_EMAIL_LOGIN_PROCESS,
  SET_ERROR_LOGIN_PROCESS_MESSAGE,
  SET_IS_CHANGE_PASSWORD,
  SET_IS_CODE_SENT,
  SET_LOGIN_LOADING,
  SET_LOGOUT_USER,
  SHOW_LOGIN_POPUP,
} from '../actions/user/user';
import { SET_NEED_COMPLETE_INFOS, UserAction } from '../../types/userTypes';

/* eslint-disable @typescript-eslint/consistent-type-definitions */
interface AppAbout {
  phone: string;
  terms: {
    terms: string;
    policy: string;
  };
}

interface Filters {
  filters: unknown[];
  selects: Record<string, unknown>;
  isFiltering: boolean;
  filteredItems: unknown[];
  items: unknown[];
  recentTexts: unknown[];
  text: string;
}

interface LoginState {
  email: string;
  isRegister: boolean;
  isLogin: boolean;
  loading: boolean;
  errorMessage: string;
  isCodeSent: boolean;
  isForgot: boolean;
  changePassword: boolean;
  code: string;
}

interface AutoCompleteRegister {
  name: string;
  lastname: string;
}

interface UserInfo {
  favorites: string[];
}

interface UserState {
  email: string;
  isRegister: boolean;
  isLogin: boolean;
  loading: boolean;
  isCodeSent: boolean;
  isForgot: boolean;
  isLogged: boolean;
  user: string;
  cart?: unknown;
  products: unknown[];
  address?: unknown;
  app: {
    about: AppAbout;
  };
  hasTerms: boolean;
  rememberProducts: Record<string, boolean>;
  users: string;
  filters: Filters;
  autoCompleteRegister: AutoCompleteRegister;
  needCompleteInfos: boolean;
  userInfo: UserInfo;
  notifications: unknown[];
  pendences: unknown[];
  rememberProductKeys: string[];
  login: LoginState;
  loginPopup: boolean;
}

export const initialState: UserState = {
  email: '',
  isRegister: false,
  isLogin: false,
  loading: false,
  isCodeSent: false,
  isForgot: false,
  isLogged: false,
  user: '',
  cart: undefined,
  products: [],
  address: undefined,
  app: {
    about: {
      phone: '',
      terms: {
        terms: '',
        policy: '',
      },
    },
  },
  hasTerms: false,
  rememberProducts: { '': false },
  users: '',
  filters: {
    filters: [],
    selects: {},
    isFiltering: false,
    filteredItems: [],
    items: [],
    recentTexts: [],
    text: '',
  },
  autoCompleteRegister: {
    name: '',
    lastname: '',
  },
  needCompleteInfos: false,
  userInfo: {
    favorites: [],
  },
  notifications: [],
  pendences: [],
  rememberProductKeys: [],
  login: {
    email: '',
    isRegister: false,
    isLogin: false,
    loading: false,
    errorMessage: '',
    isCodeSent: false,
    isForgot: false,
    changePassword: false,
    code: '',
  },
  loginPopup: false,
};

export default function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case SET_LOGIN_USER:
      return {
        ...state,
        isLogged: true,
        user: action.user,
        loginPopup: false,
      };
    case SET_AUTO_COMPLETE_REGISTER:
      return {
        ...state,
        autoCompleteRegister: {
          name: action.name,
          lastname: action.lastname,
        },
      };
    case SET_NEED_COMPLETE_INFOS:
      return {
        ...state,
        needCompleteInfos: action.needCompleteInfos,
      };
    case SET_LOGOUT_USER:
      return initialState;
    case SHOW_LOGIN_POPUP:
      return {
        ...state,
        loginPopup: action.loginPopup,
      };
    case SET_BACK_LOGIN_SCREEN_LOGIN_PROCESS:
      return {
        ...state,
        login: {
          ...state.login,
          isRegister: false,
          isLogin: false,
          errorMessage: '',
        },
      };
    case SET_LOGIN_LOADING:
      return {
        ...state,
        login: {
          ...state.login,
          loading: action.loading,
        },
      };
    case SET_EMAIL_LOGIN_PROCESS:
      return {
        ...state,
        login: {
          ...state.login,
          email: action.email,
          isRegister: action.isRegister,
          isLogin: action.isLogin,
        },
      };
    case SET_ERROR_LOGIN_PROCESS_MESSAGE:
      return {
        ...state,
        login: {
          ...state.login,
          errorMessage: action.errorMessage,
        },
      };
    case SET_IS_CODE_SENT:
      return {
        ...state,
        login: {
          ...state.login,
          isCodeSent: action.isCodeSent,
          isForgot: action.isForgot,
        },
      };
    case SET_IS_CHANGE_PASSWORD:
      return {
        ...state,
        login: {
          ...state.login,
          changePassword: action.changePassword,
          code: action.code,
        },
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: {
          ...action.userInfo,
        },
      };
    case SET_USER_FAVORITES:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: action.favorites,
        },
      };
    case ADD_USER_FAVORITE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: [
            ...(state.userInfo.favorites ? state.userInfo.favorites : []),
            action.favorite,
          ],
        },
      };
    case REMOVE_USER_FAVORITE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: state.userInfo.favorites?.filter(
            (id) => id !== action.favorite
          ),
        },
      };
    case SET_USER_NOTIFICATION:
      return {
        ...state,
        notifications:
          action.notifications && action.notifications.reverse
            ? action.notifications.reverse()
            : action.notifications,
      };
    case SET_PENDENCES:
      return {
        ...state,
        pendences: action.pendences,
      };
    case SET_USER_REMEMBER_PRODUCTS:
      return {
        ...state,
        rememberProductKeys: action.rememberProductKeys,
      };
    case ADD_USER_REMEMBER_PRODUCTS:
      return {
        ...state,
        rememberProductKeys: [
          ...(state.rememberProductKeys ? state.rememberProductKeys : []),
          action.key,
        ],
      };
    case REMOVE_USER_REMEMBER_PRODUCTS:
      return {
        ...state,
        rememberProductKeys: state.rememberProductKeys?.filter(
          (f) => f !== action.key
        ),
      };
    default:
      return state;
  }
}