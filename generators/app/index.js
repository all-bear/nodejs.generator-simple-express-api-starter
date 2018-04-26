'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the bedazzling ${chalk.red(
          'generator-simple-express-api-starter'
        )} generator!`
      )
    );

    const prompts = [];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    // TODO compose copy of hidden files, hidden directories and normal files into one copy

    this.fs.copy(this.templatePath('app'), this.destinationPath());

    this.fs.copy(this.templatePath('app/.*'), this.destinationPath());

    this.fs.copy(this.templatePath('app/.*/**'), this.destinationPath());
  }

  install() {
    this.npmInstall();
    this.spawnCommandSync('git', ['init', '--quiet']);
    this.spawnCommandSync('npm', ['run', 'setup']);
  }
};
