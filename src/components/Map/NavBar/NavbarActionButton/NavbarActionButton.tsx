import { useState } from "react";
import { Toggle } from "~/components/ui/Toggle";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "~/components/ui/hover-card";

interface Props {
  buttonLabel: string;
  hoverContent: string;
}

export const NavbarActionButton = ({ buttonLabel, hoverContent }: Props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <Toggle
          onClick={handleToggle}
          className="h-8 w-8 rounded-sm text-xl font-semibold"
        >
          {buttonLabel}
        </Toggle>
      </HoverCardTrigger>
      <HoverCardContent className="rounded-sm text-xs p-2" sideOffset={10}>
        {hoverContent}
      </HoverCardContent>
    </HoverCard>
  );
};
