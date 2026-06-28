import {
  useEffect,
  useState,
} from "react";

import {
  addComment,
  getComments,
} from "../../api/commentApi";

const CommentSection = ({
  taskId,
}) => {

    console.log("Task ID:", taskId);

  const [comment,
    setComment] =
    useState("");

  const [comments,
    setComments] =
    useState([]);

 useEffect(() => {

  if (taskId) {
    fetchComments();
  }

}, [taskId]);

  const fetchComments = async () => {

  if (!taskId) return;

  try {

    const response = await getComments(taskId);

    setComments(response.comments);

  } catch (error) {

    console.log(error);

  }

};

  const handleSubmit = async (e) => {

  e.preventDefault();

  if (!taskId) {
    return;
  }

  if (!comment.trim()) {
    return;
  }

  try {

    await addComment(taskId, comment);

    setComment("");

    fetchComments();

  } catch (error) {

    console.log(error);

  }

};

  return (

    <div className="mt-4 border-t pt-4">

      <h3 className="font-bold mb-2">
        Comments
      </h3>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <input
          type="text"
          value={comment}
          onChange={(e)=>
            setComment(
              e.target.value
            )
          }
          placeholder="Add Comment"
          className="border p-2 rounded w-full"
        />

        <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Comment
      </button>

      </form>

      <div className="mt-4">

        {
          comments.map(
            (item)=>(
              <div
                key={item._id}
                className="border-b py-2"
              >

                <p>
                  <strong>
                    {
                      item.userId?.name
                    }
                  </strong>
                </p>

                <p>
                  {item.comment}
                </p>

              </div>
            )
          )
        }

      </div>

    </div>

  );

};

export default CommentSection;