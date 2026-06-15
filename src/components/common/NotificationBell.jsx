import { useState } from "react";
import useNotifications from "../../hooks/useNotifications";

const NotificationBell = () => {
  const [showDropdown, setShowDropdown] =
    useState(false);

  const { notifications } =
    useNotifications();

  const unreadCount =
    notifications.filter(
      (item) => !item.read
    ).length;

  return (
    <div className="relative">

      <button
        onClick={() =>
          setShowDropdown(
            !showDropdown
          )
        }
        className="relative"
      >
        🔔

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
                key={item.id}
                className="
                  p-3
                  border-b
                "
              >
                {item.message}
              </div>
            )
          )}

        </div>
      )}

    </div>
  );
};

export default NotificationBell;