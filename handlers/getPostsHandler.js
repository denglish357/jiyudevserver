const {
    getClient
} = require('../db')

exports.getPostsHandler = async (req, res) => {
    const client = await getClient()
    const collection = client.collection('posts')
    const posts = await collection.find({}).toArray()
    res.send(posts)
}
