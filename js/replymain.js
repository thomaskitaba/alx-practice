const data = {
  "records": [
    {
      "postId": 1,
      "postTitle": "First Post",
      "comments": [
        {"commentId": 1, "text": "Comment 1",  "reply": [{"replyId": 1, "text": 'reply 1'}]},
        {"commentId": 2, "text": "Comment 2",  "reply": [{"replyId": 2, "text": 'reply 1'}]}
      ]
    },
    {
      "postId": 2,
      "postTitle": "Second Post",
      "comments": [
        {"commentId": 1, "text": "Comment 1", "reply": [{"replyId": 1, "text": 'reply 1'}]},
        {"commentID":2,"text":"aaaaaaaaaaaaaaaaaaa"}

      ]
    },
    {
      "postId": 3,
      "postTitle": "third Post",
      "comments": [
        {"commentId": 1, "text": "Comment 1",
          "reply": [

          ]
        }
      ]
    }
  ]
}

const pid = 3;
const replyLen = 0; // comment length should be sent onChange
const userReply =  {"replyId": '', "text": ''};
const newReply = 'bbbbbbbbbbbbbbbbbbbbbb';
const commentid = 1;
// step 1 textarea  onChange() update newComment
const updatedReply = {
  ...userReply,
  "replyId": replyLen + 1, "text": newReply
}
// step 2 onSubmit   1.udpate the data4   2. send put request using axios
const onSubmit = () => {
  if (pid > 0 && pid <= data.records.length) {

    const updatedData = {
      ...data,
      records: data.records.map((post) => {
        if (post.postId === pid) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment.commentId === commentid) {
                return {
                  ...comment,
                  reply: [
                    ...comment.reply,
                    updatedReply
                  ]
                };
              }
              return comment;
            })
          };
        }
        return post;
      })
    };
    return updatedData;
  } else {
    console.log('error-occurred');
  }
};

console.log(JSON.stringify(onSubmit()));
