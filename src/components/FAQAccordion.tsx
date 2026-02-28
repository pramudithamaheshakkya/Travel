import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="faq-accordion">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`faq-item ${openIndex === index ? 'open' : ''}`}
                >
                    <button
                        className="faq-item__trigger"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        aria-expanded={openIndex === index}
                    >
                        <span className="faq-item__question">{item.question}</span>
                        <ChevronDown className="faq-item__icon" size={20} />
                    </button>
                    <div className="faq-item__body">
                        <div className="faq-item__answer">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
