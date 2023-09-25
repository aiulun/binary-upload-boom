const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      // Upload image to cloudinary
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        createdByName: req.user.userName,
        createdById: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Find comment by id
      const comment = await Comment.deleteOne({ _id: req.params.commentid });

      console.log("Deleted Comment");
      res.redirect("/post/"+req.params.postid);
    } catch (err) {
      res.redirect("/post/"+req.params.postid);
    }
  },
};
