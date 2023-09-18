module.exports = {
  root: true,
  env: {
    node: true
  },
  files: ['*.vue'],
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'off' // 添加这一行来禁用 vue/no-unused-components 规则
    ,
    'vue/valid-v-for': 'off'
  },
};
