export type SetType = SetConstructor | WeakSetConstructor

export default new Set([Set, WeakSet]) as Set<SetType>
