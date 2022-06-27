import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from 'react'
import { initialState, reducer } from '../reducers/Dialog'

interface DialogProviderProps {
  children: ReactNode
}

type DialogContextData = {
  disclosure: UseDisclosureReturn
  dispatch: Dispatch<any>
  state: any
}

const DialogContext = createContext<DialogContextData>({} as DialogContextData)

export function DialogProvider({ children }: DialogProviderProps) {
  const disclosure = useDisclosure()
  const memoizerReducer = useCallback(reducer, [])
  const [state, dispatch] = useReducer(memoizerReducer, initialState)

  return (
    <DialogContext.Provider value={{ disclosure, dispatch, state }}>
      {children}
    </DialogContext.Provider>
  )
}

export const useDialog = () => useContext(DialogContext)
