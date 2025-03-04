
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactCTA from '@/components/ContactCTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="content-section" ref={aboutRef} className="py-16 md:py-24 reveal">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-3 px-3 py-1 bg-movitax-blue/10 text-movitax-blue rounded-full text-sm font-medium">
                  About Movitax
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-movitax-darkGray">
                  Expert Financial Guidance <br />
                  <span className="text-movitax-blue">For Your Success</span>
                </h2>
                <p className="text-movitax-darkGray/70 mb-6">
                  At Movitax, we combine industry expertise with personalized service to deliver exceptional financial solutions. Our team of experienced professionals is dedicated to helping you navigate the complexities of finance and taxation.
                </p>
                <p className="text-movitax-darkGray/70 mb-8">
                  Whether you're an individual seeking tax planning assistance or a business in need of comprehensive financial advisory services, we're committed to your success and financial well-being.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-movitax-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-movitax-darkGray">Personalized Approach</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-movitax-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-movitax-darkGray">Industry Expertise</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-movitax-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-movitax-darkGray">Strategic Solutions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-movitax-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-movitax-darkGray">Exceptional Results</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Movitax Consultants team meeting"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-3/4 h-3/4 bg-movitax-gold/20 rounded-2xl z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 bg-movitax-blue/20 rounded-2xl z-0"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-movitax-darkGray text-white">
          <div className="container mx-auto px-6">
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
              <div className="text-center p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <Award className="h-8 w-8 text-movitax-blue" />
                </div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/70">Years of Experience</div>
              </div>
              
              <div className="text-center p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-movitax-blue" />
                </div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/70">Satisfied Clients</div>
              </div>
              
              <div className="text-center p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-movitax-blue" />
                </div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/70">Client Retention</div>
              </div>
              
              <div className="text-center p-6 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-movitax-blue" />
                </div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-white/70">Certified Experts</div>
              </div>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        
        <section ref={testimonialsRef} className="py-16 md:py-24 bg-movitax-lightGray reveal">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">What Our Clients Say</h2>
            <p className="section-subtitle text-center">
              Discover how we've helped businesses and individuals achieve their financial goals
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Movitax has transformed our financial strategy. Their expertise saved us significant tax dollars while ensuring complete compliance.",
                  author: "Sarah Johnson",
                  position: "CEO, InnoTech Solutions"
                },
                {
                  quote: "The team at Movitax provides invaluable guidance. Their advisory services have been instrumental in our company's growth.",
                  author: "Michael Chen",
                  position: "CFO, GrowthMetrics"
                },
                {
                  quote: "Their attention to detail and personalized approach sets them apart. I've recommended Movitax to colleagues with complete confidence.",
                  author: "Amanda Rodriguez",
                  position: "Small Business Owner"
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass-card p-8 rounded-xl">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-movitax-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-lg mb-6 italic text-movitax-darkGray/80">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-movitax-darkGray">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-movitax-darkGray/60">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
