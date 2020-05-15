import { NextSeo } from "next-seo";
import Container from "../components/Container";
import Stack from "../components/Stack";
import Heading from "../components/Heading";

const url = "https://aizaz.dev/about";
const title = "About – Aizaz Khaja";
const description = "I'm Aizaz and I do things. This is about me.";

const About = () => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
    <Container>
      <Stack>
        <div className="mt-7 mb-10">
          <Heading>About</Heading>
        </div>
        <div className="markdown">
          <p>My name's Aizaz. That's pronounced Ae-zaz.</p>
          <p>
            I'm a thinker and a doer. The core of why I pursue so many things is
            because I don't like to be boxed in.
          </p>
          <p>
            It just so happens that I enjoy journaling, and see writing as a
            means to learning more while connecting with people and organizations.
          </p>
          <p>
            This place is for me to show off my experiments/projects in code, talk
            about the new things I learn or just discuss challenges and how you
            can also overcome them. It's also where I get to share thoughts on a
            wide range of topics including but not limited to:
          </p>
          <ul>
            <li>Digital Marketing</li>
            <li>Business and Economics</li>
            <li>
              Finance and Capital Markets (I've traded the stock, forex and
              futures markets on my own, since 2008).
            </li>
          </ul>
          <p>
            Overall, I want to make an impact with my code by solving problems.
            "Create value" is my focus.
          </p>
        </div>
      </Stack>
    </Container>
  </>
);

export default About;
