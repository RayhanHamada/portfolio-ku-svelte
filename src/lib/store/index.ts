import { writable } from 'svelte/store';

/**
 * true => dark
 * false => light
 */
export const isDark = writable(true);
