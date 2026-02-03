export default function Footer() {
    return (
        <footer className="w-full py-16 bg-[var(--bg-soft)] text-[var(--text-main)] border-t border-[var(--color-sage)]">
            <div className="container mx-auto px-6 text-center space-y-8">
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[var(--color-sage)]">
                    Dr. Maya Reynolds
                </h3>

                <div className="flex justify-center gap-12 font-sans text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-charcoal)]">
                    <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Facebook</a>
                    <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Twitter</a>
                </div>

                <div className="text-xs opacity-50 font-sans mt-8 tracking-wide">
                    &copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
