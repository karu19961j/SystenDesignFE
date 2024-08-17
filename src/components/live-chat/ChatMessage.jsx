/* eslint-disable react/prop-types */
const ChatMessage = ({ photo, name, message }) => {
  return (
    <div className="flex p-2">
      <img className="h-8 m-2 w-5 rounded-full" alt={name} src={photo} />
      <p className="p-2">
        <span className="font-bold">{name}-</span>
        <span>{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
