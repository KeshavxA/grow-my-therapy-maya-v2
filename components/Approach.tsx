export default function Approach() {
    const listItems = [
        "Persistent feelings of sadness or hopelessness",
        "Trouble focusing or making decisions",
        "Difficulty maintaining relationships",
        "Feeling constantly exhausted or unmotivated",
        "A pervasive sense of being overwhelmed"
    ];

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[600px] md:h-auto bg-[#CCC] min-h-[500px]">
                <img
                    src="/office-1.jpg"
                    alt="Safe Space for Healing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="bg-[#CFCBD6] px-6 py-16 md:px-16 md:py-32 flex flex-col justify-center items-start text-[var(--text-green)]">
                <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
                    You don't have to do this all <span className="italic">alone</span>.
                </h2>
                <p className="font-sans mb-8 text-lg">
                    If you are facing any of these, there's hope:
                </p>
                <ul className="space-y-4 font-sans text-lg mb-12 list-disc pl-5 marker:text-[var(--text-green)]">
                    {listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <div className="mt-12 text-right w-full border-t border-[var(--text-green)] pt-4">
                    <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity">
                        Work With Me &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
