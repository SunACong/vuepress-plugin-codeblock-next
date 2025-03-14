import { defineBuildConfig, BuildEntry } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      input: 'src/node/index',
      name: 'node/index'
    },
    {
      input: 'src/client/',
      outDir: 'dist/client/'
    }
  ],
  clean: true,
  declaration: true,
  externals: [
    'globby',
    'unicorn-magic',
    '@vuepress/utils',
    'debug',
    'fs-extra',
    'hash-sum',
    'ora',
    'picocolors',
    'upath',
    'chalk',
    'cli-cursor',
    'cli-spinners',
    'log-symbols',
    'strip-ansi',
    'string-width',
    'is-interactive',
    'is-unicode-supported',
    'stdin-discarder',
    'restore-cursor',
    'get-east-asian-width',
    'emoji-regex',
    'ansi-regex',
    'supports-color',
    'universalify',
    'graceful-fs',
    'onetime',
    'signal-exit',
    'ms',
    'mimic-function',
    'jsonfile'
  ],
  rollup: {
    emitCJS: true,
  },
  failOnWarn: false
})
