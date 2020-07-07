const {
    getClient
} = require('../db')
const objectId = require('mongodb').ObjectId;

exports.downVotePostHandler = async (req, res) => {
    const {
        postId
    } = req.params;
    const client = await getClient();
    const collection = client.collection('posts')
    console.log(postId)
    const post = await collection.findOne({
        _id: new objectId(postId)
    });
    post.votes = (post.votes || 0) - 1;
    await collection.updateOne({
        _id: new objectId(postId)
    }, {
        $set: post
    })
    res.send(post)
}
