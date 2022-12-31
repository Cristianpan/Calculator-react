export default function ButtonCalculator({ children, style, handleClick }) {

  return (
    <button className={`flex justify-center items-center text-xl ${style} border-[#6c757d69]`} onClick={() => handleClick(children)}>
      {children}
    </button>
  );
}
