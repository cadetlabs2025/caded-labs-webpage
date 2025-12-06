/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Consultation request form data
 */
export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  designation?: string;
  country?: string;
  service?: string;
  product?: string;
}

/**
 * Response type for /api/send-consultation
 */
export interface ConsultationResponse {
  success: boolean;
  message: string;
}
