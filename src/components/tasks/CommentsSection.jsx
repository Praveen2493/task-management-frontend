import { useState } from "react";

const CommentsSection = () => {

  const [comment, setComment] = useState("");

  const comments = [
    {
      id: 1,
      user: "Praveen",
      text: "Frontend completed successfully."
    },
    {
      id: 2,
      user: "John",
      text: "Backend API work started."
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Comments
      </h2>

      <div className="space-y-4 mb-4">

        {comments.map((item) => (
          <div
            key={item.id}
            className="border-b pb-3"
          >
            <h4 className="font-semibold">
              {item.user}
            </h4>

            <p className="text-gray-600">
              {item.text}
            </p>

          </div>
        ))}

      </div>

      <textarea
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        rows="3"
        placeholder="Add a comment..."
        className="w-full border rounded-lg p-3"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3"
      >
        Add Comment
      </button>

    </div>
  );
};

export default CommentsSection;