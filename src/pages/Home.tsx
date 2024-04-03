import { useRef } from "react";
import Header from "../components/Header";
import Spin from "../components/Spin";

const spinItems = ["1$", "2$", "3$", "4$", "5$", "6$"];

export default function Home() {
  const spinRef = useRef<HTMLDivElement>(null);
  const revolutionsStep1 = 1;
  const revolutionsStep2 = 4;
  const revolutionsStep3 = 2;
  const spinTurnRef = useRef(revolutionsStep1);

  const size = 140;
  const deg = 360 / spinItems.length;

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const fakeCallApi = async () => {
    await sleep(4000);
    const rewardId = Math.floor(Math.random() * 6);
    return rewardId;
  };

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomPositionInOneCone = (deg: number) => {
    return getRandomNumber(-(deg / 2 - 5), deg / 2 - 5);
  };

  const onStart = async () => {
    if (spinRef.current) {
      const runningStep1AndStep2 = async () => {
        console.log("spinTurnRef.current", spinTurnRef.current);
        if (spinRef.current) {
          spinRef.current.style.transitionTimingFunction = "ease-in";
          spinRef.current.style.transitionDuration = "2000ms";
          spinRef.current.style.transform = `rotate(${
            360 * spinTurnRef.current // init = 2
          }deg)`;
          await sleep(2000);
          spinRef.current.style.transitionTimingFunction = "linear";
          spinRef.current.style.transitionDuration = "4000ms";
          spinRef.current.style.transform = `rotate(${
            360 * (spinTurnRef.current + revolutionsStep2)
          }deg)`;
        }
      };

      Promise.all([sleep(6000), fakeCallApi(), runningStep1AndStep2()]).then(
        (res) => {
          console.log("xong lan 2");

          const rewardId = res[1];

          console.log("rewardId", rewardId);

          // setIsSpinning(true);
          const rewardDeg = rewardId * deg; // 0 60 120 180 240 300 360

          if (spinRef.current) {
            spinRef.current.style.transitionTimingFunction = "ease-out";
            spinRef.current.style.transitionDuration = "4000ms";
            spinRef.current.style.transform = `rotate(${
              360 *
                (spinTurnRef.current + revolutionsStep2 + revolutionsStep3) -
              rewardDeg +
              getRandomPositionInOneCone(deg)
            }deg)`;

            const totalRevolutions =
              revolutionsStep1 + revolutionsStep2 + revolutionsStep3;

            spinTurnRef.current += totalRevolutions;
            console.log("xong");
          }
        }
      );
    }
  };

  return (
    <div>
      <Header />

      <Spin
        size={size}
        disabled={false}
        spinItems={spinItems}
        onStart={onStart}
        spinRef={spinRef}
      />
    </div>
  );
}
