const assert = require('assert')
const { mkdirSync, readFileSync, writeFileSync } = require('fs')
const { set, unset, push } = require("../index.js")
const { test } = require("./util.js")
const { execSync } = require('child_process')


const getJSON = () => JSON.parse(readFileSync(__dirname + '/temp/package.json', 'utf-8'))
const exampleFile = __dirname + '/temp/package.json'
let expect = {
    "keywords": ["foo", "bar", "baz"],
    "scripts": {
        "start": "node"
    },
    "deprecated": false
}

mkdirSync(__dirname + '/temp', { recursive: true })
writeFileSync(exampleFile, JSON.stringify(expect))

test('example exists', () => {
    assert.deepEqual(getJSON(), expect)
})

test('set', () => {
    set(exampleFile, 'scripts/prestart', "run a task")
    expect.scripts.prestart = 'run a task'
    assert.deepEqual(getJSON(), expect)
})

test('unset', () => {
    unset(exampleFile, 'deprecated')
    delete (expect.deprecated)
    assert.deepEqual(getJSON(), expect)
})

test('push', () => {
    push(exampleFile, 'keywords', 'foobar')
    expect.keywords.push('foobar')
    assert.deepEqual(getJSON(), expect)
})

test('cli', () => {
    const cmd = `node ../cli set ${exampleFile} export "{\\"esm\\": \\".\\"}"`
    execSync(cmd, { cwd: __dirname, encoding: 'utf-8' })
    expect.export = { esm: '.' }
    assert.deepEqual(getJSON(), expect)

})