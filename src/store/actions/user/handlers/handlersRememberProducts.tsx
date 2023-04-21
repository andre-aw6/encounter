import { openPopupModal } from '../../info';
import { rememberMe } from '../../../../graphql';
import { handleShowNotification } from '../../notification';
import { UserRememberProductsAction } from './handlersTypes';
import {
  addUserRememberProducts,
  getState,
  removeUserRememberProducts,
} from './handlerProducts';

export function handleRememberProduct(key: string) {
  return async (
    dispatch: (
      action:
        | UserRememberProductsAction
        | ReturnType<typeof handleShowNotification>
        | ReturnType<typeof openPopupModal>
    ) => void
  ) => {
    const { user } = getState();
    const { isLogged = false, rememberProductKeys = [] } = user;
    if (!isLogged) {
      dispatch(openPopupModal('LOGIN_POPUP'));
      return;
    }
    rememberMe(key);
    if (!rememberProductKeys.includes(key)) {
      dispatch(handleShowNotification('Aviso adicionado!'));
      dispatch(addUserRememberProducts(key));
    } else {
      dispatch(handleShowNotification('Aviso removido!'));
      dispatch(removeUserRememberProducts(key));
    }
    await Promise.all(
      [
        handleShowNotification,
        addUserRememberProducts,
        removeUserRememberProducts,
      ].map((action) => dispatch(action))
    );
  };
}
