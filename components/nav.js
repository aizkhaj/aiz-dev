import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="flex flex-row space-between justify-end content-center items-end mx-auto w-screen max-w-screen-md">
      <NavLink href="/about" name="About" />
      <NavLink href="/blog" name="Blog" />
      <NavLink href="/" name="Home" />
    </nav>
  );
};

export default Nav;
