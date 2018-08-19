export type SetType = SetConstructor | WeakSetConstructor

/**
 * A set containing the set types (`Set`, `WeakSet`).
 */
export const setTypes = new Set([Set, WeakSet]) as Set<SetType>

export default setTypes
