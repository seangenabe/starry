import camelCase = require('lodash.camelcase')
import RootPackage = require('./root-package')
import PackageInfo = require('./package-info')
import Package = require('./package')
import ContainerPackage = require('./container-package')
import _FS = require('mz/fs')
const FS = _FS as any
import loudRejection = require('loud-rejection')

class SetupRunner {

  root: RootPackage

  constructor() {
  }

  async run() {
    // Get all packages
    let packagePaths: string[] =
      await FS.readdir(`${__dirname}/../../packages`)

    // Exclude "container" package (`starry`)
    packagePaths = packagePaths.filter(x => x !== 'starry')

    const packages = await Promise.all(packagePaths.map(p => this.extractPackageInfo(p)))

    this.root = new RootPackage({ packages })

    await Promise.all([
      this.setupContainerPackage(packages),
      this.setupIndividualPackages(packages),
      this.root.run()
    ])
  }

  async extractPackageInfo(require_id: string): Promise<PackageInfo> {
    let require_base = require_id.replace(/^starry\./, '')
    let is_private = require_base.startsWith('_')
    let fn_name = camelCase(require_base)
    let require_path = `${RootPackage.path}/packages/${require_id}`
    let package_json_path = `${require_path}/package.json`
    let package_src_json_path = `${require_path}/package-src.json`
    let doc_md_path = `${require_path}/doc.md`
    let doc_md = await FS.readFile(doc_md_path, 'utf8')

    return {
      require_id,
      require_base,
      is_private,
      fn_name,
      require_path,
      package_json_path,
      package_src_json_path,
      doc_md_path,
      doc_md
    }
  }

  async setupIndividualPackages(packages: PackageInfo[]): Promise<void> {
    await Promise.all(packages.map(pkg => {
      const opts = Object.assign({ root: this.root }, pkg)
      const x = new Package(opts)
      return x.run()
    }))
  }

  async setupContainerPackage(packages: PackageInfo[]): Promise<void> {
    const x = new ContainerPackage({
      packages,
      rootPath: RootPackage.path
    })
    await x.run()
  }

} // SetupRunner

loudRejection()
;(async () => {
  try {
    await new SetupRunner().run()
  }
  catch (err) {
    console.error(err.stack)
    process.exit(1)
  }
})()
