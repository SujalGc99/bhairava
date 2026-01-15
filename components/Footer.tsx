export default function Footer() {
    return (
        <footer className="bg-void-black border-t border-white/5 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-4">
                    <span className="text-lg font-bold tracking-widest text-bone-white font-display">
                        BHAIRAVA
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        Channeling the raw energy of ancient Kathmandu into modern streetwear. Wear the legacy.
                    </p>
                </div>

                <div>
                    <h4 className="text-temple-gold text-xs font-bold tracking-widest mb-6">SHOP</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-bone-white transition-colors">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-bone-white transition-colors">Best Sellers</a></li>
                        <li><a href="#" className="hover:text-bone-white transition-colors">Accessories</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-temple-gold text-xs font-bold tracking-widest mb-6">SUPPORT</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-bone-white transition-colors">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:text-bone-white transition-colors">Size Guide</a></li>
                        <li><a href="#" className="hover:text-bone-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-temple-gold text-xs font-bold tracking-widest mb-6">NEWSLETTER</h4>
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-bone-white focus:outline-none focus:border-temple-gold/50"
                        />
                        <button className="text-xs font-bold tracking-widest text-temple-gold text-left hover:text-white transition-colors">
                            SUBSCRIBE →
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                <p>© 2024 BHAIRAVA STUDIO. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-400">Instagram</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
