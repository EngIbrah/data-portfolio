import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, ExternalLink, Linkedin } from "lucide-react";

export const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_pk6pah2",
        "template_1rstubt",
        formRef.current,
        "YQrAcyKXbfkOxVqXt"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
          setIsSubmitting(false);
        },
        () => {
          setStatus("Something went wrong. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Column 1: Text & Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6">
                <Mail className="w-3.5 h-3.5" />
                Contact Engineering
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Build Something <span className="text-blue-600">Exceptional</span>
              </h2>
              
              <p className="text-gray-500 mb-12 text-lg leading-relaxed">
                Whether you have a specific project in mind or just want to discuss the future of Data & AI, my inbox is always open.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "ibrahndagiwe99@gmail.com", href: "mailto:ibrahndagiwe99@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+255 748 412 022", href: "tel:+255748412022" },
                  { icon: MapPin, label: "Location", value: "Tanzania", href: "#" }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    className="flex items-center gap-4 group p-4 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gray-50/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</p>
                      <p className="text-gray-900 font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-[2rem] bg-gray-900 text-white relative overflow-hidden group">
                <div className="relative z-10">
                   <p className="text-sm font-medium text-gray-400 mb-2">Direct Networking</p>
                   <h4 className="text-xl font-bold mb-4">Connect on LinkedIn</h4>
                   <a 
                    href="https://www.linkedin.com/in/ibrahim-ndagiwe/" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 bg-blue-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-500 transition-colors"
                   >
                     Visit Profile <Linkedin className="w-4 h-4" />
                   </a>
                </div>
                <Linkedin className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
              </div>
            </div>

            {/* Column 2: The Form Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[2.5rem] border border-gray-200 p-8 md:p-10 shadow-2xl shadow-blue-900/5 relative">
                
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Identity</label>
                      <input
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                      <input
                        name="from_email"
                        type="email"
                        placeholder="email@example.com"
                        required
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Mission Brief</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 disabled:opacity-70 shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Initiate Conversation</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {status && (
                    <div className={`p-4 rounded-xl border flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${
                      status.includes("successfully") ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"
                    }`}>
                      {status.includes("successfully") ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                      <p className="text-sm font-medium">{status}</p>
                    </div>
                  )}
                </form>

                <p className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  Response Latency: ~24 Hours
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};