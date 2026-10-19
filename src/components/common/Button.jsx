const Button = ({
    text,
    type="button",
    onClick
}) => {
  return (
    <button 
    type={type}
    onClick={onClick}
    className='w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600'>
        {text}
    </button>
  );
   
}

export default Button;
