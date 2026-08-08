import Link from "next/link";
import { socialLinks } from "@/lib/site";

interface Props {
  // Class applied to each social link (controls size/shape per context).
  itemClassName?: string;
  iconClassName?: string;
  // Optional handler, e.g. to close the mobile menu on navigate.
  onNavigate?: () => void;
}

// Renders the social icon links (LinkedIn, GitHub, Medium) as a fragment.
// Callers provide the wrapping container and per-item styling.
export function SocialLinks({ itemClassName = "", iconClassName = "h-5 w-5", onNavigate }: Props) {
  return (
    <>
      {socialLinks.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          onClick={onNavigate}
          className={itemClassName}
        >
          <Icon className={iconClassName} />
        </Link>
      ))}
    </>
  );
}
