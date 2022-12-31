export default function Screen({resultado, operacion}) {
  return (
    <div className="bg-screen h-[145px] rounded-t-xl">
      <p className="text-[#ffffff78] text-[20px] h-[50%] flex justify-end items-center px-3">
        {operacion}
      </p>
      <p className="text-[52px] h-[50%] flex justify-end items-center px-3 text-[#fff]">
        {resultado}
      </p>
    </div>
  );
}
