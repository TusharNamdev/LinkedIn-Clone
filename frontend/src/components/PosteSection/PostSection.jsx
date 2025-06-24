import React, { useEffect, useState } from "react";

const PostSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    setPosts([
      {
        id: 1,
        user: {
          name: "Ramesh Verma",
          title: "Software Engineer at ExampleCorp",
          avatar: "https://placehold.co/40x40/FF5733/FFFFFF?text=JD",
        },
        content:
          "Excited to share my latest article on responsive web design! Check it out and let me know your thoughts. #webdesign #frontend #react",
        image: null,
        likes: 120,
        comments: 15,
        time: "2h ago",
      },
      {
        id: 2,
        user: {
          name: "Suman Sharma",
          title: "Product Manager at InnovateTech",
          avatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=JS",
        },
        content:
          "Great session today with the team brainstorming new product features. Collaboration is key to innovation! 🚀",
        image:
          "https://placehold.co/600x300/3357FF/FFFFFF?text=Team+Meeting+Image",
        likes: 250,
        comments: 30,
        time: "4h ago",
      },
      {
        id: 3,
        user: {
          name: "Eshani Kumar",
          title: "Data Scientist at Global Insights",
          avatar: "https://placehold.co/40x40/5733FF/FFFFFF?text=AJ",
        },
        content:
          "Just completed a fascinating course on machine learning. The future is definitely data-driven!",
        image: null,
        likes: 80,
        comments: 5,
        time: "1d ago",
      },
    ]);
  }, []);

  const handlePostSubmit = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        user: {
          name: "You",
          title: "Your Title Here",
          avatar: "https://placehold.co/40x40/33AACC/FFFFFF?text=You",
        },
        content: newPostContent,
        image: null,
        likes: 0,
        comments: 0,
        time: "Just now",
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
      setShowModal(false);
    }
  };

  return (
    <section className=" w-full">
      <main className=" container mx-auto mt-2   py-6 px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <section className=" md:col-span-3 lg:col-span-5 space-y-4">
            <CreatePost openModal={() => setShowModal(true)} />
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </section>
        </div>
      </main>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Create a post
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-light"
              >
                &times;
              </button>
            </div>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y min-h-[100px]"
              placeholder="What do you want to talk about?"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePostSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
      );
    </section>
  );
};

const CreatePost = ({ openModal }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
    <div className="flex items-center space-x-3 mb-4">
      <img
        src="https://placehold.co/50x50/ADD8E6/000000?text=P"
        alt="User Avatar"
        className="rounded-full w-12 h-12 object-cover"
      />
      <button
        onClick={openModal}
        className="flex-grow text-left text-gray-500 border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 transition-colors"
      >
        Start a post
      </button>
    </div>
    <div className="flex flex-wrap justify-around text-sm text-gray-600">
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors">
        <svg
          className="w-5 h-5 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z" />
        </svg>
        <span>Photo</span>
      </button>
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors">
        <svg
          className="w-5 h-5 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
        <span>Video</span>
      </button>
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors">
        <svg
          className="w-5 h-5 text-yellow-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM12 17.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5-5H7v-2h10v2z" />
        </svg>
        <span>Event</span>
      </button>
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors">
        <svg
          className="w-5 h-5 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 12H7v-2h10v2zm0 4H7v-2h10v2zm0-8H7V6h10v2zM19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
        <span>Write article</span>
      </button>
    </div>
  </div>
);

const Post = ({ post }) => (
  <div className=" bg-white rounded-lg shadow-sm border border-gray-200 p-4">

    <div className="flex items-center space-x-3 mb-3">
      <img
        src={post.user.avatar}
        alt={`${post.user.name}'s avatar`}
        className="rounded-full w-12 h-12 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/40x40/CCCCCC/666666?text=U";
        }}
      />
      <div>
        <h4 className="font-semibold text-gray-800 hover:text-blue-700 hover:underline cursor-pointer">
          {post.user.name}
        </h4>
        <p className="text-xs text-gray-600">{post.user.title}</p>
        <p className="text-xs text-gray-500">
          {post.time} &bull;{" "}
          <span className="inline-block" title="Public">
            🌐
          </span>
        </p>
      </div>
    </div>


    <p className="text-gray-800 mb-3">{post.content}</p>
    {post.image && (
      <img
        src={post.image}
        alt="Post Image"
        className="w-full rounded-lg mb-3 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x300/CCCCCC/666666?text=Image+Load+Error";
        }}
      />
    )}


    <div className="  flex items-center text-sm text-gray-600 border-b border-gray-200 pb-2 mb-2">
      {post.likes > 0 && (
        <div className="flex items-center space-x-1 mr-4">

          <span className="text-blue-600">👍</span>
          <span>{post.likes}</span>
        </div>
      )}
      {post.comments > 0 && <span>{post.comments} comments</span>}
    </div>


    <div className=" flex-wrap  flex justify-around text-gray-600 font-medium text-sm">
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors flex-grow justify-center">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.84-1.66A10.054 10.054 0 012 11c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.22-.85 4.35-2.34 5.96L12 21.35z" />
        </svg>
        <span>Like</span>
      </button>
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors flex-grow justify-center">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 12H6v-2h12v2zm0-3H6V9h12v3z" />
        </svg>
        <span>Comment</span>
      </button>
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors flex-grow justify-center">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18 16.08c-.76 0-1.44.3-1.96.82L8.91 12.7c.05-.14.09-.28.09-.4s-.04-.26-.09-.4l7.05-4.28c.52.52 1.2.82 1.96.82a3 3 0 100-6 3 3 0 000 6zM5 12a3 3 0 100-6 3 3 0 000 6zm13 9a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
        <span>Share</span>
      </button>
      <button className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors flex-grow justify-center">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </svg>
        <span>Send</span>
      </button>
    </div>
  </div>
);

export default PostSection;
