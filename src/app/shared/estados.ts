export const ESTADOS = ['nuevo', 'abierto', 'pendiente', 'en espera', 'resuelto', 'cerrado'] as const;

export type Estado = (typeof ESTADOS)[number];
