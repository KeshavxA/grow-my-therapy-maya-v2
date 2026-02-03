export default function FAQ() {
    const faqs = [
        {
            question: "Do you accept insurance?",
            answer: "I am an out-of-network provider. This allows us to prioritize your care without the restrictions often imposed by insurance companies. I can provide a superbill for you to submit for reimbursement."
        },
        {
            question: "Do you offer online therapy?",
            answer: "Yes, I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in Washington state."
        },
        {
            question: "How long are sessions?",
            answer: "Individual sessions are typically 50 minutes. Intake sessions and couples sessions may be longer, usually 75-90 minutes."
        },
        {
            question: "What is your approach to trauma?",
            answer: "I use a holistic, body-centered approach. We pace the work safely, ensuring you feel grounded and supported before processing deep emotional wounds."
        }
    ];

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-[var(--color-sand)] border-t border-[var(--color-sage)]">
            <div className="container mx-auto max-w-3xl">
                <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sage)] text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-8">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-[var(--color-sage)] pb-8 last:border-0">
                            <h3 className="font-serif text-xl text-[var(--color-charcoal)] mb-4">
                                {faq.question}
                            </h3>
                            <p className="font-sans text-[var(--color-charcoal)] opacity-80 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
