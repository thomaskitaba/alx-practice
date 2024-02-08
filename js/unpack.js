
console.log("Level 1");
const data = {
  'a': 1,
  'b': 2,
  'c': 3
}
const updatedData = {
  ...data,
  'b': 22
}

console.log(updatedData);

console.log("Level 2")

const data2 = {
  'a': 1,
  'b': 2,
  'c': {
    'c1': 31,
    'c2': 32
  }
}
const updatedData2 = {
  ...data2,
  c : {
    ...data2.c,
    'c1': 311
  }
};
console.log(updatedData2);

console.log("***************Level 3**************");
let data3 = {
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
        {"commentId": 1, "text": "Comment 1"}
      ]
    }
  ]
}

const inputText = "this comment is updated resently";
const handleFormSubmit = (postId) => {


  // Update data on the frontend
  const updatedData3 = {
    ...data3,
    records: data3.records.map(post => {
      if (post.postId === postId) {
        // Add new comment to the specific post
        return {
          ...post,
          comments: [
            ...post.comments,
            { commentId: post.comments.length + 1, text: inputText },
          ],
        };
      }
      return post;
    }),
  };
  console.log(updatedData3.records[0].comments);
}
const result = handleFormSubmit(1);
const newText = "this newText is a comment";
console.log("============level-4==============")


let data4 = {
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
        {"commentId": 1, "text": "Comment 1"}
      ]
    }
  ]
}
const handel = (pid) => {
  let newdata = {...data4}
  try {
    newdata = data4.records[pid].comments.push( {"commentId": data4.records[pid].comments.length + 1, "text": newText})
    console.log(data4.records[1]);
    return newdata;
  } catch(error){
    console.log('error occured', error);
    return null;
  }
};

console.log(handel(1));
