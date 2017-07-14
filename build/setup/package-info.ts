class PackageInfo {
  /** The full name of the package, e.g. `starry.map`. */
  require_id: string
  /** The name of the package without the prefix, e.g. `map`. */
  require_base: string
  /** If the package is private. Documentation of private packages are hidden. */
  is_private: boolean
  /** The name of the package when called as a function, e.g. for `starry.set-equals`, `setEquals`. */
  fn_name: string
  /** The absolute path to the directory of the package. */
  require_path: string
  /** The absolute path to the package.json file of the package. */
  package_json_path: string
  /** The absolute path to the package-src.json file of the package. */
  package_src_json_path: string
  /** The contents of the doc.md file of the package. */
  doc_md: string
  /** The absolute path to the doc.md file of the package. */
  doc_md_path: string
}

export = PackageInfo
