namespace SetTypes {
  export type SetType = SetConstructor | WeakSetConstructor
}

const SetTypes = new Set([Set, WeakSet]) as Set<SetTypes.SetType>

export = SetTypes
