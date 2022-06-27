type initialStateProps = {
  fn: any
  dispatchObject: {}
}

export const initialState: initialStateProps = {
  fn: () => {},
  dispatchObject: {},
}

const dialogActions = {
  asyncMutation: 'asyncMutation',
  dispatchObject: 'dispatchObject',
}

type Action = {
  type: string
  payload: {
    fn: Function
    param?: any
  }
}

export function reducer(state: any, action: Action) {
  switch (action.type) {
    case dialogActions.dispatchObject:
      console.log('eu to aki');
      
      return { dispatchObject: action.payload }

    case dialogActions.asyncMutation:
      action.payload.fn(action.payload.param)

      return state

    default:
      return state
  }
}
