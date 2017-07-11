interface PackageJson {
  name: string,
  version: string
  main?: string
  description: string
  homepage?: string | object
  license?: string | object
  engines?: object
  keywords?: string[]
  repository?: string | object
  scripts?: { [scriptKey: string]: string }
  dependencies?: { [dep: string]: string }
  devDependencies?: { [dep: string]: string }
}

export = PackageJson
