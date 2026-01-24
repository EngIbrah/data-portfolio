import { ChevronLeft, ChevronRight, Quote, User, Star, MessageSquare } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Ibrahim demonstrated strong analytical thinking during his internship, especially in data cleaning, visualization, and extracting insights that supported decision-making.",
    author: "Internship Supervisor",
    role: "Data & Operations Department",
  },
  {
    quote: "His ability to combine data analysis with basic web development made his projects stand out. He quickly learned new tools and applied them effectively.",
    author: "Project Mentor",
    role: "Software & Data Systems",
  },
  {
    quote: "Ibrahim worked on analytical projects involving customer behavior and operational data. He showed strong curiosity, consistency, and attention to detail.",
    author: "Team Lead",
    role: "Analytics & Reporting",
  },
  {
    quote: "As a final-year student, Ibrahim showed professionalism and a solid foundation in data analysis, SQL, and Python, with growing skills in machine learning.",
    author: "Academic Supervisor",
    role: "Computer Engineering Department",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Minimal Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 mb-4">
            <MessageSquare className="w-4 h-4" />
            Professional Feedback
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Feedback from
            <span className="block text-gradient bg-gradient-to-r from-blue-600 to-teal-500">
              Mentors & Supervisors
            </span>
          </h2>
          
          <p className="text-gray-600">
            Insights from professionals I've worked with during internships and projects
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-sm transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600/30" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-8">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-6 bg-blue-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={previous}
                  className="p-2.5 rounded-lg border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={next}
                  className="p-2.5 rounded-lg border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Testimonial Count */}
            <div className="text-center mt-6 text-sm text-gray-500">
              {activeIdx + 1} of {testimonials.length}
            </div>
          </div>

          {/* All Testimonials Grid (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-2 gap-4 mt-12">
            {testimonials.slice(0, 2).map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-200 hover:shadow-xs transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="text-xs font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};