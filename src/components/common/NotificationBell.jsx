import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useNotifications from "../../hooks/useNotifications";

const NotificationBell = () => {
  const [showDropdown, setShowDropdown] =
    useState(false);

  const { notifications, markNotificationsRead } =
    useNotifications();

  const unreadCount = notifications.filter((item) => !(item.isRead || item.read)).length;
  const handleMarkRead = async () => {
    try {
      await markNotificationsRead();
    } catch (error) {
      console.error("Unable to mark notifications as read", error);
      toast.error(error.response?.data?.message || "Unable to update notifications");
    }
  };

  return (
    <div className="relative">

      <button
        type="button"
        aria-label={`Notifications, ${unreadCount} unread`}
        aria-expanded={showDropdown}
        onClick={() => setShowDropdown((current) => !current)}
        className="relative rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 hover:text-violet-700"
      >
        <span aria-hidden="true">🔔</span>

        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-600
              text-white
              text-xs
              rounded-full
              px-2
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {showDropdown && (

        <div
          className="
            absolute
            right-0
            mt-2
            bg-white
            shadow-lg
            rounded-lg
            w-72
            z-50
          "
        >

          {notifications.map(
            (item) => (
              <div
                key={item._id || item.id}
                  className={`border-b border-slate-100 p-3 text-sm last:border-0 ${
                    item.isRead ? "text-slate-500" : "font-medium text-slate-800"
                  }`}
                >
                  <p>{item.message}</p>
                  {item.createdAt && (
                    <time className="mt-1 block text-xs text-slate-400" dateTime={item.createdAt}>
                      {new Date(item.createdAt).toLocaleString()}
                    </time>
                  )}
                </div>
            )
          )}
          {notifications.length === 0 && (
            <p className="p-4 text-sm text-slate-500">You’re all caught up.</p>
          )}
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={handleMarkRead}
              className="block w-full border-t border-slate-100 p-3 text-center text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              Mark all as read
            </button>
          )}
          <Link
            to="/notifications"
            onClick={() => setShowDropdown(false)}
            className="block border-t border-slate-100 p-3 text-center text-xs font-semibold text-violet-700 hover:bg-violet-50"
          >
            View all notifications
          </Link>

        </div>
      )}

    </div>
  );
};

export default NotificationBell;