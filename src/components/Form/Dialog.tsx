import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useDialog } from '../../contexts/Dialog'

export function Dialog() {
  const {
    disclosure: { isOpen, onClose },
    dispatch,
    state,
  } = useDialog()
  const cancelRef = useRef()

  function handleActionButton() {
    dispatch(state.dispatchObject)

    onClose()
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You cannot undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} colorScheme="whiteAlpha" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={handleActionButton} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
