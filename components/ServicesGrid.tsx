export default function ServicesGrid() {
    return (
        <section className="w-full py-20 px-6 md:px-16 bg-[var(--bg-cream)]">
            <div className="container mx-auto">
                <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-green)] text-center mb-16">
                    My Specialties
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col border border-[var(--text-green)] bg-[#E5E0D5] p-10 min-h-[600px] h-full justify-between relative overflow-hidden transition-all hover:shadow-lg">
                        <div className="z-10 relative flex flex-col">
                            <h3 className="font-sans text-3xl font-bold text-[var(--text-green)] mb-6">
                                Self-Esteem
                            </h3>
                            <p className="font-sans text-[var(--text-green)] opacity-90 leading-relaxed text-lg mb-8">
                                Do you struggle with a harsh inner critic? Building a strong sense of self-worth is key to living a fulfilled life.
                            </p>

                            <ul className="text-[var(--text-green)] opacity-80 space-y-4 mb-8 font-medium text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Quieting the Inner Critic
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Setting Healthy Boundaries
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Cultivating Self-Compassion
                                </li>
                            </ul>

                            <a href="#" className="text-sm font-bold uppercase tracking-widest text-[var(--text-green)] border-b-2 border-[var(--text-green)] self-start pb-1 hover:opacity-70 transition-opacity">
                                Learn More
                            </a>
                        </div>

                        <div className="self-center mt-12 w-64 h-64 rounded-full flex items-center justify-center overflow-hidden border border-white/20 shadow-inner shrink-0">
                            <img src="/service_self_esteem.png" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" alt="Self-Esteem" />
                        </div>
                    </div>

                    <div className="flex flex-col border border-[var(--text-green)] bg-[#E5E0D5] p-10 min-h-[600px] h-full justify-between relative overflow-hidden transition-all hover:shadow-lg">
                        <div className="z-10 relative flex flex-col">
                            <h3 className="font-sans text-3xl font-bold text-[var(--text-green)] mb-6">
                                Relationships
                            </h3>
                            <p className="font-sans text-[var(--text-green)] opacity-90 leading-relaxed text-lg mb-8">
                                Navigating relationships can be complex. I help you explore attachment patterns to form deeper connections.
                            </p>

                            <ul className="text-[var(--text-green)] opacity-80 space-y-4 mb-8 font-medium text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Attachment Styles
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Communication Skills
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Conflict Resolution
                                </li>
                            </ul>

                            <a href="#" className="text-sm font-bold uppercase tracking-widest text-[var(--text-green)] border-b-2 border-[var(--text-green)] self-start pb-1 hover:opacity-70 transition-opacity">
                                Learn More
                            </a>
                        </div>
                        <div className="self-center mt-12 w-64 h-64 rounded-full flex items-center justify-center overflow-hidden border border-white/20 shadow-inner shrink-0">
                            <img src="/service_relationships.png" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" alt="Relationships" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col border border-[var(--text-green)] bg-[#E5E0D5] p-10 min-h-[600px] h-full justify-between relative overflow-hidden transition-all hover:shadow-lg">
                        <div className="z-10 relative flex flex-col">
                            <h3 className="font-sans text-3xl font-bold text-[var(--text-green)] mb-6">
                                Burnout
                            </h3>
                            <p className="font-sans text-[var(--text-green)] opacity-90 leading-relaxed text-lg mb-8">
                                Feeling constantly overwhelmed? Together, we'll identify strategies to manage stress and prevent future burnout.
                            </p>

                            <ul className="text-[var(--text-green)] opacity-80 space-y-4 mb-8 font-medium text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Work-Life Balance
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Stress Management
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[var(--text-green)] rounded-full"></span>
                                    Finding Purpose
                                </li>
                            </ul>

                            <a href="#" className="text-sm font-bold uppercase tracking-widest text-[var(--text-green)] border-b-2 border-[var(--text-green)] self-start pb-1 hover:opacity-70 transition-opacity">
                                Learn More
                            </a>
                        </div>
                        <div className="self-center mt-12 w-64 h-64 rounded-full flex items-center justify-center overflow-hidden border border-white/20 shadow-inner shrink-0">
                            <img src="/service_burnout.png" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" alt="Burnout" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
