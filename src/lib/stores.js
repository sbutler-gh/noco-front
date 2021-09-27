import { writable } from 'svelte/store';

let topics_store = writable([]);

export { topics_store }