
import Comment from '../model/comment.js';


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    console.log("hit on comment  delete rtoute",request.params.id);
    try {
        const comment = await Comment.findByIdAndRemove(request.params.id);
        // await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}