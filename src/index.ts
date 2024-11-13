#! /usr/bin/env node

import dotenv from 'dotenv';
import yargs from 'yargs/yargs';
import { TestCommand } from './cmd/test';

(async function () {
  dotenv.config();

  const testCommand = new TestCommand();

  yargs(process.argv.slice(2))
    .scriptName('sample')
    .command(testCommand.name, testCommand.describe, testCommand.setOptions, testCommand.execute)
    .help().argv;
})();
