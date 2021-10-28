const test = async (msg, cb) => {
    try {
        await cb()
        console.log(msg, '✅')
    } catch (err) {
        console.log(msg, '❌')
        console.error(err)
    }
}

module.exports = { test }