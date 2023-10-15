import Link from "next/link";
import ThemeToggle from "@/features/swith-theme/components/theme-toggle";

export default function Navbar(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
