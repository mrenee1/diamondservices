import type { ReactNode } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PhoneContact } from "@/lib/contact";

type ContactPhoneProps = {
  contact: PhoneContact;
  className?: string;
  style?: React.CSSProperties;
  iconClassName?: string;
  linkClassName?: string;
  showNumber?: boolean;
  suffix?: ReactNode;
};

/** Call + text icons with optional clickable number */
export function ContactPhone({ contact, className, style, iconClassName = "w-4 h-4", linkClassName, showNumber = true, suffix }: ContactPhoneProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 flex-wrap", className)} style={style}>
      <a
        href={contact.tel}
        className={cn("contact-phone-action", linkClassName)}
        aria-label={`Call ${contact.display}`}
      >
        <Phone className={iconClassName} aria-hidden />
      </a>
      <a
        href={contact.sms}
        className={cn("contact-phone-action", linkClassName)}
        aria-label={`Text ${contact.display}`}
      >
        <MessageCircle className={iconClassName} aria-hidden />
      </a>
      {showNumber && (
        <a href={contact.tel} className={cn("hover:underline", linkClassName)}>
          {contact.display}
          {suffix}
        </a>
      )}
    </span>
  );
}

type ContactPhoneButtonsProps = {
  contact: PhoneContact;
  callClassName?: string;
  textClassName?: string;
  className?: string;
};

/** Side-by-side Call and Text buttons */
export function ContactPhoneButtons({ contact, callClassName, textClassName, className }: ContactPhoneButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <a href={contact.tel} className={callClassName}>
        <Phone className="w-4 h-4" aria-hidden />
        Call
      </a>
      <a href={contact.sms} className={textClassName}>
        <MessageCircle className="w-4 h-4" aria-hidden />
        Text
      </a>
    </div>
  );
}
