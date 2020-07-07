const {
    getClient
} = require('../db')

exports.createPostHandler = async (req, res) => {
    const client = await getClient()
    const collection = client.collection('posts')
    const result = await collection.insertOne({
        ...req.body,
        votes: 0
    })
    res.send(result.ops[0])
}
