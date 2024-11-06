import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const AboutScreen = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Link className={cn(buttonVariants({ variant: "default" }))} to="/">
        Go to home
      </Link>
    </div>
  );
};

export default AboutScreen;
