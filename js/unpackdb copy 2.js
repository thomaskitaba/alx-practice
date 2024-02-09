#!/usr/bin/node
const Database =[
  [
      {
          "postId": 1,
          "postTitle": "First Post",
          "postContent": "this is post for title 1. this is first post",
          "description": "Description for post 1",
          "postStatus": "active",
          "postCreatedDate": "2024-02-05 22:22:22",
          "postUpdatedDate": "2024-02-05 22:22:22",
          "postUpdatedTime": "22:22:22",
          "postCreatedTime": "22:22:22",
          "authorName": "YonasKitaba",
          "authorEmail": "john@example.com"
      },
      {
          "postId": 2,
          "postTitle": "Second Post",
          "postContent": "title 2 post content post 2",
          "description": "Description for post 2",
          "postStatus": "active",
          "postCreatedDate": "2024-02-03 22:22:22",
          "postUpdatedDate": "2024-02-03 22:22:22",
          "postUpdatedTime": "22:22:22",
          "postCreatedTime": "22:22:22",
          "authorName": "YonasKitaba",
          "authorEmail": "john@example.com"
      },
      {
          "postId": 3,
          "postTitle": "Third Post",
          "postContent": "Here goes the content of the third post",
          "description": "Description for post 3",
          "postStatus": "active",
          "postCreatedDate": "2024-02-09 22:22:22",
          "postUpdatedDate": "2024-02-09 22:22:22",
          "postUpdatedTime": "22:22:22",
          "postCreatedTime": "22:22:22",
          "authorName": "YonasKitaba",
          "authorEmail": "john@example.com"
      },
      {
          "postId": 4,
          "postTitle": "Fourth Post",
          "postContent": "Content for the fourth post",
          "description": "Description for post 4",
          "postStatus": "active",
          "postCreatedDate": "2024-02-08 22:22:22",
          "postUpdatedDate": "2024-02-08 22:22:22",
          "postUpdatedTime": "22:22:22",
          "postCreatedTime": "22:22:22",
          "authorName": "YonasKitaba",
          "authorEmail": "john@example.com"
      }
  ],
  [
      {
          "postId": 1,
          "postCommentId": 1,
          "postCommentCreatedDate": "2024-02-08",
          "postCommentUpdatedDate": "2024-02-08",
          "postCommentId:1": 1,
          "commentContent": "This is the first comment with parentId set",
          "commentCreatedDate": "2024-02-08",
          "commentUpdatedDate": "2024-02-08",
          "commentStatus": "active",
          "parentId": null,
          "likes": 5,
          "commenterId": 1,
          "commenterName": "YonasKitaba",
          "typeId": 1,
          "typeName": "Admin"
      },
      {
          "postId": 2,
          "postCommentId": 2,
          "postCommentCreatedDate": "2024-02-08",
          "postCommentUpdatedDate": "2024-02-08",
          "postCommentId:1": 2,
          "commentContent": "This is the first comment for post 2",
          "commentCreatedDate": "2024-02-08",
          "commentUpdatedDate": "2024-02-08",
          "commentStatus": "active",
          "parentId": null,
          "likes": 3,
          "commenterId": 3,
          "commenterName": "Alice Johnson",
          "typeId": 4,
          "typeName": "User"
      },
      {
          "postId": 3,
          "postCommentId": 3,
          "postCommentCreatedDate": "2024-02-08",
          "postCommentUpdatedDate": "2024-02-08",
          "postCommentId:1": 3,
          "commentContent": "This is the first comment for post 3",
          "commentCreatedDate": "2024-02-08",
          "commentUpdatedDate": "2024-02-08",
          "commentStatus": "active",
          "parentId": null,
          "likes": 7,
          "commenterId": 2,
          "commenterName": "ThomasKitaba",
          "typeId": 1,
          "typeName": "Admin"
      },
      {
          "postId": 4,
          "postCommentId": 4,
          "postCommentCreatedDate": "2024-02-08",
          "postCommentUpdatedDate": "2024-02-08",
          "postCommentId:1": 4,
          "commentContent": "This is the first comment for post 4",
          "commentCreatedDate": "2024-02-08",
          "commentUpdatedDate": "2024-02-08",
          "commentStatus": "active",
          "parentId": null,
          "likes": 6,
          "commenterId": 1,
          "commenterName": "YonasKitaba",
          "typeId": 1,
          "typeName": "Admin"
      },
      {
          "postId": 1,
          "postCommentId": 6,
          "postCommentCreatedDate": "2024-02-08",
          "postCommentUpdatedDate": "2024-02-08",
          "postCommentId:1": 6,
          "commentContent": "This is a reply to the first comment for ",
          "commentCreatedDate": "2024-02-08",
          "commentUpdatedDate": "2024-02-08",
          "commentStatus": "active",
          "parentId": null,
          "likes": 0,
          "commenterId": 3,
          "commenterName": "Alice Johnson",
          "typeId": 4,
          "typeName": "User"
      }
  ],
  [
      {
          "commentId": 2,
          "commentContent": "This is a reply to the first comment for post 1",
          "likes": 8,
          "userId": 2,
          "parentId": 1,
          "commentStatus": "active",
          "commentDescription": null,
          "commentCreatedDate": "2024-02-08",
          "commentCreatedTime": "33:33:33",
          "commentUpdatedTime": "33:33:33",
          "commentUpdatedDate": "2024-02-08",
          "userId:1": 2,
          "userName": "ThomasKitaba",
          "userEmail": "jane@example.com",
          "hash": "hashed_password_2",
          "userTypeId": 1,
          "fName": "Thomas",
          "lName": "Kitaba",
          "userStatus": null,
          "userUpdatedDate": null,
          "userCreatedDate": null,
          "userCreatedTime": null,
          "userUpdatedTime": null,
          "typeId": 1,
          "typeName": "Admin",
          "userTypeUpdatedDate": null,
          "userTypeUpdatedTime": null,
          "userTypeCreatedTime": null,
          "userTypeCreatedDate": null
      },
      {
          "commentId": 4,
          "commentContent": "This is a reply to the first comment for post 2",
          "likes": 2,
          "userId": 1,
          "parentId": 3,
          "commentStatus": "active",
          "commentDescription": null,
          "commentCreatedDate": "2024-02-08",
          "commentCreatedTime": "33:33:33",
          "commentUpdatedTime": "33:33:33",
          "commentUpdatedDate": "2024-02-08",
          "userId:1": 1,
          "userName": "YonasKitaba",
          "userEmail": "john@example.com",
          "hash": "hashed_password_1",
          "userTypeId": 1,
          "fName": "Yonas",
          "lName": "Kitaba",
          "userStatus": null,
          "userUpdatedDate": null,
          "userCreatedDate": null,
          "userCreatedTime": null,
          "userUpdatedTime": null,
          "typeId": 1,
          "typeName": "Admin",
          "userTypeUpdatedDate": null,
          "userTypeUpdatedTime": null,
          "userTypeCreatedTime": null,
          "userTypeCreatedDate": null
      },
      {
          "commentId": 6,
          "commentContent": "This is a reply to the first comment for post 3",
          "likes": 4,
          "userId": 3,
          "parentId": 5,
          "commentStatus": "active",
          "commentDescription": null,
          "commentCreatedDate": "2024-02-08",
          "commentCreatedTime": "33:33:33",
          "commentUpdatedTime": "33:33:33",
          "commentUpdatedDate": "2024-02-08",
          "userId:1": 3,
          "userName": "Alice Johnson",
          "userEmail": "alice@example.com",
          "hash": "hashed_password_3",
          "userTypeId": 4,
          "fName": "Alice",
          "lName": "Johnson",
          "userStatus": null,
          "userUpdatedDate": null,
          "userCreatedDate": null,
          "userCreatedTime": null,
          "userUpdatedTime": null,
          "typeId": 4,
          "typeName": "User",
          "userTypeUpdatedDate": null,
          "userTypeUpdatedTime": null,
          "userTypeCreatedTime": null,
          "userTypeCreatedDate": null
      },
      {
          "commentId": 8,
          "commentContent": "This is a reply to the first comment for post 4",
          "likes": 1,
          "userId": 2,
          "parentId": 7,
          "commentStatus": "active",
          "commentDescription": null,
          "commentCreatedDate": "2024-02-08",
          "commentCreatedTime": "33:33:33",
          "commentUpdatedTime": "33:33:33",
          "commentUpdatedDate": "2024-02-08",
          "userId:1": 2,
          "userName": "ThomasKitaba",
          "userEmail": "jane@example.com",
          "hash": "hashed_password_2",
          "userTypeId": 1,
          "fName": "Thomas",
          "lName": "Kitaba",
          "userStatus": null,
          "userUpdatedDate": null,
          "userCreatedDate": null,
          "userCreatedTime": null,
          "userUpdatedTime": null,
          "typeId": 1,
          "typeName": "Admin",
          "userTypeUpdatedDate": null,
          "userTypeUpdatedTime": null,
          "userTypeCreatedTime": null,
          "userTypeCreatedDate": null
      },
      {
          "commentId": 10,
          "commentContent": "This is a reply to the first comment for post 5",
          "likes": 2,
          "userId": 1,
          "parentId": 9,
          "commentStatus": "disabled",
          "commentDescription": null,
          "commentCreatedDate": "2024-02-08",
          "commentCreatedTime": "33:33:33",
          "commentUpdatedTime": "33:33:33",
          "commentUpdatedDate": "2024-02-08",
          "userId:1": 1,
          "userName": "YonasKitaba",
          "userEmail": "john@example.com",
          "hash": "hashed_password_1",
          "userTypeId": 1,
          "fName": "Yonas",
          "lName": "Kitaba",
          "userStatus": null,
          "userUpdatedDate": null,
          "userCreatedDate": null,
          "userCreatedTime": null,
          "userUpdatedTime": null,
          "typeId": 1,
          "typeName": "Admin",
          "userTypeUpdatedDate": null,
          "userTypeUpdatedTime": null,
          "userTypeCreatedTime": null,
          "userTypeCreatedDate": null
      }
  ],
  [
      {
          "id": 1,
          "rdbms": "sqlite",
          "databaseVersion": "3.36",
          "metaCreatedDate": "2024-02-07",
          "metaUpdatedDate": "2024-02-08",
          "metaCreatedTime": "11:11:11",
          "metaUpdatedTime": "11:11:11",
          "frameworkUsed": "React + Vite",
          "pageVisitors": 0
      }
  ]
]

const record = { posts: [] };
// const commentTempDict = {comments: []};

const postsTemp = [];

const commentTempList = []

const replyTemp = [];
// let filteredPostComments = [];
const filteredReplies = [];
// unpack Database elements to their respective variable
const [myPosts, postComments, replies, metadata ] = Database;

// sort the
const posts = myPosts.sort((a, b) => new Date(b.postCreatedDate) - new Date(a.postCreatedDate));
// Add each posts to record object
posts.forEach((post, index) => {
  postsTemp.push(post);
})
record.posts = postsTemp;
// console.log(record);


record.posts.forEach((post, index) => {
  // let theIndex = -1;

  const filteredPostComments = postComments.filter((postComments) => postComments.postId === post.postId);
  // console.log(filteredPostComments);
  if (filteredPostComments.length > 0) {
    postIndex = record.posts.findIndex((post) => post.postId === 1);
    record.posts[postIndex].comments = filteredPostComments;

    filteredPostComments.forEach((comment, index) => {

    const filteredReplies = replies.filter((reply, index) => reply.parentId === 1);
    console.log(filteredReplies);
    const commentIndex = record.posts[postIndex].comments.findIndex((comment) => comment.commenterId === 1)
    record.posts[postIndex].comments[commentIndex].replies = filteredReplies;
    // console.log(record.posts[postIndex].comments[commentIndex].replies);
  })

  console.log("-------------------------------");
  console.log(record.posts[2].comments);
  // console.log(record);
}
})
