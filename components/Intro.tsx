export default function Intro() {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#EAE6DE] px-6 py-16 md:px-16 md:py-32 flex flex-col justify-center items-start space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-green)]">
                    Live a fulfilling life.
                </h2>
                <div className="font-sans text-[var(--text-green)] space-y-6 max-w-md opacity-90 text-lg">
                    <p>
                        Life can be challenging—especially when you're trying to balance your personal and professional life.
                    </p>
                    <p>
                        It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                    </p>
                </div>
                <a href="#" className="inline-block border-b border-[var(--text-green)] pb-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-green)] hover:opacity-60 transition-opacity">
                    Get In Touch &rarr;
                </a>
            </div>
            <div className="relative h-[500px] md:h-auto bg-[#D8D4CC]">
                <img
                    src="/office-2.jpg"
                    alt="Calming Therapy Space"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
