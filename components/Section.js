const Section = ({ children, sectionName }) => (
  <div className="mb-12">
    <h1 className="font-sans text-4xl font-bold mb-2">{sectionName}</h1>
    {children}
  </div>
);

export default Section;
