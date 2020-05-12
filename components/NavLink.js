import Link from "next/link";

const NavLink = ({ href, name }) => (
  <Link href={href} passHref>
    <button className="hover:bg-gray-200 p-2 m-7 rounded" as="a">
      {name}
    </button>
  </Link>
);

export default NavLink;
