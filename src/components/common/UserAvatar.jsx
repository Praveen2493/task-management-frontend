import { useState } from "react";

const UserAvatar = ({ user, className = "" }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const imageUrl = user?.profileImage
    ? `${import.meta.env.VITE_API_URL || ""}${user.profileImage}`
    : "";
  const initial = (user?.name || "U").trim().charAt(0).toUpperCase();

  if (!imageUrl || imageFailed) {
    return (
      <span
        aria-label={`${user?.name || "User"}'s profile`}
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700 ${className}`}
      >
        {initial}
      </span>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${user?.name || "User"}'s profile`}
      className={`shrink-0 rounded-full object-cover ${className}`}
      onError={() => setImageFailed(true)}
    />
  );
};

export default UserAvatar;
