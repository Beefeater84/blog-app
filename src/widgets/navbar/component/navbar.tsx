import Link from "next/link";
import ThemeToggle from "@/features/swith-theme/components/theme-toggle";
import AuthButtons from "@/widgets/navbar/component/authButtons";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[80px] container border-b border-stroke-color">
      <div className="flex gap-2 items-center">
        <div className="font-poppins font-semibold text-xl text-logo-color mr-3">
          HIKING BLOG
        </div>
        <nav>
          <ul className="flex gap-[28px] font-poppins font-semibold text-menu-color tracking-{0.2px}">
            <li className="">
              <Link href="#" className="hover:text-active-color">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-active-color">
                Categories
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-active-color">
                Most popular posts
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
      <div>
        <AuthButtons />
      </div>
    </div>
  );
}
