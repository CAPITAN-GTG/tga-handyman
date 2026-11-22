import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandMark({ className, priority = false }: BrandMarkProps) {
  return (
    <Image
      src="/logo.webp"
      alt="TGA Handyman"
      width={150}
      height={52}
      priority={priority}
      className={cn(
        "h-10 w-auto origin-left transition-transform duration-200 ease-out hover:scale-110",
        className
      )}
      style={{ width: "auto" }}
    />
  );
}
