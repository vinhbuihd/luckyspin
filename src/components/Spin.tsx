interface SpinProps {
  spinItems: string[];
  size: number;
  onStart: () => void;
  disabled?: boolean;
  spinRef: React.RefObject<HTMLDivElement>;
}

export default function Spin({
  spinItems,
  size = 140,
  onStart,
  spinRef,
  disabled,
}: SpinProps) {
  const deg = 360 / spinItems.length;

  function getTanFromDegrees(degrees: number) {
    return Math.tan((degrees * Math.PI) / 180);
  }

  return (
    <div
      style={{ width: `${size + 24}px`, height: `${size + 24}px` }}
      className="relative flex justify-center items-center bg-spinBg bg-no-repeat bg-cover rounded-[50%]"
    >
      <div
        onClick={() => !disabled && onStart()}
        className={`absolute ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }  z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] size-[60px] bg-spinBtn bg-no-repeat bg-cover`}
      ></div>

      <div className="absolute z-20 top-0 left-[50%] translate-x-[-50%] w-[12px] h-[16px] bg-clockWise" />

      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        ref={spinRef}
        className={`relative transition flex justify-center overflow-hidden bg-slate-200 mx-auto rounded-[50%]`}
      >
        {spinItems.map((item, index) => (
          <div
            key={index}
            style={{
              height: size / 2,
              width: size * getTanFromDegrees(deg / 2),
              transform: `rotate(${deg * index}deg)`,
              transformOrigin: "50% 100%",
            }}
            className={` absolute top-0 clipPath ${
              index % 2 == 0 && "bg-[#FFCD69]"
            }`}
          >
            <span className="relative w-max text-[#CE0005] font-[700] left-[50%] translate-x-[-50%] top-[16%] flex">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
