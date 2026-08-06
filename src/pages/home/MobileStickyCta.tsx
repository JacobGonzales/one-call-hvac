import { MotionVisibility } from "@/components/MotionVisibility";
import { CONTACT_ROUTE } from "@/config/site";
import { Icon } from "./Icon";

export function MobileStickyCta({ visible }: { visible: boolean }) {
  return (
    <MotionVisibility
      className={`oc-mobile-sticky${visible ? " is-visible" : ""}`}
      visible={visible}
      direction="bottom"
    >
      <a href="tel:+18018642045" className="oc-mobile-call">
        <Icon name="phone" />
        Call
      </a>
      <a href={CONTACT_ROUTE} className="oc-mobile-quote">
        Free Quote
        <Icon name="arrow" />
      </a>
    </MotionVisibility>
  );
}
