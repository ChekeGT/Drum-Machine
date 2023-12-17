import { writable } from "svelte/store";

export let power = writable(true)

export let selectedKey = writable('')