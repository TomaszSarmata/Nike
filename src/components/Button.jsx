function Button({ label, iconURL }) {
  return (
    <button className="bg-coral-red text-white px-7 py-4 rounded-full flex justify-center items-center  gap-2 border border-coral-red font-montserrat text-lg leading-none">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
}

export default Button;
