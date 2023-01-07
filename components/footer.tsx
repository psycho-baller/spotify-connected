import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
// import { HStack } from "@chakra-ui/react";

// Different ways to add a footer
// https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b
export default function Footer() {
  return (
    <footer className="footer">
        <a
          href="https://github.com/psycho-baller/spotify-connected"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rami--maalouf/"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <BsLinkedin />
        </a>
        <a
          href="https://rami-maalouf.vercel.app/"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <BiHomeAlt />
        </a>
        <a
          href="mailto:rami.rami@ucalgary.ca"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://www.youtube.com/channel/UCf9CoIzXxFcwlwaNuN5_1BQ"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <AiFillYoutube />
        </a>
    </footer>
  );
}
