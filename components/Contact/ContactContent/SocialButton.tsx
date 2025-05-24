import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface SocialButtonProps {
  logoLink: string;
  href: string;
}

const SocialButton = ({ ...props }: SocialButtonProps) => {
  return (
    <Link href={props.href} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        size="icon"
        // Hacky solution to make the button always have white background
        className="rounded-full lg:w-12 lg:h-12 relative hover:bg-white bg-white border-none hover:cursor-pointer"
      >
        <Image
          src={props.logoLink}
          alt="Social Icon"
          fill
          className="rounded-full object-cover"
        />
      </Button>
    </Link>
  );
};

export default SocialButton;
