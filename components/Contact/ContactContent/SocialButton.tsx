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
        className="rounded-full lg:w-12 lg:h-12 relative hover:bg-gray-300"
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
