const ProjectCard = ({ href, logoPath = null, name, description, badge = null }) => {
  const badgeSpan = (<span className="rounded-full py-2 px-4 border-4 border-teal-500 text-teal-500">badge</span>);

  const logoDiv = (
    <div className="order-1 my-2 ml-4 mr-2">
      <img className="w-16 rounded" src={logoPath} alt={`${name.toLowerCase()}-logo`} />
    </div>
  )

  // create a logo if no logo available:

  return (
    <a href={href} target="_blank" className="no-underline">
      <div className="mx-auto my-4 flex flex-row space-around justify-center rounded-lg border-4 border-gray-300 hover:border-gray-500 py-2 max-w-lg items-center">
        <div className="order-2 my-2 mx-4">
          <h1 className="capitalize text-2xl font-sans font-semibold">{name}</h1>
          <p className="text-gray-600 mb-1">{description}</p>
          {/* <p className="font-semibold text-base text-teal-500 no-underline">{href}</p> */}
        </div>
        {logoPath !== null ? logoDiv : null}
      </div>
    </a>
  );
}

export default ProjectCard;