import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/contact";

type ContactEmailProps = {
  className?: string;
  style?: React.CSSProperties;
  iconClassName?: string;
  showIcon?: boolean;
  showAddress?: boolean;
};

export default function ContactEmail({
  className,
  style,
  iconClassName = "w-4 h-4",
  showIcon = true,
  showAddress = true,
}: ContactEmailProps) {
  return (
    <a
      href={CONTACT.mailto}
      className={cn("inline-flex items-center gap-2 hover:underline break-all", className)}
      style={style}
    >
      {showIcon && <Mail className={cn("flex-shrink-0", iconClassName)} aria-hidden />}
      {showAddress && CONTACT.email}
    </a>
  );
}
