Package.describe({
  summary: "Meteor package for my fork of ui-bootstrap's date picker",
  version: "0.0.1",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('urigo:angular-ui-bootstrap-calendar.js');
  api.use('urigo:ngmeteor', 'client');
  // Client files.
  api.add_files('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:angular-ui-bootstrap-calendar');
  api.addFiles('urigo:angular-ui-bootstrap-calendar-tests.js');
});
