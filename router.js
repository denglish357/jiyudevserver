const {
    getPostsHandler
} = require('./handlers/getPostsHandler')

const {
    createPostHandler
} = require('./handlers/createPostHandler')

const {
    upVotePostHandler
} = require('./handlers/upVotePostHandler')

const {
    downVotePostHandler
} = require('./handlers/downVotePostHandler')



exports.router = (app) => {

    app.post('/posts', createPostHandler)


    app.get('/posts', getPostsHandler)

    app.post('/posts/:postId/votes', upVotePostHandler)


    app.delete('/posts/:postId/votes', downVotePostHandler)

}
