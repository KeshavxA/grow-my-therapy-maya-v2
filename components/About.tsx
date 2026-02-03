export default function About() {
    return (
        <section className="w-full px-6 md:px-16 py-12 md:py-24 bg-[var(--bg-soft)]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="flex flex-col items-start space-y-8">
                    <h2 className="font-serif text-4xl md:text-6xl text-[var(--text-main)]">
                        Meet Dr. Maya.
                    </h2>
                    <div className="font-sans text-lg text-[var(--text-main)] opacity-90 space-y-6 max-w-md font-light">
                        <p>
                            I am a licensed clinical psychologist dedicated to helping individuals in Austin navigate life's complexities with resilience and self-compassion.
                        </p>
                        <p>
                            My approach emphasizes the mind-body connection, integrating evidence-based therapies like CBT and Mindfulness to support your holistic well-being.
                        </p>
                    </div>

                    <button className="mt-4 px-8 py-3 border border-[var(--text-main)] bg-[var(--sage-primary)] text-white text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-main)] transition-colors">
                        More About My Practice &rarr;
                    </button>
                </div>
                <div className="relative w-full max-w-md mx-auto md:max-w-none ml-auto">
                    <div className="relative w-full aspect-[3/4] bg-[#8DA399] rounded-t-[500px] overflow-hidden shadow-md">
                        <img
                            src="/office-1.jpg"
                            alt="Dr. Maya Reynolds Therapy Office"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
