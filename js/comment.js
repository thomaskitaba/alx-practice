const data = {
  "records": [
    {
      "postId": 1,
      "postTitle": "First Post",
      "comments": [
        {"commentId": 1, "text": "Comment 1"},
        {"commentId": 2, "text": "Comment 2"}
      ]
    },
    {
      "postId": 2,
      "postTitle": "Second Post",
      "comments": [
        {"commentId": 1, "text": "Comment 1"},
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
const commentLen = 1; // comment length should be sent onChange
const userComment =  {"commentId": '', "text": ''};
const newComment = 'bbbbbbbbbbbbbbbbbbbbbb';
const commentid = 1;
// step 1 textarea  onChange() update newComment
const updatedComment = {
  ...userComment,
  "commentId": commentLen, "text": newComment
}

// step 2 onSubmit   1.udpate the data4   2. send put request using axios
const onSubmit = () => {
  if (pid > 0 && pid <= data.records.length) {

    const updatedData = {
      ...data,
      records: data.records.map((post) => {
        if (post.postId === pid){
          return {
            ...post,
            comments: [
              ...post.comments,
              {'commentID': post.comments.length + 1, 'text': newComment}
            ]

          }
        }
        return post;

      })

    }
    console.log(updatedData);
    console.log(JSON.stringify(updatedData));
  } else {
    console.log('error-occured');
  }

  }


console.log(updatedComment);
console.log("-----------------------");
onSubmit();
