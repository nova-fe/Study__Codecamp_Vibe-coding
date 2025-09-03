'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  modalContent: ReactNode | null
  setModalContent: (content: ReactNode) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

interface ModalProviderProps {
  children: ReactNode
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const contextValue: ModalContextType = {
    isOpen,
    openModal,
    closeModal,
    modalContent,
    setModalContent,
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isOpen && typeof window !== 'undefined' && (
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* 백드롭 */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            />
            {/* 모달 컨테이너 - max-w-md, w-full 제거됨 */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 m-4">
              {modalContent}
            </div>
          </div>,
          document.body
        )
      )}
    </ModalContext.Provider>
  )
}
