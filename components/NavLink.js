import Link from "next/link";

const NavLink = ({ href, name }) => (
  <Link href={href} passHref>
    <button className="hover:bg-gray-100 px-7 py-2 my-8 rounded" as="a">
      {name}
    </button>
  </Link>
);

export default NavLink;
