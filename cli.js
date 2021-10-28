#!/usr/bin/env node

const { program } = require('commander')
const { push, set, unset } = require('./index.js')

program
    .command('set')
    .argument('file', 'the file to modify')
    .argument('path', 'slash separated path to the key, eg. scripts/dev')
    .argument('value', 'value to be set')
    .action(set)

program
    .command('unset')
    .argument('file', 'the file to modify')
    .argument('path', 'slash separated path to the key, eg. scripts/dev')
    .action(unset)

program
    .command('push')
    .argument('file', 'the file to modify')
    .argument('path', 'slash separated path to the key, eg. scripts/dev')
    .argument('value', 'value to be pushed')
    .action(push)

program.parse()