import { Button } from "./Button";
import { BNBIcon, SharkIcon } from "./icon";

export default function Header() {
  return (
    <div className="w-full h-[54px] flex items-center justify-between">
      <div>
        <div className="text-[16px] font-[600] text-white">MR Bop</div>
        <div className="flex items-center gap-[8px]">
          <Button variant="ghost" className="pl-[3px] pr-[8px] py-[3px]">
            <SharkIcon size={18} />
            500.2
          </Button>
          <Button variant="ghost" className="pl-[3px] pr-[8px] py-[3px]">
            <BNBIcon size={18} />
            500.2
          </Button>
        </div>
      </div>
      <Button>
        <span className="leading-[18px]">Claim SHARK</span>
      </Button>
    </div>
  );
}
