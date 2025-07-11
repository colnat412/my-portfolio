import Avatar from '@/assets/images/mixi-1.png';
import { GitHubIcon, LinkedInIcon } from '@/assets/svgs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { Button } from '../ui/button';

export const AboutMe = () => {
  return (
    <div className="flex flex-row gap-4 py-10 px-20 w-full">
      <div className="flex flex-col gap-4 w-2/3">
        <h1 className="text-7xl font-extrabold tracking-tight bg-gradient-to-r from-green-300 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          Hello I'm Tan Loc (Colnat)
        </h1>
        <div className="text-3xl font-semibold flex flex-row gap-2 items-center">
          <span>I am a</span>
          <p className="text-3xl font-semibold text-green-500 dark:text-green-400 tracking-wide">
            Fullstack Developer.
          </p>
        </div>
        <p className="max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Full-stack developer passionate about building scalable web apps and
          real-time experiences with clean, modern code.
        </p>
        <div className="flex flex-col gap-6 w-1/4">
          <div className="px-2 flex flex-row gap-4 justify-start items-center">
            <Button className="cursor-pointer" variant="ghost">
              <LinkedInIcon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
            </Button>
            <Button className="cursor-pointer dark:text-white" variant="ghost">
              <GitHubIcon className="h-5 w-5 text-blue-700 dark:text-blue-400" />
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="w-4/5 p-5 cursor-pointer bg-green-500 dark:bg-green-500 text-white"
                variant="ghost"
              >
                Download Resume
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Resumes</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  Backend Developer
                  {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Frontend Developer
                  {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Fullstack Developer
                  {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex w-1/3">
        <Image
          src={Avatar}
          alt="Picture of Tan Loc"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
