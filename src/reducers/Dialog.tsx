import { destroyAccount } from '../services/account'

type initialStateProps = {
  fn: any
  dispatchObject: {}
}

export const initialState: initialStateProps = {
  fn: () => {},
  dispatchObject: {},
}

const dialogActions = {
  destroyAccount: destroyAccount,
  dispatchObject: 'dispatchObject',
}

export function reducer(state: any, action: any) {
  switch (action.type) {
    case dialogActions.dispatchObject:
      return { dispatchObject: action.payload }

    case dialogActions.destroyAccount:
      destroyAccount(action.uuid).then()

      return { ...state }

    default:
      break
  }
}
