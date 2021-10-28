const { readFileSync, writeFileSync } = require('fs')

const sanitizeJson = value => {
    try { value = JSON.parse(value) } catch (err) { }
    return value
}

const getTarget = (json, rawPath) => {
    const path = rawPath.split('/')
    let key = path.pop(), traverse, target = json
    while (traverse = path.shift()) target = target[traverse]
    return { target, key }
}

const editFile = callback => (file, rawPath, value) => {
    const json = JSON.parse(readFileSync(file, 'utf-8'))
    value = sanitizeJson(value)
    const { target, key } = getTarget(json, rawPath)
    callback(target, key, value)
    writeFileSync(file, JSON.stringify(json, null, 2))
}

const _set = (target, key, value) => target[key] = value

const _unset = (target, key) => delete (target[key])

const _push = (target, key, value) => target[key].push(value)

const unset = editFile(_unset)
const set = editFile(_set)
const push = editFile(_push)

module.exports = { _set, _unset, _push, unset, set, push }