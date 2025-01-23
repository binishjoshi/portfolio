import { FaGithub, FaLinkedin } from "react-icons/fa";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  github: (props: IconProps) => <FaGithub {...props} />,
  linkedin: (props: IconProps) => <FaLinkedin {...props} />,
};
