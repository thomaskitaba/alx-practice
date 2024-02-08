

console.log("thomas kitaba");
const Data = {
  'all': [
    { 'a': 1,
      'b': 'ba1',
      'c': [
        { 'cid': 1, 'text': 'comment 1'},
        { 'cid': 2, 'text': 'comment 2'},
      ],
    },
    {
      'a': 2,
      'b': 'ba2',
      'c': [
        { 'cid': 1, 'text': 'comment 1'},
      ],
    },
    {
      'a': 3,
      'b': 'ba3',
      'c': [  ],
    }
  ],
}
const newComment = 'new comment';

const handlesubmit = (id) => {
  const updatedData = {
    ...Data,
    all: Data.all.map((post)=> {
      if (post.a === id) {
        return {
          ...post,
          c: [
            ...post.c,
            { cid: post.c.length + 1, text: newComment},
          ],
        }
      }
      return post;
    })
  }
  return updatedData;
};

console.log(JSON.stringify(handlesubmit(3)));
console.log("*************************");

const data1 = [
  {'a': 1, 'b': [{'ba1': 11}, {'ba2': 111}]},
  {'a': 2, 'b': [{'ba2': 22}, {'ba2': 222}]},];
const newComment2 = "777";
const handleSubmit2 = (id2) => {
  const updatedData2 = data1.map((post) => {
    if (post.a === id2) {
      const ba2Index = post.b.findIndex((item => 'ba2' in item));
      if (post.b[ba2Index]['ba2'] != newComment2)
      {
          return {
            ...post,
            b: [
              ...post.b,

              {'ba2': newComment2}
            ]
          };
        }
      }
        return post;
      });

  return updatedData2;
};
console.log(JSON.stringify(handleSubmit2(1)));