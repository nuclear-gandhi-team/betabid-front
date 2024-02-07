import {
  LibrarySquare,
  LucideIcon,
  Pin,
  ScanSearch,
  Settings,
} from "lucide-react";

export type NavigationLink = {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  hasSeparator?: boolean;
  link: string;
};

export const navigationLinks: NavigationLink[] = [
  {
    title: "Browse",
    icon: ScanSearch,
    variant: "default",
    link: "../../main/browse",
  },
  {
    title: "Saved",
    icon: Pin,
    variant: "ghost",
    link: "../../main/saved",
  },
  {
    title: "My Lots",
    icon: LibrarySquare,
    variant: "ghost",
    hasSeparator: true,
    link: "../../main/my-lots",
  },
  {
    title: "Settings",
    icon: Settings,
    variant: "ghost",
    link: "../../main/settings",
  },
];
