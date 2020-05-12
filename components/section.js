const Section = ({ children, sectionName }) => (
  <div className="mb-7">
    <h1 className="font-sans text-4xl font-bold">{sectionName}</h1>
    {children}
  </div>
);

export default Section;
