interface Window {
  initialReduxState: any
}

declare interface ServiceWorkerConfig {
  onSuccess: (registration: ServiceWorkerRegistration) => void
  onUpdate: (registration: ServiceWorkerRegistration) => void
}

declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.svg';
