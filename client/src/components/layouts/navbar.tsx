import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-10 px-20">
      <div className="flex">
        <span className="font-bold text-inherit">COLNAT</span>
      </div>
      <div className="flex flex-row gap-10">
        <Button className="cursor-pointer" variant="ghost">
          Projects
        </Button>

        <Button className="cursor-pointer" variant="ghost">
          Resume
        </Button>

        <Button className="cursor-pointer" variant="ghost">
          Contact
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};
