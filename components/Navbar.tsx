export default function Navbar() {
    return (
        <nav className="w-full py-6 px-6 md:px-16 flex justify-between items-center bg-transparent relative z-10">
            <div className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-main)] font-serif">
                Dr. Maya Reynolds
            </div>

            <div className="hidden md:flex gap-12 text-[var(--text-main)] font-medium text-sm md:text-base tracking-wide absolute left-1/2 transform -translate-x-1/2 font-sans">
                <a href="#" className="hover:opacity-70 transition-opacity">Therapy Services</a>
                <a href="#" className="hover:opacity-70 transition-opacity">About Dr. Maya</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Blog</a>
            </div>

            <div>
                <button className="px-6 py-2 border border-[var(--color-sage)] rounded-full text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] hover:bg-[var(--color-sage)] hover:text-white transition-colors">
                    Book Consultation
                </button>
            </div>
        </nav>
    );
}
