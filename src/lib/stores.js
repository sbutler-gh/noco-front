import { writable } from 'svelte/store';

let topics_store = writable([]);

let selected_topic_store = writable([]);

export { topics_store, selected_topic_store }