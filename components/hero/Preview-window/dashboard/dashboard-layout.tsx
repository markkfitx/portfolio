"use client"

import { useState } from "react"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer"
import Header from "./header"
import Sidebar from "./sidebar"

/**
 * Vaul portals the drawer to `document.body` by default, so it covers the real viewport.
 * To scope it to the preview “browser” frame:
 * 1. Pass a DOM node to `Drawer`’s `container` prop (Radix Portal target).
 * 2. Wrap that area in `transform-gpu` so `position: fixed` on the overlay/panel uses this
 *    box as the containing block (not the real window).
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [navOpen, setNavOpen] = useState(false)
  const [drawerPortal, setDrawerPortal] = useState<HTMLDivElement | null>(null)

  return (
    <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden bg-zinc-950 transform-gpu">
      {/* Mount Radix/Vaul portal here so overlay + sheet stay inside the preview */}
      <div
        ref={setDrawerPortal}
        className="pointer-events-none absolute inset-0 z-80"
        aria-hidden
      />

      <div className="shrink-0 border-b border-white/10 bg-zinc-900/90">
        <Header onOpenSidebar={() => setNavOpen(true)} />
      </div>

      {/* Above z-80 drawer portal mount so buttons/hover paint and hit-test reliably */}
      <div className="relative flex h-full min-h-0 w-full flex-1 flex-row rounded-t-lg bg-zinc-950">
        <div className="hidden h-full min-h-0 md:flex">
          <Sidebar />
        </div>

        {children}

        {drawerPortal ? (
          <Drawer
            container={drawerPortal}
            direction="left"
            modal
            noBodyStyles
            open={navOpen}
            onOpenChange={setNavOpen}
            shouldScaleBackground={false}
          >
            <DrawerContent
              aria-describedby={undefined}
              className="flex h-full max-h-full w-[min(100%,280px)] max-w-none flex-col rounded-none border-r border-white/10 bg-zinc-900 p-0 data-[vaul-drawer-direction=left]:sm:max-w-none"
            >
              <DrawerTitle className="sr-only">Store navigation</DrawerTitle>
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <Sidebar />
              </div>
            </DrawerContent>
          </Drawer>
        ) : null}
      </div>
    </div>
  )
}
