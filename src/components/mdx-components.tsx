import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function MdxContent({ code }: MdxProps) {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
}
