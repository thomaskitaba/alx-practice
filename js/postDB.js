
const currentDay = '22-11-2024';
// const thisDay = new Date().toISOString().slice(0, 10);
console.log(new Date().toISOString().slice(0, 10));

const Data = {
    "record": {
      "posts": [
        {
          "id": 1,
          "title": "First Post",
          "content": "This is the content of the first post.",
          "author": "John Doe",
          "postDate": "22-11-23",
          "likes": 1,
          "comments": [
            {
              "id": 1,
              "text": "This is a comment on the first post.",
              "user": "Commenter1",
              "commentDate": "22-11-23",
              "replies": [
                {
                  "id": 1,
                  "text": "Reply to Commenter1's comment",
                  "user": "ReplyUser1"
                }
              ]
            },
            {
              "id": 2,
              "text": "Another comment on the first post.",
              "user": "Commenter2",
              "commentDate": "22-11-23",
              "replies": []
            }
          ]
        },
        {
          "id": 2,
          "title": "Second Post",
          "content": "Content for the second post goes here.",
          "author": "Yonas Kitaba",
          "postDate": "22-11-23",
          "likes": 1,
          "comments": [
            {
              "id": 1,
              "text": "Comment on the second post.",
              "user": "Commenter3",
              "commentDate": "22-11-23",
              "replies": [
                {
                  "id": 1,
                  "text": "Reply to Commenter3's comment",
                  "user": "ReplyUser2"
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "title": "Third Post",
          "content": "Third post content.",
          "author": "Yonas Kitaba",
          "postDate": "22-11-25",
          "likes": 1,
          "comments": [
            {
              "id": 1,
              "text": "Comment on the third post.",
              "user": "Commenter4",
              "commentDate": "22-11-23",
              "replies": []
            }
          ]
        }
      ],
      "users": [
        {"userId": 1, "userName": 'Abebe', "userEmail": 'aaaaaaaaaa@gmail.com', 'createdDate': '22-11-23'},
        {"userId": 1, "userName": 'Kebede', "userEmail": 'bbbbbbbbbb@gmail.com',  'createdDate': '22-11-23'},
        {"userId": 1, "userName": 'bekele', "userEmail": 'cccccccccc@gmail.com', 'createdDate': '22-11-23'}
      ],
      "authors": [
        {"authorId": 1, "authorName": 'Yonas Kitaba', "authorTitle": 'consultant'},
      ]
    },
    "metadata": {
      "id": "65a17308dc74654018914a1e",
      "private": false,
      "createdAt": "2024-01-12T17:12:40.611Z"
    }
  }

  // console.log(JSON.stringify(sampleData));

  const pid = 3;
  const DefaultUser = Data.record.authors.authorName;
  const updatedComment = {
    "id": '2',
    "text": 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    "user": DefaultUser,
    "replies": []
  }
  const handleNewCommentSubmit = () => {
    // console.log(JSON.stringify(sampleData));
    const updatedData = {
      ...Data,
      record: {
          ...Data.record,
          posts: Data.record.posts.map((post) => {
            if (post.id === pid){
              return {
                ...post,
                comments: [
                  ...post.comments,
                  updatedComment
                ]
              }
            }
            return post;
          })
      }
    }
    return updatedData.record.posts;
  }
  console.log(handleNewCommentSubmit());
  console.log(JSON.stringify(handleNewCommentSubmit()))



// ************* Edit Comment ***************
  console.log("=========================");
  console.log("============update COMMENT ========");

  // we need comment id for it
  const commentId = 3;
  const pid2 = 1;
  const Date = '22-11-2024';
  const editCommentWith = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

const handleEditCommentSubmit = () => {
  if (pid2 > 0 && pid2 <= Data.record.posts.length) {
    const editedCommentData = {
      ...Data,
      record: {
        ...Data.record,
        posts: Data.record.posts.map((post)=> {
          if (post.id === pid2){
            return {
              ...post,
              comments: post.comments.map((comment) => {
                if (comment.id === commentId) {
                  return {
                    ...comment,
                    text: editCommentWith
                  }

                }
                return comment;
              })
            }
          }
          return post
        }),
      }
    }
    return editedCommentData.record.posts;
  } else {
    // set postId = ''
    console.log("Invalid pid Refresh and try again");
    return null
  }
}
console.log(handleEditCommentSubmit());
console.log(JSON.stringify(handleEditCommentSubmit()));
