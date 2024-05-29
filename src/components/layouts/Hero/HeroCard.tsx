import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { MdOutlinePlayCircleOutline, MdChevronRight } from "react-icons/md";

const HeroCard = ({
  className,
  title,
  overview,
}: {
  className?: string;
  title?: string;
  overview?: string;
}) => {
  return (
    <Card
      className={cn(
        "sm:w-[650px] bg-transparent text-background border-none p-0",
        className
      )}>
      <CardContent className="space-y-3 sm:space-y-5 p-0">
        <div className="space-y-3 lg:space-y-5">
          <h1 className="text-4xl sm:text-7xl font-semibold">{title}</h1>
          <p className="w-[330px] sm:w-full text-sm sm:text-lg">{overview}</p>
        </div>

        <div className="inline-flex items-center gap-2">
          <Button className="sm:text-lg">
            <MdOutlinePlayCircleOutline className="size-5 sm:size-6 font-bold mr-2" />{" "}
            Play
          </Button>
          <Button variant={"destructive"} className="sm:text-lg">
            More Info
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default HeroCard;
