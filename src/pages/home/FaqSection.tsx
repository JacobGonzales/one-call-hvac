import { motion, useReducedMotion } from "motion/react";

import { faqs } from "./home-data";
import { SectionHeading } from "./SectionHeading";

export function FaqSection({
  openFaq,
  onToggle,
}: {
  openFaq: number | null;
  onToggle: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="oc-section oc-soft"
      data-section="what people ask us."
      aria-label="What People Ask Us."
    >
      <div className="oc-container">
        <SectionHeading
          centered
          eyebrow="Common Questions"
          lineOne="What People"
          lineTwo="Ask Us."
        />
        <div className="oc-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;
            return (
              <article
                key={faq.question}
                className={`oc-faq${isOpen ? " is-open" : ""}`}
                data-faq-index={index}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => onToggle(index)}
                >
                  {faq.question}
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                    }
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  id={answerId}
                  className="oc-faq-answer"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <div className="oc-faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
