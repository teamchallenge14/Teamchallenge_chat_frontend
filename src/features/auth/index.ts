/**
 * Public API for the "Auth" feature.
 *
 * This file acts as a barrier: external modules should only import
 * from here, not directly from internal folders (model/ui).
 */

// --- Model: Logic, State & Types ---
// Expose the custom hook for form logic and validation
export { useLoginForm } from './model/use-login-form';

// Expose the form data type to ensure type-safe integration
export type { LoginValues } from './model/login-schema';

// --- UI: Visual Components ---
// TODO: Export the main UI component once created
// export { LoginForm } from "./ui/login-form";
