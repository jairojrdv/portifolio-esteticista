import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formata número de telefone brasileiro
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Valida email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Scroll suave para seção específica
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Gera URL do WhatsApp com mensagem pré-definida
 */
export function getWhatsAppUrl(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const encodedMessage = message ? encodeURIComponent(message) : ''
  return `https://wa.me/55${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`
}
