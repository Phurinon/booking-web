import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from 'lucide-react';
import UserIcon from "./UserIcon";
import { Button } from "@/components/ui/button";
import { links } from "@/utils/links";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";

function DropdownListMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'}>
          <AlignLeft />
          <UserIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md border rounded-md">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          links.map((item, index) => {
            return(
              <DropdownMenuItem key={index}>
                <Link to ={item.href} >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            )
          })
        }

        <DropdownMenuSeparator />
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Sign in</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Sign up</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          <DropdownMenuItem>
            <SignOutLink/>
          </DropdownMenuItem>
        </SignedIn>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownListMenu;
