import { Section, SectionHeading } from '@/components/site/section'
import { Reveal } from '@/components/site/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Is NOIRÉ suitable for sensitive skin?',
    answer:
      'Our formulas are designed to be gentle and suitable for everyday routines. If your skin is highly reactive, patch-test any new product first.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Results vary by skin type and routine, but many people begin noticing improvements in hydration and texture within several weeks of consistent use.',
  },
  {
    question: 'Are NOIRÉ products cruelty-free?',
    answer: 'Yes. NOIRÉ products are cruelty-free.',
  },
  {
    question: 'Can I use the products every day?',
    answer:
      'Yes. The cleanser, serum and barrier cream are designed to work together as a simple daily skincare routine.',
  },
  {
    question: 'What is your return policy?',
    answer: 'Unused products can be returned within 30 days of delivery.',
  },
]

export function Faq() {
  return (
    <Section id="faq" className="scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />

        <Reveal>
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pr-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  )
}
