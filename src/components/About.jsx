import { LANG } from "../utils/langConstants";

const About = ({ lang }) => {
  const data = LANG[lang];
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <h1>{data.title1}</h1>
      <p>{data.desc2}</p>
      <h1>{data.title3}</h1>
      <p>{data.desc3}</p>
      <h1>{data.title4}</h1>
      <p>{data.desc4}</p>
    </>
  );
};

export default About;
