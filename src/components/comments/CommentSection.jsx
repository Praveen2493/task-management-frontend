import { useEffect, useState } from "react";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import { addComment, getComments } from "../../api/commentApi";

const CommentSection = ({ taskId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    const loadComments = async () => {
      if (!taskId) return;
      try {
        const response = await getComments(taskId);
        if (active) setComments(response.comments || []);
      } catch (error) {
        console.error("Unable to load task comments", error);
        if (active) toast.error(error.response?.data?.message || "Unable to load comments");
      }
    };

    loadComments();
    return () => {
      active = false;
    };
  }, [taskId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!taskId || !comment.trim()) return;

    try {
      setSubmitting(true);
      await addComment(taskId, comment.trim());
      setComment("");
      const response = await getComments(taskId);
      setComments(response.comments || []);
    } catch (error) {
      console.error("Unable to add task comment", error);
      toast.error(error.response?.data?.message || "Unable to add comment");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <FiMessageCircle size={17} />
        </span>
        <div>
          <h2 className="text-base font-bold text-slate-900">Comments</h2>
          <p className="text-xs text-slate-500">Keep the conversation about this task in one place</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-comment" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Add a comment
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id="task-comment"
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Write a comment…"
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
          />
          <button
            type="submit"
            disabled={submitting || !comment.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FiSend size={15} />
            {submitting ? "Adding…" : "Add comment"}
          </button>
        </div>
      </form>

      <div className="mt-5 space-y-3">
        {comments.length > 0 ? comments.map((item) => (
          <article key={item._id} className="flex gap-3 rounded-xl bg-slate-50 p-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              {(item.userId?.name || "U").charAt(0).toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800">{item.userId?.name || "User"}</p>
              <p className="mt-1 break-words text-sm leading-5 text-slate-600">{item.comment}</p>
            </div>
          </article>
        )) : (
          <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500">No comments yet. Start the conversation.</p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
