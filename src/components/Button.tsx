import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  route: string;
  color: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, route, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div
      className="rounded-lg flex flex-row items-start justify-start pt-0 px-[11px] pb-px mix-blend-normal whitespace-nowrap text-left text-mid-3 text-white font-inter cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <b className="relative leading-[49px] inline-block min-w-[91px]">
        {text}
      </b>
    </div>
  );
};

export default Button;
