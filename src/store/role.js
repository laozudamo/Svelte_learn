import { writable, derived } from "svelte/store";
import { num } from "./num"

const jack = derived(num, $num => $num * 2)

const createRole = () => {
  const { subscribe, set, update } = writable('admin');
  return {
    subscribe,
    set: (role) => set(role),
  };
}

const createName = () => {
  const { subscribe, set, update } = writable('');
  return {
    subscribe,
    set: (name) => set(name),
  };
}

const role = createRole()
const name = createName()

export {
  role,
  name,
  jack,
}
