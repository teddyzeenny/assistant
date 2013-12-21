module.exports = {
  app: {
    src: [
      'tmp/transpiled/app/routes/mixins/*.js',
      'tmp/transpiled/app/controllers/mixins/*.js',
      'tmp/transpiled/app/**/*.js'
    ],
    dest: 'tmp/result/assets/app.js',
    options: {
      sourcesContent: true
    },
  },

  test: {
    src: 'tmp/transpiled/tests/**/*.js',
    dest: 'tmp/result/tests/tests.js',
    options: {
      sourcesContent: true
    }
  }
};
