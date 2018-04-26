const express = require('express');
const phaseControl = require('phase-control');

const app = phaseControl(express());

app.phase('initialize app', './initializers');
app.phase('initialize model schemas', './models');
app.phase('initialize routes', './routes');
app.phase('initialize middleware', './middleware');
