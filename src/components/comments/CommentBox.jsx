const CommentBox = ({ data }) => {
  return data.map((comment, index) => {
    return (
      <div
        key={index}
        style={{
          paddingLeft: "10px",
          borderLeft: "1px solid #000",
        }}
      >
        <div>
          <img
            style={{
              padding: 2,
            }}
            src="https://avatars.githubusercontent.com/u/20101082?s=48&v=4"
            atl="user"
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
              padding: "4px 2px",
              margin: 0,
            }}
          >
            {comment.username}
          </p>
          <p
            style={{
              padding: "0 2px",
            }}
          >
            {comment.comment}
          </p>
        </div>
        <div>{comment?.replies && <CommentBox data={comment.replies} />}</div>
      </div>
    );
  });
};

export default CommentBox;
