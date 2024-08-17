const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/jfKfPfyJRdk?si=dn4CGtWcMgYBi4lX"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoStream;
