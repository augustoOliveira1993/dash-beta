import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ButtonAvb";
import { ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import Image, { StaticImageData } from "next/image";

type NavBarProps = {
  sidebar: string | null;
  setUrlModal: () => void;
};

const NavBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & NavBarProps
>(({ className, sidebar, setUrlModal, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-screen bg-avb-green-600 overflow-hidden",
      className
    )}
    {...props}
  >
    <Button
      size="icon"
      variant="outline"
      className={`${sidebar === "closed" && "left-5 top-1 bg-avb-green-400/30"} border border-border/20 backdrop-blur-lg text-avb-green-100 absolute top-5 right-3 z-50 size-6`}
      onClick={setUrlModal}
    >
      {sidebar === "open" && <ChevronLeft className="size-4" />}
      {sidebar === "closed" && <ChevronRight className="size-4" />}
    </Button>
    <div className="h-full flex flex-col justify-between text-background">
      {props.children}
    </div>
  </div>
));
NavBar.displayName = "NavBar";

type NavHeaderProps = {
  href: string;
  headerTitle: string;
  urlImage: string | StaticImageData;
  sidebar: string | null;
};

const NavBarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & NavHeaderProps
>(({ className, href, sidebar, headerTitle, urlImage, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center px-4 min-h-16 border-b border-border/20 gap-3",
      className
    )}
    {...props}
  >
    <Link href={href} className="flex items-center gap-3">
      <Image
        src={urlImage}
        className={`${sidebar === "closed" && "hidden"} h-8 w-auto`}
        alt="Logo avb sidebar"
      />

      <h2
        className={`${sidebar === "closed" && "hidden"} self-center text-xl font-semibold whitespace-nowrap dark:text-white`}
      >
        {headerTitle}
      </h2>
    </Link>
  </div>
));
NavBarHeader.displayName = "NavBarHeader";

const NavBarTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
NavBarTitle.displayName = "NavBarTitle";

interface NavLinkProps extends LinkProps {
  href: string;
  className: string;
  Icon: LucideIcon;
  children: React.ReactNode;
}

const NavBarLink = ({
  className,
  Icon,
  children,
  href,
  ...props
}: NavLinkProps) => (
  <Link
    href={href}
    className={cn(
      "flex items-center p-2 text-sm rounded-md text-avb-green-100/70 hover:bg-avb-green-400/20",
      className
    )}
    {...props}
  >
    {Icon && <Icon className="size-4" />}
    {children}
  </Link>
);

const NavBarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "space-y-2 font-medium px-3 py-5 overflow-y-auto h-full scrollbar-hidden",
      className
    )}
    {...props}
  />
));
NavBarContent.displayName = "NavBarContent";

const NavBarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between py-4 bg-avb-green-600 px-3 border-t border-border/20 w-full",
      className
    )}
    {...props}
  />
));
NavBarFooter.displayName = "NavBarFooter";

export {
  NavBar,
  NavBarHeader,
  NavBarFooter,
  NavBarTitle,
  NavBarLink,
  NavBarContent,
};
