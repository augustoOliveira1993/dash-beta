"use client";
import { ComponentProps, useEffect } from "react";
import {
  ActivityIcon,
  BarChartIcon,
  BoxIcon,
  CalculatorIcon,
  FileTextIcon,
  FlameIcon,
  HomeIcon,
  MonitorIcon,
  MoonIcon,
  PackageIcon,
  PauseCircleIcon,
  TargetIcon,
  ThermometerIcon,
  User,
} from "lucide-react";
import { Button } from "./ui/ButtonAvb";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LOGOAVBHORIZONTAL from "@/assets/horizontal-logo.png";
import { useTheme } from "next-themes";
import {
  NavBar,
  NavBarContent,
  NavBarFooter,
  NavBarHeader,
  NavBarLink,
} from "./ui/NavBarAvb";

const menuItems = [
  { name: "Página Inicial", href: "/", icon: HomeIcon },
  { name: "Balanço de Massa", href: "/balanco-de-massa", icon: CalculatorIcon },
  { name: "Documentos", href: "/documentos", icon: FileTextIcon },
  { name: "Gestão de Metas", href: "/gestao-de-metas", icon: TargetIcon },
  { name: "Indicadores", href: "/indicadores", icon: BarChartIcon },
  { name: "Materiais / MRP", href: "/materiais-mrp", icon: BoxIcon },
  { name: "Monitoramento", href: "/monitoramento", icon: MonitorIcon },
  { name: "Paradas", href: "/paradas", icon: PauseCircleIcon },
  { name: "Preditivas", href: "/preditivas", icon: ActivityIcon },
  { name: "Sincronismo", href: "/sincronismo", icon: FlameIcon },
  { name: "Sincronismo LC", href: "/sincronismo-l", icon: PackageIcon },
  {
    name: "Temperatura Gaiolas",
    href: "/temperatura-gaiolas",
    icon: ThermometerIcon,
  },
];

export const SideBarAvb = ({ children, ...props }: ComponentProps<"div">) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sidebar = searchParams.get("aside");
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    return theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const aside = searchParams.get("aside");
    if (!aside) {
      router.replace(`${window.location.pathname}?aside=closed`);
    }
  }, [searchParams, router]);

  const setUrlModal = () => {
    const newAside = sidebar === "closed" ? "open" : "closed";
    const newUrl = `${window.location.pathname}?aside=${newAside}`;
    router.push(newUrl);
  };

  const getLinkWithAside = (href: string): string => {
    const asideParam = sidebar ? `?aside=${sidebar}` : "";
    return `${href}${asideParam}`;
  };

  const isActiveLink = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <main
      className={`flex w-full md:grid ${sidebar === "open" ? "md:grid-cols-[14rem_1fr]" : "md:grid-cols-[4rem_1fr]"}`}
    >
      <NavBar sidebar={sidebar} setUrlModal={setUrlModal}>
        <NavBarHeader
          sidebar={sidebar}
          urlImage={LOGOAVBHORIZONTAL}
          href={getLinkWithAside("/")}
          headerTitle="SIG AVB"
        />

        <NavBarContent>
          {menuItems.map((item, index) => (
            <NavBarLink
              key={index}
              Icon={item.icon}
              href={getLinkWithAside(item.href)}
              className={`${isActiveLink(item.href) && "bg-avb-green-400/60 text-white"} ${sidebar === "closed" && "justify-center"} `}
            >
              <span className={`ms-3 ${sidebar === "closed" && "hidden"}`}>
                {item.name}
              </span>
            </NavBarLink>
          ))}
        </NavBarContent>

        <NavBarFooter
          className={`${sidebar === "closed" && "justify-center"} `}
        >
          <Button
            className="text-avb-green-100 border border-border/20 rounded-full"
            variant="outline"
            size="icon"
          >
            <User className="size-4" />
          </Button>

          {sidebar === "open" && (
            <Button
              onClick={toggleTheme}
              className="text-avb-green-100 border border-border/20"
              variant="outline"
              size="icon"
            >
              <MoonIcon className="size-4" />
            </Button>
          )}
        </NavBarFooter>
      </NavBar>

      <div className="overflow-y-auto h-screen bg-background">{children}</div>
    </main>
  );
};
