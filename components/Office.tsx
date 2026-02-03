export default function Office() {
    return (
        <section className="w-full py-24 px-6 md:px-16 bg-[var(--color-sand)]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-20 space-y-6">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sage)]">
                        A Space for Healing
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-charcoal)] opacity-80 max-w-2xl">
                        Our office is designed to be a sanctuary from the outside world—calm, private, and rooted in nature.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <img
                                src="/office-1.jpg"
                                alt="Calming Therapy Office Seating Area"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <img
                                src="/office-2.jpg"
                                alt="Therapy Office Natural Light and Plants"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
