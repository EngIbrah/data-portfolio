import { ChevronLeft, ChevronRight, Quote, User, Star, MessageSquare, ShieldCheck } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Ibrahim demonstrated strong analytical thinking during his internship, especially in data cleaning, visualization, and extracting insights that supported critical decision-making.",
    author: "Internship Supervisor",
    role: "Data & Operations Department",
    organization: "KUWASA",
    verified: true
  },
  {
    quote: "His ability to bridge the gap between data analysis and web development made his projects stand out. He is a fast learner who applies new tools effectively to solve real problems.",
    author: "Project Mentor",
    role: "Software & Data Systems",
    organization: "Kreative Karakana",
    verified: true
  },
  {
    quote: "Ibrahim showed strong curiosity and consistency. His attention to detail in handling operational datasets was impressive for a junior developer.",
    author: "Team Lead",
    role: "Analytics & Reporting",
    organization: "TANESCO",
    verified: true
  },
  {
    quote: "Ibrahim possesses a solid foundation in SQL and Python. His professionalism and growth in machine learning make him a standout Computer Engineering student.",
    author: "Academic Supervisor",
    role: "Computer Engineering Dept",
    organization: "University",
    verified: true
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Professional Feedback
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Mentors</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Testimonials from supervisors and lead engineers at Tanzania's leading utility and tech organizations.
            </p>
          </div>

          {/* Main Card */}
          <div className="relative group">
            <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-xl shadow-blue-900/5 relative">
              
              {/* Quote Icon Background */}
              <Quote className="absolute top-8 right-10 w-20 h-20 text-blue-50/50 -z-0" />

              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-10 italic">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeIdx].author}</h4>
                      <p className="text-sm text-blue-600 font-semibold uppercase tracking-tighter">
                        {testimonials[activeIdx].role} @ {testimonials[activeIdx].organization}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Navigation Arrows */}
                  <div className="flex gap-3">
                    <button onClick={prev} className="p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all bg-white shadow-sm">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={next} className="p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all bg-white shadow-sm">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIdx ? "w-8 bg-blue-600" : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-20 pt-10 border-t border-gray-100">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Internship Locations</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
               <span className="text-xl font-bold">TANESCO</span>
               <span className="text-xl font-bold">KUWASA</span>
               <span className="text-xl font-bold">KREATANA</span>
               <span className="text-xl font-bold">UDSM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};