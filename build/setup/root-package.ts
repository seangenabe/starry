import PackageJson = require('./package-json-schema')
import PackageInfo = require('./package-info')
import _FS = require('mz/fs')
const FS = _FS as any
import normalizeEOLEOF = require('./normalize-eol-eof')

/**
 * Represents the root of the monorepo. Encapsulates changes made to files at the monorepo level.
 */
class RootPackage {

  static readonly path: string = `${__dirname}/../..`
  static readonly pkgPath: string = require.resolve(`${RootPackage.path}/package`)
  static readonly pkg: PackageJson = require(RootPackage.pkgPath)
  packages: PackageInfo[]

  constructor(opts: { packages: PackageInfo[] }) {
    Object.assign(this, opts)
  }

  async run() {
    await this.api_md()
  }

  async api_md(): Promise<void> {
    const docs: { fn_name: string, doc_md: string }[] =
      this.packages.filter(p => !p.is_private)

    const docsString = docs.map(({ fn_name, doc_md }) => {
      return `\n## ${fn_name}\n\n${doc_md}`
    }).join('')
    const content = `# API\n${docsString}`
    await FS.writeFile(
      `${RootPackage.path}/API.md`,
      normalizeEOLEOF(content)
    )
  }
}

export = RootPackage
