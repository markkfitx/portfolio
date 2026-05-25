import navData from "@/app/data/navigation.json"

export type NavLink = {
  label: string
  url: string
}

export const mainNavLinks: NavLink[] = navData.navigation

/** In-app path, hash on home, or external/mailto as-is. */
export function resolveNavHref(url: string, pathname: string): string {
  if (
    url.startsWith("mailto:") ||
    url.startsWith("http://") ||
    url.startsWith("https://")
  ) {
    return url
  }

  if (url.startsWith("/#")) {
    return pathname === "/" ? url.slice(1) : url
  }

  if (url.startsWith("#")) {
    return pathname === "/" ? url : `/${url}`
  }

  return url
}

export function isNavLinkActive(
  url: string,
  pathname: string,
  hash: string
): boolean {
  if (url.startsWith("/contact")) return pathname === "/contact"
  if (url.startsWith("/about")) return pathname === "/about"

  const hashMatch = url.match(/#([^/?#]+)/)
  if (hashMatch) {
    const target = `#${hashMatch[1]}`
    return pathname === "/" && hash === target
  }

  if (url === "/" || url === "/#hero-section") {
    return pathname === "/" && (hash === "" || hash === "#hero-section")
  }

  return pathname === url
}
