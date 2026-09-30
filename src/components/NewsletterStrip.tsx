import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const NewsletterStrip: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="bg-[#faf7f3] pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#310712] via-[#480c1d] to-[#340713] text-white p-6 sm:p-10 shadow-lg border border-[#5c1527]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Floral Arrangement Thumbnail */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-start">
              <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-lg overflow-hidden border border-[#913b52]/50 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=500&q=85"
                  alt="Floral Bouquets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#3b0b17]/20" />
              </div>
            </div>

            {/* Center Column: Text */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#fcf5ef] tracking-wide">
                Stay inspired & be the first to know
              </h3>
              <p className="text-xs sm:text-[13px] text-[#e8cfc4]/80 tracking-wider mt-1 font-light">
                Exclusive offers, new arrivals, and fragrance stories.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-4">
              {subscribed ? (
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#e8cbbd] py-2.5 px-4 bg-[#23050c]/80 rounded-md border border-[#7a2238]">
                  <CheckCircle2 className="w-4 h-4 text-[#d9a084]" />
                  <span className="text-xs tracking-wider uppercase font-medium">
                    Welcome to the Inner Circle
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-[#fefdfb] text-[#2b1810] placeholder-[#8f7a70] text-xs px-4 py-3 rounded-xs focus:outline-none focus:ring-1 focus:ring-[#d8a892] border-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#24040c] hover:bg-[#180208] text-[#fbf6f2] text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase py-3 px-5 rounded-xs border border-[#7a2339] hover:border-[#a1324d] transition-all shrink-0 cursor-pointer"
                  >
                    SIGN ME UP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
