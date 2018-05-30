import { EOL } from 'os'
import _FS = require('mz/fs')
import PackageInfo from './package-info';
import IPackageJson from './package-json-schema';
import IPublicDocItem from './public-doc-item';
import outputJSON from './output-json';
import normalizeEOLEOF from './normalize-eol-eof';
const FS = _FS as any

/**
 * Encapsulates changes made on the container package `packages/starry`.
 */
class ContainerPackage {

  packages: PackageInfo[]
  rootPath: string
  pkgPath: string
  pkg: IPackageJson

  constructor(opts: { packages: PackageInfo[], rootPath: string }) {
    Object.assign(this, opts)
    this.pkgPath = require.resolve(`${this.rootPath}/packages/starry/package`)
    this.pkg = require(this.pkgPath)
  }

  async run() {
    const dependencies: { [key: string]: string } = {}
    const indexExports: [string, string][] = []
    const publicDocs: IPublicDocItem[] = []

    for (const info of this.packages) {
      const {
        is_private,
        package_json_path,
        doc_md,
        fn_name,
        require_id
      } = info

      if (is_private) {
        continue
      }

      // Add package to dependencies
      let version: string
      try {
        version = require(package_json_path).version
        if (!version) {
          throw new Error()
        }
      }
      catch (err) {
        version = '0.0.0'
      }
      dependencies[require_id] = `^${version}`

      // Add to exports
      indexExports.push([fn_name, require_id])
    } // for info

    // Save dependencies
    Object.assign(this.pkg.dependencies, dependencies)

    await Promise.all([
      this.package_json(),
      this.index_js(indexExports)
    ])
  } // run

  async package_json() {
    await FS.writeFile(this.pkgPath, outputJSON(this.pkg))
  }

  async index_js(indexExports) {
    const lines = indexExports.map(([fn_name, require_id]) => `${JSON.stringify(fn_name)}: require(${JSON.stringify(require_id)})`).join(EOL)
    const content = `module.exports = {\n${lines}\n}`
    await FS.writeFile(
      `${this.rootPath}/packages/starry/index.js`,
      normalizeEOLEOF(content)
    )
  }

} // class ContainerPackage

export default ContainerPackage
