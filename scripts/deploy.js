var ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/josesalasni/tuturu_frontend_build.git'
}, (err) => {
  console.log(err);
});
