import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { CONTACT_ROUTE } from "@/config/site";
import { Icon } from "./Icon";

export function MobileStickyCta({ visible }: { visible: boolean }) {
  return (
    <MotionVisibility
      className={`oca-mobile-sticky${visible ? " is-visible" : ""}`}
      visible={visible}
      direction="bottom"
    >
      <a href="tel:+18018642045" className="oca-mobile-call"><Icon name="phone" />Call</a>
      <Link href={CONTACT_ROUTE} className="oca-mobile-quote">Free Quote <Icon name="arrow" /></Link>
    </MotionVisibility>
  );
}
