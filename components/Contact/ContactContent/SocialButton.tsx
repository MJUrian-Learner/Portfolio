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
        className="rounded-full w-12 h-12 relative hover:bg-gray-300"
      >
        <Image
          src={props.logoLink}
          alt="Social Icon"
          fill
          className="rounded-full object-cover p-1"
        />
      </Button>
    </Link>
  );
};

export default SocialButton;
