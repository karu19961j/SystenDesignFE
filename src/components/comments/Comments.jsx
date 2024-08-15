import CommentBox from "./CommentBox";

const data = [
  {
    username: "karan",
    comment: "testing comment component",
    replies: [
      {
        username: "Neha",
        comment: "testing comment component",
      },
    ],
  },
  {
    username: "Chiya",
    comment: "testing comment component",
    replies: [
      {
        username: "Neha",
        comment: "testing comment component",
        replies: [
          {
            username: "Neha",
            comment: "testing comment component",
            replies: [
              {
                username: "Neha",
                comment: "testing comment component",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Moksh",
    comment: "testing comment component",
  },
];

const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
