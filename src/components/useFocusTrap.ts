import { useEffect, useRef } from 'react'

export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    // Save the current active element to restore focus later
    const previousActiveElement = document.activeElement as HTMLElement

    // Get all focusable elements inside the container
    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Focus the first element when the trap is activated
    if (firstElement) {
      setTimeout(() => firstElement.focus(), 50)
    }

    // Handle tab key to keep focus within the container
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      // If shift + tab and the active element is the first focusable element, move to the last
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } 
      // If tab and the active element is the last focusable element, move to the first
      else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    // Add event listener for keydown events
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      // Remove event listener and restore focus when the trap is deactivated
      document.removeEventListener('keydown', handleKeyDown)
      if (previousActiveElement) {
        previousActiveElement.focus()
      }
    }
  }, [isActive])

  return containerRef
}
