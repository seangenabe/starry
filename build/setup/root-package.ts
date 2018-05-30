import _FS = require('mz/fs')
const FS = _FS as any
import encode = require('encody')
import chalk = require('chalk')
import IPackageJson from './package-json-schema';
import PackageInfo from './package-info';
import renderShields from './render-shields';
import normalizeEOLEOF from './normalize-eol-eof';

function log(msg) {
  msg = chalk`{magenta root package} ${msg}`
  console.error(msg)
}

/**
 * Represents the root of the monorepo. Encapsulates changes made to files at the monorepo level.
 */
class RootPackage {

  static readonly path: string = `${__dirname}/../..`
  static readonly pkgPath: string = require.resolve(`${RootPackage.path}/package`)
  static readonly pkg: IPackageJson = require(RootPackage.pkgPath)
  packages: PackageInfo[]

  constructor(opts: { packages: PackageInfo[] }) {
    Object.assign(this, opts)
  }

  async run() {
    await this.api_md()
  }

  async api_md(): Promise<void> {
    const packages: PackageInfo[] = this.packages.filter(p => !p.is_private)

    const docsString = packages.map(({ fn_name, doc_md, require_id }) => {
      const shieldsStr = renderShields([[
        'npm',
        encode`npm/v/${require_id}`,
        encode`https://www.npmjs.com/package/${require_id}`
      ]])
      return `\n## ${fn_name}\n\n${shieldsStr}\n\n${doc_md}`
    }).join('')
    const content = `# API\n${docsString}`
    await FS.writeFile(
      `${RootPackage.path}/API.md`,
      normalizeEOLEOF(content)
    )
  }

} // RootPackage

export default RootPackage
