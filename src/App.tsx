import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronsRight, Hexagon, Search, PenTool, 
  Cpu, Megaphone, ShoppingCart, Monitor, ArrowRight,
  BarChart, Zap, CheckCircle2, Globe, Lightbulb, Settings, ClipboardList,
  Smartphone, Share2, MapPin, FileText, TrendingUp, Film, Mail, Code, Layout,
  Instagram, Youtube, MessageCircle, Linkedin
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed z-50 transition-all duration-300 left-2 right-2 md:left-8 md:right-8 top-4 max-w-7xl mx-auto rounded-full ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3' : 'bg-white/80 backdrop-blur-md shadow-sm py-4'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Hexagon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-gray-900">greatbase</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors uppercase">Home</a>
            <a href="#store" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors uppercase">Store</a>
            <a href="#about" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors uppercase">About</a>
            <a href="#faq" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors uppercase">FAQ</a>
            <a href="#contact" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors uppercase">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-4 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
             </div>
             <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 hover:shadow-lg transition-all">
                Login
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border border-gray-100 overflow-hidden absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-900 uppercase">Home</a>
              <a href="#store" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-900 uppercase">Store</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-900 uppercase">About</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-900 uppercase">FAQ</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-900 uppercase">Contact</a>
              
              <div className="pt-6 border-t border-gray-100 flex flex-col space-y-4">
                 <div className="flex items-center gap-6 text-gray-600">
                    <a href="#" className="hover:text-blue-600"><Instagram className="w-6 h-6" /></a>
                    <a href="#" className="hover:text-blue-600"><Youtube className="w-6 h-6" /></a>
                    <a href="#" className="hover:text-blue-600"><MessageCircle className="w-6 h-6" /></a>
                    <a href="#" className="hover:text-blue-600"><Linkedin className="w-6 h-6" /></a>
                 </div>
                 <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold mt-2 hover:bg-blue-700">
                    Login
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-100/50 blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left mt-16 lg:mt-0">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-700 font-bold text-sm mb-6 border border-blue-100 shadow-sm"
             >
               <span className="w-2 h-2 rounded-full bg-blue-600 animate-[ping_2s_infinite]"></span>
               Digital Marketing Agency In Kochi
             </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tight mb-6 leading-[1.1] text-gray-900"
            >
              Increase your <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">web traffic</span> with SEO.
            </motion.h1>
            
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-medium"
            >
              Walk into the digital world with Greatbase technologies and reach your business goals with our advanced strategies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                Get Started
              </button>
              <button className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all w-full sm:w-auto">
                View Services
              </button>
            </motion.div>
          </div>

          {/* Right Column - Illustration */}
          <div className="order-1 lg:order-2 relative w-full max-w-lg mx-auto h-[400px] lg:h-[500px] flex justify-center items-center">
             
             {/* Background glow for illustration */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"></div>

             {/* Main Dashboard UI floating */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="absolute z-10 w-full max-w-[320px] sm:max-w-sm bg-white/90 backdrop-blur-xl border border-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6"
             >
                <div className="flex justify-between items-center mb-6">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                         <BarChart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                         <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Total Traffic</p>
                         <p className="text-xl font-black text-gray-900">2.4M</p>
                      </div>
                   </div>
                   <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-black rounded-full flex items-center gap-1">
                      <span className="text-lg leading-none mb-0.5">↑</span> 45%
                   </div>
                </div>
                
                {/* Bar chart mock */}
                <div className="flex items-end gap-2 sm:gap-3 h-28 mb-2">
                   {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-gray-100 rounded-t-sm relative group overflow-hidden">
                         <motion.div 
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                           className={`absolute bottom-0 w-full rounded-t-sm transition-colors ${i === 6 ? 'bg-gradient-to-t from-blue-600 to-cyan-400' : 'bg-blue-200'}`}
                         ></motion.div>
                      </div>
                   ))}
                </div>
             </motion.div>

             {/* Floating Card 1 - Search Ranking */}
             <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-[5%] md:top-[10%] right-[-10%] md:right-[-5%] z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 w-48 animate-[bounce_6s_infinite]"
             >
                <div className="flex justify-between items-center mb-3">
                   <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Search className="w-5 h-5 text-indigo-500" />
                   </div>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Position</span>
                </div>
                <p className="text-sm font-semibold text-gray-500 mb-1">Google Search</p>
                <p className="text-3xl font-black text-gray-900">#1</p>
             </motion.div>

             {/* Floating Card 2 - Performance */}
             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="absolute bottom-[5%] md:bottom-[10%] left-[-10%] md:left-[-5%] z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-[bounce_5s_infinite_reverse]"
             >
                <div className="relative w-14 h-14 flex items-center justify-center">
                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="98, 100" />
                   </svg>
                   <div className="absolute font-bold text-sm text-gray-900">98</div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Score</p>
                  <p className="text-xs text-green-500 font-semibold">Excellent</p>
                </div>
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

const InfoTextSection = () => (
  <section className="py-16 md:py-24 bg-white border-b border-gray-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
         <div className="md:col-span-5">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Digital Marketing" className="w-full h-auto rounded-xl shadow-lg mix-blend-multiply opacity-90" />
         </div>
         <div className="md:col-span-7">
            <h2 className="text-3xl font-black text-gray-900 mb-6 leading-snug tracking-tight">Digital Marketing Company in Kochi</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
               Greatbase Technologies, the leading digital marketing company in Kochi - Kerala, is an interactive web design organization which has the great expertise to create your brand identity. We offer complete web design, web development, digital marketing service, logo design and graphic design services. We have the skilled and experienced professionals in the field of website design and development to cater all kinds of websites, static pages, landing pages, web portals and other services that are compulsory in today's competitive world.
            </p>
         </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-6 mx-auto max-w-2xl leading-tight">A Digital Marketing Company In Kochi Dedicated To Improving Your Business</h2>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          There are increased chances to lose <span className="font-semibold text-gray-800">potential customers</span> as your website lack visibility in key search engines. Are you frustrated because of this? Don't worry, as our skilled team of digital marketing and <span className="font-semibold text-blue-600">SEO specialists in Kerala</span> is ready to help you to solve the problems.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          When talking about our team, we have a team of highly experienced and exceptionally talented people. They are SEO and <span className="font-semibold text-blue-600">Digital Marketing Experts in India</span> who are passionate about delivering high quality web services to all our esteemed clients. We love to see our clients are experiencing unparalleled growth in their stream. If you are looking for any <span className="font-semibold text-gray-800">reputation management services</span> or you want some help with the <span className="font-semibold text-gray-800">PPC management</span> or you want help from the <span className="font-semibold text-gray-800">SEO experts in Kochi</span> - Ernakulam, we are there to help you. We cover all such services.
        </p>
        <p className="text-gray-600 leading-relaxed text-sm">
          We also offer other marketing services like <span className="font-semibold text-gray-800">Facebook Marketing, YouTube Marketing</span>, Instagram, LinkedIn and other different marketing services along with the most <span className="font-semibold text-gray-800">pocket friendly SEO packages in Cochin</span>. Another important thing is we maintain transparency in all our processes through informing our clients all the changes and works we do. Thus it is making us a trusted <span className="font-semibold text-gray-800">digital marketing agency in Ernakulam</span>. We maintain a close sync with our clients and create a lasting relationship with them.
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-6">Peerless Growth Guaranteed When You Partner With Best Digital Marketing Agency In Kochi</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Now the world is digitalized and there a rising competition to reach at the top of search engines. You must make sure that your website is getting noticed by targeted audience. With the help of the Best <span className="font-semibold text-blue-600">Digital Marketing Company in Kochi</span> achieve your desired ranking in search engines. We are there in helping you to stay on the top by combining advanced and efficient technologies with our great creativity.
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-6">Reach First In Search Engines – Benefit From The Excellence Of Our SEO Services In Ernakulam</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          Our digital marketing team is there with you to help you dominate your targeted clients and market. We help you to achieve your desired results in search engine. Our team will work with you to improve the results and ensure unprecedented growth. We listen to your requirements; make use of the techniques and tools to get a bespoke marketing strategy which will extend your online reach.
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-6">Guaranteed Results</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          We are working with a result focused and customer centric approach. Thus we do excellent SEO and digital marketing services to give the brand's a better outreach and presence. From the beginning itself our marketing techniques will amaze you. We deliver best results to our clients within few months.
        </p>
      </div>

      <div className="text-center pt-8 border-t border-gray-100">
        <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8 mx-auto max-w-2xl leading-tight">Get Connected To The Top Digital Marketing Company In Kochi</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          For further details and discussions regarding your requirements, please feel free to contact with our team at Dubai <span className="font-bold text-blue-700">+971 586133411</span>.<br/>
          We are also available for contact via email <a href="mailto:info@greatbase.ae" className="font-bold text-blue-700 hover:underline">info@greatbase.ae</a>
        </p>
      </div>
    </div>
  </section>
);

const BlueBannerSection = () => (
  <section className="py-12 md:py-20 bg-[#006cb5] text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-full h-full opacity-10 flex items-center justify-end">
       <div className="w-[800px] h-[800px] rounded-full border-[100px] border-white/20 translate-x-1/2"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8 leading-tight">Bring Your Business To The Next Level</h2>
          <div className="space-y-4 text-blue-50 text-sm leading-relaxed">
            <p>We create you unique designs that will make you stand apart from your competitors. The preferences of people are changing and so we need to change the way we interact with them.</p>
            <p>We understand your business needs and derive ideas for website. Then we make it functional with suitable graphics and contents.</p>
            <p>We work with good planning and implementation of it in the proposed project. Thus there is a good time management with our team.</p>
            <p>We work with dedication to bring out your dream of branding. The brand identity is created by unique designs and arts.</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm shrink-0">
             {/* Tablet outline with hands */}
             <div className="aspect-[3/4] border-2 border-white/50 rounded-[40px] p-2 relative bg-transparent flex flex-col justify-between">
                <div className="w-full h-full border border-white/20 rounded-[30px] flex items-center justify-center relative overflow-hidden">
                   {/* Tablet screen content abstract */}
                   <div className="w-20 w-20 border border-white/20 absolute"></div>
                   <div className="absolute inset-0 m-4 border border-white/20 rounded-xl"></div>
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-white/50"></div>
                     <div className="w-2 h-2 rounded-full bg-white/50"></div>
                   </div>
                </div>
                {/* Hand sketches */}
                <div className="absolute top-1/3 -left-12 opacity-50">
                   <svg width="80" height="150" viewBox="0 0 100 200" fill="none" stroke="white" strokeWidth="2">
                      <path d="M90 100 C70 90, 50 110, 40 180 M90 80 C60 70, 30 100, 20 180" />
                   </svg>
                </div>
                <div className="absolute bottom-1/4 -right-12 opacity-50 scale-x-[-1]">
                   <svg width="80" height="150" viewBox="0 0 100 200" fill="none" stroke="white" strokeWidth="2">
                      <path d="M90 100 C70 90, 50 110, 40 180 M90 80 C60 70, 30 100, 20 180" />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => {
  const steps = [
    { num: "1", title: "Research Project", icon: <Search className="w-10 h-10 text-gray-800" strokeWidth={1.5} /> },
    { num: "2", title: "Find Ideas", icon: <Lightbulb className="w-10 h-10 text-gray-800" strokeWidth={1.5} /> },
    { num: "3", title: "Start Optimize", icon: <Settings className="w-10 h-10 text-gray-800" strokeWidth={1.5} /> },
    { num: "4", title: "Reach Target", icon: <BarChart className="w-10 h-10 text-gray-800" strokeWidth={1.5} /> }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800">
            Working <span className="text-[#3a7ca5]">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center relative"
            >
              <div className="relative w-40 h-40 rounded-full border border-dashed border-gray-400 flex items-center justify-center bg-transparent mb-6 group hover:border-[#3a7ca5] transition-colors duration-300">
                <div className="absolute top-0 right-2 w-8 h-8 bg-[#0a6aba] text-white rounded-full flex items-center justify-center font-bold text-sm z-10 transition-transform group-hover:scale-110">
                  {step.num}
                </div>
                <div className="w-32 h-32 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:bg-blue-50/50 transition-colors duration-300">
                   <div className="flex items-center justify-center relative">
                      {step.icon}
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-300 rounded-full mix-blend-multiply opacity-50"></div>
                   </div>
                </div>
              </div>
              <h4 className="text-base font-bold text-gray-900">{step.title}</h4>
              
              {/* Connector Lines */}
              {idx < steps.length - 1 && (
                 <div className="hidden md:block absolute top-20 left-[calc(50%+5rem)] w-[calc(100%-10rem)] h-[1px] border-t border-dashed border-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "UI / UX DESIGN", desc: "Greatbase technologies, the best web design company in Kerala - India, located in Cochin, Perinthalmanna and Dubai.", icon: <Monitor className="w-8 h-8" /> },
    { title: "UI / UX DEVELOPMENT", desc: "Greatbase technologies provides high-impact web development service which also helps to enhance profit a business at expected level.", icon: <Cpu className="w-8 h-8" /> },
    { title: "DIGITAL MARKETING", desc: "Digital marketing is the promotion of products or services or brands through different kinds of electronic.", icon: <Megaphone className="w-8 h-8" /> },
    { title: "Mobile App Design", desc: "Now the mobile users had upgraded to smart phones. And the smart phones had become smarter rapidly. They are", icon: <Smartphone className="w-8 h-8" /> },
    { title: "Social Media Marketing", desc: "As you know social media marketing is the best.", icon: <Share2 className="w-8 h-8" /> },
    { title: "E-commerce Websites", desc: "Greatbase technologies provide Electronic Commerce (E-commerce) consists of the purchasing and selling of products or services", icon: <ShoppingCart className="w-8 h-8" /> }
  ];
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800">
            Our <span className="text-[#3a7ca5]">Services</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="flex flex-col items-center text-center group"
            >
               <div className="relative mb-6">
                 <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 shrink-0 group-hover:border-blue-300 group-hover:scale-105 transition-all duration-300">
                    <div className="relative">
                       {service.icon}
                       {/* Decorative dots based on image */}
                       <div className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-blue-300"></div>
                       <div className="absolute bottom-0 -left-2 w-1.5 h-1.5 rounded-full bg-pink-300"></div>
                    </div>
                 </div>
               </div>
               <h3 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wider">{service.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-[280px]">{service.desc}</p>
               <a href="#" className="font-bold text-[#006cb5] flex items-center gap-1 hover:text-blue-800 transition-colors text-sm tracking-wide">
                 Read More <span className="text-[10px] tracking-tighter ml-1">&gt;</span>
               </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-[#1a5bc2] text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-900/10 pattern-dots opacity-20"></div>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
      <p className="text-lg md:text-xl font-medium leading-relaxed mb-16 italic max-w-3xl mx-auto">
        "It was a pleasure working with greatbase as they helped closely with every step of the way, and we valued their creative input that exceeded our expectations. "
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
         <div className="flex items-center gap-3 opacity-100">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold overflow-hidden shadow-lg border-2 border-white">
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Client 1" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold tracking-widest uppercase text-sm">FEZAINTEIORS</span>
         </div>
         <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-12 h-12 bg-blue-800 rounded-full border-2 border-transparent overflow-hidden">
               <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Client 2" className="w-full h-full object-cover mix-blend-luminosity opacity-50" />
            </div>
            <span className="font-bold tracking-widest uppercase text-sm text-blue-100">oliviamattres.com</span>
         </div>
         <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-12 h-12 bg-blue-800 rounded-full border-2 border-transparent overflow-hidden">
               <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Client 3" className="w-full h-full object-cover mix-blend-luminosity opacity-50" />
            </div>
            <span className="font-bold tracking-widest uppercase text-sm text-blue-100 text-left leading-tight">Changara<br/>Heritage</span>
         </div>
      </div>
      <div className="flex justify-center gap-2 mt-12">
         <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer transition-colors"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer transition-colors"></div>
      </div>
    </div>
  </section>
);

const BlogSection = () => (
  <section className="py-16 md:py-24 bg-[#fbfbfb]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800">
          Latest <span className="text-[#006cb5]">Blog</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white hover:shadow-xl transition-shadow duration-300">
           <div className="h-44 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Blog 1" className="w-full h-full object-cover" />
           </div>
           <div className="p-6 text-center border border-t-0 border-gray-100 flex flex-col items-center h-[240px]">
             <h3 className="font-bold text-gray-900 mb-3 text-[15px] leading-snug">Digital Marketing in Kerala: The Future</h3>
             <p className="text-[13px] text-gray-500 mb-6 line-clamp-3">This is the age of digital marketing. Every shop now needs an online strategy for its products to market them to its audience and customers.</p>
             <div className="mt-auto">
               <a href="#" className="font-bold text-[#006cb5] text-[13px] hover:underline">read more</a>
             </div>
           </div>
        </div>
        
        <div className="bg-[#3a7ca5] text-white hover:shadow-xl transition-shadow duration-300 border border-[#3a7ca5]">
           <div className="h-44 flex items-center justify-center p-6 text-center">
              <div>
                 <p className="font-medium mb-3 text-sm tracking-wide text-blue-50">Helps to grow your business !</p>
                 <div className="w-20 h-20 mx-auto">
                    {/* Add SEO graphic replacement */}
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white drop-shadow-md">
                       <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" opacity="0.8" />
                       <text x="50" y="55" fontSize="24" textAnchor="middle" fill="#3a7ca5" fontWeight="bold">SEO</text>
                    </svg>
                 </div>
              </div>
           </div>
           <div className="p-6 text-center bg-white text-gray-900 flex flex-col items-center h-[240px]">
             <div className="flex gap-1 justify-center mb-2">
                <span className="text-[10px] text-gray-400">WEBSITE | DIGITAL DESIGNS | SEO</span>
             </div>
             <h3 className="font-bold mb-2 text-[15px] leading-snug">Keyword Research & SEO Competitor Analysis</h3>
             <p className="text-[13px] text-gray-500 mb-4 line-clamp-3">The SEO is a service which includes many different works. Keyword research and SEO competitor analysis...</p>
             <div className="mt-auto">
               <a href="#" className="font-bold text-[#006cb5] text-[13px] hover:underline">read more</a>
             </div>
           </div>
        </div>

        <div className="bg-white hover:shadow-xl transition-shadow duration-300">
           <div className="h-44 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Blog 3" className="w-full h-full object-cover" />
           </div>
           <div className="p-6 text-center border border-t-0 border-gray-100 flex flex-col items-center h-[240px]">
             <h3 className="font-bold text-gray-900 mb-3 text-[15px] leading-snug">Branding Your Business is now Made Easier</h3>
             <p className="text-[13px] text-gray-500 mb-6 line-clamp-3">Branding is a marketing practice. It is a practice that a company does in creating its logo, name and other overall designs.</p>
             <div className="mt-auto">
               <a href="#" className="font-bold text-[#006cb5] text-[13px] hover:underline">read more</a>
             </div>
           </div>
        </div>
      </div>
      <div className="text-center mt-10">
         <button className="text-[13px] font-bold text-[#006cb5] hover:underline">view all</button>
      </div>
    </div>
  </section>
);

const ClientsSection = () => {
   // Simulated diverse clients
   const clients = Array.from({length: 24});
   return (
      <section className="py-16 md:py-24 bg-[#f4f6f8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-800">
              Some of Our <span className="text-[#006cb5]">Clients</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
             {clients.map((_, idx) => (
                <div key={idx} className="h-14 bg-white border border-gray-200 rounded flex items-center justify-center p-2 hover:shadow-md hover:border-[#006cb5] hover:scale-105 transition-all cursor-pointer">
                   <div className="w-full h-full bg-gray-200/40 rounded"></div>
                </div>
             ))}
          </div>
        </div>
      </section>
   );
};

const GlobalSection = () => (
   <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         <div className="relative max-w-5xl mx-auto">
            {/* Base World Map Image replacement for SVG */}
            <div className="w-full h-auto opacity-30 select-none">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" className="w-full" alt="World Map" />
            </div>
            
            {/* Title Overlay */}
            <h2 className="absolute top-[80%] lg:top-[70%] left-0 text-2xl md:text-5xl font-black tracking-tight text-[#006cb5] text-left drop-shadow-md">
               We work globally
            </h2>

            {/* Simulated Data Points */}
            <div className="absolute top-[20%] left-[20%]">
               <div className="w-8 h-8 md:w-16 md:h-16 rounded-full border border-blue-400 text-blue-500 font-bold text-[6px] md:text-[10px] flex items-center justify-center bg-white/80">USA</div>
            </div>
            <div className="absolute top-[18%] left-[48%]">
               <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-blue-400 text-blue-500 font-bold text-[5px] md:text-[8px] flex items-center justify-center bg-white/80">UK</div>
            </div>
            <div className="absolute top-[25%] left-[55%]">
               <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-blue-400 text-blue-500 font-bold text-[5px] md:text-[8px] flex items-center justify-center bg-white/80">KSA</div>
            </div>
            <div className="absolute top-[35%] left-[65%]">
               <div className="w-8 h-8 md:w-14 md:h-14 rounded-full border border-blue-400 text-blue-500 font-bold text-[6px] md:text-[8px] flex items-center justify-center bg-white/80">INDIA</div>
            </div>
            <div className="absolute top-[50%] left-[58%]">
               <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-blue-400 text-blue-500 font-bold text-[5px] md:text-[8px] flex items-center justify-center bg-white/80">UAE</div>
            </div>
         </div>
      </div>
   </section>
);


const Footer = () => (
  <footer className="bg-[#1f1f1f] text-gray-400 leading-relaxed font-sans mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-transparent border-2 border-white rounded-full flex items-center justify-center">
              <Hexagon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">greatbase</span>
          </div>
          <p className="text-sm font-medium mb-6 leading-relaxed">
            Greatbase Technologies, the best web design and SEO company in Kerala, is an interactive web design organization which has the great expertise to create your brand identity.
          </p>
          <h4 className="text-white font-bold mb-4">Follow us</h4>
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-[#3b5998] flex items-center justify-center text-white cursor-pointer hover:bg-opacity-80 transition-colors"><span className="text-sm font-bold">f</span></div>
             <div className="w-8 h-8 rounded-full bg-[#1da1f2] flex items-center justify-center text-white cursor-pointer hover:bg-opacity-80 transition-colors"><span className="text-sm font-bold">t</span></div>
             <div className="w-8 h-8 rounded-full bg-[#bd081c] flex items-center justify-center text-white cursor-pointer hover:bg-opacity-80 transition-colors"><span className="text-sm font-bold">P</span></div>
             <div className="w-8 h-8 rounded-full bg-[#cd201f] flex items-center justify-center text-white cursor-pointer hover:bg-opacity-80 transition-colors"><span className="text-sm font-bold">Y</span></div>
             <div className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white cursor-pointer hover:bg-opacity-80 transition-colors"><span className="text-sm font-bold">in</span></div>
          </div>
        </div>
        
        <div className="col-span-1 lg:col-span-2 lg:pl-10">
          <h4 className="font-bold text-white mb-6">Infopark Technology<br/>Business Centre</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex gap-3">
               <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
               <div>
                  <p>Office No:15 , 4th floor</p>
                  <p>Thapasya Building , Kakkanad</p>
                  <p>Infopark Phase 1 , Kerala</p>
                  <p>682042</p>
               </div>
            </li>
            <li className="flex gap-3 items-center pt-2 group">
               <Smartphone className="w-5 h-5 text-[#006cb5] shrink-0 group-hover:text-white transition-colors" />
               <div>
                  <p className="font-bold text-white">+971 586133411</p>
                  <a href="#" className="text-[#006cb5] hover:underline text-xs">Give us a call</a>
               </div>
            </li>
            <li className="flex gap-3 items-center pt-2 group">
               <Smartphone className="w-5 h-5 text-[#006cb5] shrink-0 group-hover:text-white transition-colors" />
               <div>
                  <p className="font-bold text-white">www.greatbase.ae</p>
                  <a href="#" className="text-[#006cb5] hover:underline text-xs">Give us a call</a>
               </div>
            </li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold text-white mb-6">Useful Links</h4>
           <ul className="space-y-3 text-sm font-medium">
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> Digital Marketing</a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> Social Media Marketing</a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> UI/UX Development</a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> UI/UX Designing</a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> Graphic Designing</a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> E-commerce Websites</a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-xs text-gray-600">&gt;</span> Mobile Application</a></li>
           </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-[13px] font-medium pt-8 border-t border-gray-800">
         <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white">Web design company in Dubai</a>
            <a href="#" className="hover:text-white">Web design company in India</a>
            <a href="#" className="hover:text-white">Web design company in Saudi Arabia</a>
            <a href="#" className="hover:text-white">Web design company in Cochin</a>
            <a href="#" className="hover:text-white">Web design company in Bangalore</a>
            <a href="#" className="hover:text-white">Web design company in Maldives</a>
            <a href="#" className="hover:text-white">Web design company in Kerala</a>
            <a href="#" className="hover:text-white">Mobile App Development Company In Kochi</a>
         </div>
         <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white">Digital marketing company in Kochi</a>
            <a href="#" className="hover:text-white">Digital marketing agency in Kochi</a>
            <a href="#" className="hover:text-white">IT company in Kochi</a>
            <a href="#" className="hover:text-white">Web design company in perinthalmanna</a>
            <a href="#" className="hover:text-white">Web design company in malappuram</a>
            <a href="#" className="hover:text-white">SEO company in Vyttila</a>
            <a href="#" className="hover:text-white">SEO company in Calicut</a>
            <a href="#" className="hover:text-white">SEO company in Kerala</a>
         </div>
         <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white">SEO company in Dubai</a>
            <a href="#" className="hover:text-white">SEO company in Cochin</a>
            <a href="#" className="hover:text-white">SEO company in Malappuram</a>
            <a href="#" className="hover:text-white">SEO company in Kottayam</a>
            <a href="#" className="hover:text-white">SEO company in Perinthalmanna</a>
            <a href="#" className="hover:text-white">SEO company in Thrissur</a>
         </div>
      </div>
    </div>
    
    <div className="bg-[#111111] py-5 px-4 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p>Copyright © 2026, All Right Reserved Greatbase Technologies</p>
           <div className="flex gap-6 font-semibold">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Services</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
           </div>
        </div>
    </div>
  </footer>
);

const Solutions360Section = () => {
  const solutions = [
    { title: "Content Strategy\n& Copywriting", icon: <FileText className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Performance\nMarketing", icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Social Media\nMarketing", icon: <Share2 className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Video Production\n& Editing", icon: <Film className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Branding &\nDesign", icon: <PenTool className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Lead Generation\n& Funnels", icon: <BarChart className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Email &\nSMS Marketing", icon: <Mail className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Search Engine\nOptimization", icon: <Search className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "Website\nDevelopment", icon: <Code className="w-8 h-8" strokeWidth={1.5} /> },
    { title: "UI/UX", icon: <Layout className="w-8 h-8" strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-24 bg-[#050510] relative overflow-hidden flex items-center justify-center min-h-[900px] border-b border-[#1a1a3a]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[#050510]">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#111122_1px,transparent_1px),linear-gradient(to_bottom,#111122_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_40%,#050510_100%)]"></div>
      </div>
      
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-[700px] flex items-center justify-center hidden lg:flex">
         
         {/* Center Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
            <h2 className="text-7xl font-black tracking-tight mb-2 flex items-start justify-center">
               360<span className="text-4xl mt-2 font-bold leading-none">°</span>
            </h2>
            <p className="text-xl font-light tracking-wide text-gray-300 whitespace-nowrap">
               Digital Marketing<br/>Solutions
            </p>
         </div>

         {/* Circle Container */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#1e1e3f]/50">
            {solutions.map((item, i) => {
               const angle = (i * (360 / solutions.length)) - 90; // Start at top
               return (
                 <div
                   key={i}
                   className="absolute top-1/2 left-1/2 z-30 hover:z-40"
                   style={{
                     transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(350px) rotate(${-angle}deg)`
                   }}
                 >
                   <motion.div
                     initial="initial"
                     whileInView="inView"
                     whileHover="hover"
                     variants={{
                       initial: { opacity: 0, scale: 0.8 },
                       inView: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: i * 0.05 } },
                       hover: { scale: 1.1, transition: { duration: 0.3 } }
                     }}
                     viewport={{ once: true }}
                     className="flex flex-col items-center justify-center w-[130px] h-[130px] bg-[#0c0c1d] border border-[#2a2a4b] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.8)] cursor-pointer hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group"
                   >
                      <motion.div 
                         variants={{
                           hover: { 
                             scale: [1, 1.25, 1],
                             rotate: [0, 8, -8, 0],
                             transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                           }
                         }}
                         className="text-blue-500 mb-3 group-hover:text-blue-400 transition-colors duration-300"
                      >
                         {item.icon}
                      </motion.div>
                      <span className="text-gray-300 text-[11px] font-medium text-center whitespace-pre-line leading-tight px-1 group-hover:text-white transition-colors">
                         {item.title}
                      </span>
                   </motion.div>
                 </div>
               );
            })}
         </div>
      </div>

      {/* Mobile Grid View */}
      <div className="lg:hidden relative z-10 w-full px-4 text-center">
         <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-2 flex items-start justify-center">
               360<span className="text-2xl mt-1 font-bold leading-none">°</span>
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wide text-gray-300">
               Digital Marketing Solutions
            </p>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {solutions.map((item, i) => (
               <motion.div
                 key={i}
                 initial="initial"
                 whileInView="inView"
                 whileHover="hover"
                 variants={{
                   initial: { opacity: 0, y: 20 },
                   inView: { opacity: 1, y: 0, transition: { duration: 0.3, delay: i * 0.05 } },
                   hover: { scale: 1.05, transition: { duration: 0.3 } }
                 }}
                 viewport={{ once: true }}
                 className="flex flex-col items-center justify-center p-6 bg-[#0c0c1d] border border-[#2a2a4b] rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] active:border-blue-500 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] cursor-pointer transition-all duration-300 group z-10 hover:z-20 relative"
               >
                  <motion.div 
                     variants={{
                       hover: { 
                         scale: [1, 1.25, 1],
                         rotate: [0, 8, -8, 0],
                         transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                       }
                     }}
                     className="text-blue-500 mb-3 group-hover:text-blue-400 transition-colors duration-300 group-active:scale-110 group-active:-rotate-12"
                  >
                     {item.icon}
                  </motion.div>
                  <span className="text-gray-300 text-xs md:text-sm font-medium text-center whitespace-pre-line leading-tight group-hover:text-white transition-colors">
                     {item.title}
                  </span>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 font-sans flex flex-col">
      <Navbar />
      <Hero />
      <main>
        <InfoTextSection />
        <BlueBannerSection />
        <ProcessSection />
        <Solutions360Section />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <ClientsSection />
        <GlobalSection />
      </main>
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-3 z-50">
         <div className="w-10 h-10 md:w-12 md:h-12 bg-[#006cb5] rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-y-1 transition-transform cursor-pointer">
            <Smartphone className="w-5 h-5 md:w-6 md:h-6" />
         </div>
         <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25d366] rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-y-1 transition-transform cursor-pointer">
            <Share2 className="w-5 h-5 md:w-6 md:h-6" />
         </div>
      </div>
    </div>
  );
}
