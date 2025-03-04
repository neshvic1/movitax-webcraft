
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Award, CheckCircle, Shield, Users } from 'lucide-react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (historyRef.current) observer.observe(historyRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (historyRef.current) observer.unobserve(historyRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-20 bg-movitax-lightGray">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-3 px-3 py-1 bg-movitax-blue/10 text-movitax-blue rounded-full text-sm font-medium">
                About Us
              </div>
              
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold mb-6 text-movitax-darkGray reveal"
              >
                Your Trusted Financial Partner
              </h1>
              
              <p className="text-lg text-movitax-darkGray/70">
                Since 2008, Movitax Consultants has provided expert financial guidance to businesses and individuals, 
                combining industry expertise with personalized service to deliver exceptional results.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div 
              ref={historyRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal"
            >
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Movitax Consultants history"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-movitax-blue/20 rounded-2xl z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-movitax-gold/20 rounded-2xl z-0"></div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-movitax-darkGray">
                  Our History
                </h2>
                
                <p className="text-movitax-darkGray/70 mb-6">
                  Movitax Consultants was founded in 2008 by a group of experienced financial professionals who shared a vision 
                  of creating a firm that would provide truly personalized financial guidance to clients.
                </p>
                
                <p className="text-movitax-darkGray/70 mb-6">
                  Starting with a small team of just five consultants, we've grown to a firm of over 50 professionals serving 
                  clients across the country. Throughout our growth, we've maintained our commitment to personalized service and 
                  exceptional results.
                </p>
                
                <p className="text-movitax-darkGray/70">
                  Today, Movitax is recognized as a leader in tax planning, audit services, and financial advisory, known for 
                  our expertise, integrity, and client-focused approach.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-movitax-darkGray text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Approach</h2>
            
            <div 
              ref={valuesRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal"
            >
              <div className="text-center p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 transition-transform duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-movitax-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Accountability</h3>
                <p className="text-white/70">
                  We take full responsibility for our work and are committed to delivering exceptional results for every client.
                </p>
              </div>
              
              <div className="text-center p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 transition-transform duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-movitax-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-white/70">
                  We maintain the highest ethical standards in all our work, building trust through transparency and honesty.
                </p>
              </div>
              
              <div className="text-center p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-white/5 transition-transform duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-movitax-blue/20 flex items-center justify-center">
                  <Users className="h-8 w-8 text-movitax-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-white/70">
                  We work closely with our clients, involving them in every step of the process to ensure solutions that truly meet their needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Leadership Team</h2>
            <p className="section-subtitle text-center">
              Meet the experienced professionals who lead our firm
            </p>
            
            <div 
              ref={teamRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 reveal"
            >
              {[
                {
                  name: "Jennifer Wilson",
                  position: "Managing Partner",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  bio: "With over 20 years of experience in financial consulting, Jennifer leads our firm with expertise and vision."
                },
                {
                  name: "Robert Chen",
                  position: "Head of Tax Services",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  bio: "Robert specializes in complex tax strategies for businesses and high-net-worth individuals."
                },
                {
                  name: "Maria Rodriguez",
                  position: "Director of Audit",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  bio: "Maria brings precision and expertise to our audit services, ensuring compliance and accuracy."
                },
                {
                  name: "James Thompson",
                  position: "Advisory Services Lead",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  bio: "James guides clients through complex financial decisions with strategic insight and industry knowledge."
                },
                {
                  name: "Sarah Patel",
                  position: "Client Relations Director",
                  image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  bio: "Sarah ensures exceptional client experiences, focusing on communication and relationship management."
                },
                {
                  name: "David Washington",
                  position: "Technology Innovation",
                  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  bio: "David leads our digital transformation initiatives, implementing innovative solutions for efficiency."
                }
              ].map((member, index) => (
                <div key={index} className="glass-card group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-movitax-darkGray">
                      {member.name}
                    </h3>
                    <p className="text-movitax-blue font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-movitax-darkGray/70">
                      {member.bio}
                    </p>
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

export default About;
