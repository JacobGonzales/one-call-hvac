import { MotionVisibility } from "@/components/MotionVisibility";

import { Icon } from "./Icon";

export function MobileStickyCta({ visible }: { visible: boolean }) {
  return (
    <MotionVisibility
      className={`occ-mobile-sticky${visible ? " is-visible" : ""}`}
      visible={visible}
      direction="bottom"
    >
      <a href="tel:+18018642045" className="occ-mobile-call"><Icon name="phone" />Call</a>
      <a href="#quoteForm" className="occ-mobile-form">Form <Icon name="arrow" /></a>
    </MotionVisibility>
  );
}
