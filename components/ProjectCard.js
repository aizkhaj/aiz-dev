const ProjectCard = ({ href, logo, name, description, badge = null }) => {
  const badgeSpan = (<span className="rounded-full py-2 px-4 border-4 border-teal-500 text-teal-500">badge</span>);

  // create a logo if no logo available:

  return (
    <div className="mx-auto my-4 flex flex-row space-around justify-center rounded-lg border-4 border-gray-300 hover:border-gray-500 py-5 max-w-xl items-center">
      <div className="order-2 my-2 mx-4">
        <h1 className="capitalize text-2xl font-sans font-semibold">{name}</h1>
        <p className="text-gray-600">{description}</p>
        <a href={href} className="font-semibold text-lg text-teal-500 no-underline">{href}</a>
      </div>
      <div className="order-1 my-2 mx-4">
        {badge === null ? null : badgeSpan}
        <img src={logo} alt={`${name.toLowerCase()}-logo`} />
      </div>
    </div>
  );
}

export default ProjectCard;