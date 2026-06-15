const Modal = ({
  isOpen,
  title,
  children,
  onClose,
}) => {

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        justify-center
        items-center
      "
    >

      <div
        className="
          bg-white
          p-6
          rounded-xl
          w-full
          max-w-lg
        "
      >

        <div
          className="
            flex
            justify-between
            mb-4
          "
        >

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        {children}

      </div>

    </div>
  );
};

export default Modal;