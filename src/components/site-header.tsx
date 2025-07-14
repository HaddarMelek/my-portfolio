import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { ToggleTheme } from "@/components/toggle-theme";
import { MAIN_NAV } from "@/config/site";

import { SiteHeaderWrapper } from "./site-header-wrapper";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function SiteHeader() {
  return (
    <SiteHeaderWrapper className="sticky inset-0 top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2 transition-shadow duration-300 data-[affix=true]:shadow-[0_0_16px_0_black]/8 not-dark:data-[affix=true]:**:data-header-container:after:bg-border dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80">
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <BrandContextMenu>
          <Link href="/" aria-label="Home" className="[&_img]:h-8">
            <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
          </Link>
        </BrandContextMenu>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center gap-2">
          <NavItemGitHub />
          <ToggleTheme />
          <MobileNav className="sm:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
