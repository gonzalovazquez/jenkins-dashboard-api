var express = require('express');
var jenkinsapi = require('jenkins-api');

var app = express();
app.set('port', (process.env.PORT || 5000));


// no auth
var jenkins = jenkinsapi.init("https://ci.jenkins.io/");

// Initialized 
app.get('/', function(req, res) {
  res.status(200).send('API available');
});


// GET all jobs
app.get('/api/jobs', function(req, res) {
  jenkins.all_jobs(function(err, data) {
    if (err){ return console.log(err); }
    res.status(200).send(data);
  });
});


// GET specific job
app.get('/api/job/:id', function (req, res) {
  var name = req.params.id;
  jenkins.job_info(name, function(err, data) {
    if (err){ 
      console.log(err);
      return res.status(401).send('No jobs found');
    }
    return res.status(200).send(data);
  });
});

// Run server
app.listen(app.get('port'), function () {
  console.log('Build Health Dashboard API listening on port: http://localhost:' + app.get('port'));
});