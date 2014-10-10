Package.describe({
  summary: "Meteor package for my fork of ui-bootstrap's date picker",
  version: "0.0.3",
  git: "https://github.com/Urigo/meteor-angular-ui-bootstrap-calendar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  //api.addFiles('urigo:angular-ui-bootstrap-calendar.js');
  api.use('urigo:ngmeteor@0.4.2', 'client');
  // Client files.
  api.addFiles('ui-bootstrap-tpls.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-ui-bootstrap-calendar');
  api.addFiles('urigo:angular-ui-bootstrap-calendar-tests.js');
});
