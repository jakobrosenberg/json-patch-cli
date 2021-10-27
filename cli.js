#!/usr/bin/env node

import { program } from 'commander'
import { push, set, unset } from './index.js'

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