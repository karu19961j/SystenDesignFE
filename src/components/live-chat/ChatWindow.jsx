import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const s = setInterval(fetchData, 1000);
    return () => clearInterval(s);
  }, []);

  const fetchData = () => {
    const data = [
      {
        id: 0,
        name: "Karan",
        photo:
          "https://yt4.ggpht.com/YpRkk_l14bYg70lu15B_BOeeSEoYp0jICLmhpr_WRACPULJ2Uyy5duYbF7ycCkIR9S8Xzv8Pcbg=s32-c-k-c0x00ffffff-no-rj",
        message:
          "Fugiat consectetur pariatur eiusmod adipisicing mollit magna non. Velit reprehenderit irure amet esse veniam ad nostrud dolore quis. Nisi culpa officia tempor consequat dolor labore cupidatat sunt elit dolor sint culpa. Est deserunt laboris aliquip consequat quis incididunt enim voluptate excepteur.",
      },
    ];
    setMessages((messages) => {
      const newMessageList = [...data, ...messages];
      return newMessageList;
    });
  };

  return (
    <div className="flex overflow-y-scroll w-full h-[600px] border border-black m-5 flex-col-reverse">
      {messages.map((message, idx) => (
        <ChatMessage key={`${message.id}-${idx}`} {...message} />
      ))}
    </div>
  );
};

export default ChatWindow;
