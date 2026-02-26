// HPI 1.7-V
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  FlaskConical, 
  Leaf, 
  QrCode, 
  MapPin, 
  Sprout, 
  Factory, 
  FileCheck, 
  Smartphone,
  CheckCircle2,
  Globe
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- CANONICAL DATA SOURCES ---
// Preserving original data structures and content logic

const PORTAL_DATA = [
  {
    id: 'farmer',
    title: 'FARMER PORTAL',
    icon: Leaf,
    description: 'Digital registration of harvested herbs with GPS tracking, offline data capture, and image upload capabilities for rural environments.',
    link: '/farmer-portal',
    features: ['GPS Location Tracking', 'Offline Data Capture', 'Image Upload', 'Batch Registration'],
    color: 'bg-highlightyellow',
    textColor: 'text-secondary'
  },
  {
    id: 'processor',
    title: 'PROCESSING UNIT',
    icon: Factory,
    description: 'Record post-harvest operations including drying methods, grinding status, and storage conditions with complete batch traceability.',
    link: '/processing-unit',
    features: ['Batch Tracking', 'Processing Logs', 'Storage Monitoring', 'Chain of Custody'],
    color: 'bg-secondary',
    textColor: 'text-secondary-foreground'
  },
  {
    id: 'lab',
    title: 'LABORATORY TESTING',
    icon: FlaskConical,
    description: 'Upload test reports, moisture analysis, pesticide screening, and DNA authentication results with quality approval workflows.',
    link: '/laboratory-testing',
    features: ['Test Report Upload', 'Quality Standards', 'Batch Approval', 'Certification'],
    color: 'bg-primary',
    textColor: 'text-primary-foreground'
  },
  {
    id: 'consumer',
    title: 'CONSUMER PORTAL',
    icon: QrCode,
    description: 'Public interface for product verification through QR code scanning, displaying complete provenance and laboratory certificates.',
    link: '/consumer-portal',
    features: ['QR Code Scanning', 'Product Verification', 'Origin Mapping', 'Certificate Download'],
    color: 'bg-background',
    textColor: 'text-secondary'
  }
];

const SYSTEM_OVERVIEW_DATA = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing protocols and certification standards ensure only authentic, safe medicinal herbs reach consumers.',
    stat: '100%',
    statLabel: 'Compliance'
  },
  {
    icon: MapPin,
    title: 'Geographic Tracking',
    description: 'GPS-enabled collection site mapping provides complete visibility of herb origins and harvesting locations.',
    stat: 'GPS',
    statLabel: 'Precision'
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Testing',
    description: 'Comprehensive analysis including moisture content, pesticide residue, and DNA authentication for species verification.',
    stat: 'ISO',
    statLabel: 'Certified'
  }
];

const BENEFITS_LIST = [
  'Real-time supply chain monitoring',
  'Blockchain-inspired data integrity',
  'Mobile-first design for field operations',
  'Automated quality compliance checks',
  'Consumer-facing transparency tools'
];

// --- COMPONENTS ---

const Marquee = ({ text, direction = 1 }: { text: string; direction?: number }) => {
  return (
    <div className="relative flex overflow-hidden py-3 bg-secondary text-secondary-foreground border-y border-secondary-foreground/20">
      <motion.div
        className="flex whitespace-nowrap font-heading text-2xl md:text-3xl uppercase tracking-wider"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.span 
            key={i} 
            className="mx-6 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            {text} <motion.span 
              className="w-2 h-2 bg-highlightyellow rounded-full" 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, align = 'left' }: { title: string; subtitle?: string; align?: 'left' | 'center' | 'right' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-12 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-xs font-heading uppercase tracking-widest text-secondary mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-heading text-3xl md:text-5xl lg:text-6xl text-secondary uppercase leading-[0.9]"
      >
        {title.split('\n').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </motion.h2>
    </div>
  );
};

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef(null);
  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroScroll.scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(heroScroll.scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-clip selection:bg-primary selection:text-primary-foreground">
      <Header />

      {/* --- HERO SECTION (Inspiration: Avanti Center) --- */}
      <section ref={heroRef} className="relative w-full min-h-screen pt-16 flex flex-col justify-between overflow-hidden">
        {/* Top Content */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
          <motion.div 
            style={{ y: heroTextY }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3 flex items-center gap-2"
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full" 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <span className="font-paragraph text-xs md:text-sm uppercase tracking-widest text-secondary font-bold">
                Ministry of AYUSH Initiative
              </span>
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full" 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
              />
            </motion.div>

            <h1 className="font-heading text-[8vw] md:text-[10vw] leading-[0.8] text-secondary uppercase tracking-tighter mix-blend-multiply">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                National
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block text-primary"
              >
                Ayurvedic
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Network
              </motion.span>
            </h1>

            {/* Navigation Row (Mimicking the inspiration's secondary text row) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="w-full flex flex-wrap justify-between items-center border-t-2 border-secondary mt-6 pt-3 pb-8"
            >
              {['Farmer', 'Processor', 'Laboratory', 'Consumer'].map((item, i) => (
                <motion.span 
                  key={i} 
                  className="font-heading text-sm md:text-lg uppercase text-secondary/60 hover:text-primary transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Visual (Mimicking the abstract shapes) */}
        <motion.div 
          style={{ y: heroY }}
          className="relative w-full h-[40vh] md:h-[50vh] mt-auto"
        >
          {/* Abstract Shapes Masking */}
          <div className="absolute inset-0 flex items-end justify-center px-4">
            <div className="w-full max-w-[110rem] h-full grid grid-cols-3 gap-3 md:gap-4 items-end">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "80%" }}
                transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
                className="bg-secondary rounded-t-[80px] md:rounded-t-[150px] overflow-hidden relative"
              >
                 <Image
                  src="https://static.wixstatic.com/media/153483_ada74be1cb1c4d84a258a1dc7c1240a8~mv2.png?originWidth=1152&originHeight=576"
                  alt="Ayurvedic Herb Detail"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
              </motion.div>
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
                className="bg-primary rounded-t-[80px] md:rounded-t-[150px] overflow-hidden relative -mx-6 md:-mx-8 z-10 shadow-2xl"
              >
                <Image
                  src="https://static.wixstatic.com/media/153483_23b317b6cd3a49b7a2f33e16514f4d91~mv2.png?originWidth=1152&originHeight=576"
                  alt="Ayurvedic Herb Collection"
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40" />
              </motion.div>
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "70%" }}
                transition={{ duration: 1.2, ease: "circOut", delay: 0.5 }}
                className="bg-highlightyellow rounded-t-[80px] md:rounded-t-[150px] overflow-hidden relative"
              >
                 <Image
                  src="https://static.wixstatic.com/media/153483_dd9b6cb641534033910a55fea8b47e9d~mv2.png?originWidth=1152&originHeight=576"
                  alt="Ayurvedic Processing"
                  className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Marquee text="Transparency • Authenticity • Quality • Heritage •" />

      {/* --- MISSION STATEMENT (Editorial Layout) --- */}
      <section className="w-full py-20 px-4 md:px-12 bg-background relative">
        <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="block w-10 h-1 bg-primary mb-4" />
              <h3 className="font-heading text-2xl uppercase text-secondary mb-3">
                The Vision
              </h3>
              <p className="font-paragraph text-base text-secondary/70">
                Connecting the ancient wisdom of Ayurveda with modern digital trust.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-heading text-2xl md:text-4xl lg:text-5xl uppercase text-secondary leading-tight indent-16">
              A comprehensive digital platform ensuring <span className="text-primary">transparency</span> and <span className="text-highlightyellow">authenticity</span> across the entire medicinal plant supply chain, from the soil of the farm to the hands of the consumer.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-t border-secondary/20 pt-4"
              >
                <h4 className="font-heading text-lg uppercase mb-2">For The Government</h4>
                <p className="font-paragraph text-sm text-secondary/80">Real-time oversight and data-driven policy making for the AYUSH sector.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-t border-secondary/20 pt-4"
              >
                <h4 className="font-heading text-lg uppercase mb-2">For The People</h4>
                <p className="font-paragraph text-sm text-secondary/80">Guaranteed safety and authenticity of Ayurvedic medicines.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROLE BASED PORTALS (Interactive Grid) --- */}
      <section className="w-full py-16 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#B9B04A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-[120rem] mx-auto px-4 md:px-8">
          <SectionHeader title="Stakeholder\nPortals" subtitle="Access Your Dashboard" align="left" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {PORTAL_DATA.map((portal, index) => (
              <Link to={portal.link} key={portal.id} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative h-full min-h-[320px] p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.01] ${portal.color} ${portal.textColor}`}
                >
                  {/* Hover Reveal Image Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <Image 
                      src="https://static.wixstatic.com/media/153483_7ab6af9d51624960934b19d482d8ceee~mv2.png?originWidth=768&originHeight=384"
                      alt={portal.title}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <portal.icon className="w-10 h-10 md:w-12 md:h-12 stroke-1" />
                      <motion.div 
                        className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-current group-hover:text-background transition-colors"
                        whileHover={{ rotate: 45 }}
                      >
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </motion.div>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl uppercase mb-3 leading-none">
                      {portal.title}
                    </h3>
                    <p className="font-paragraph text-sm md:text-base opacity-80 max-w-md">
                      {portal.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-6 border-t border-current/20">
                    <ul className="grid grid-cols-2 gap-2">
                      {portal.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide opacity-70">
                          <motion.div 
                            className="w-1 h-1 bg-current rounded-full" 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- SYSTEM OVERVIEW (Sticky Scroll) --- */}
      <section className="w-full py-20 bg-background relative">
        <div className="max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Left Side */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="font-heading text-4xl md:text-6xl text-secondary uppercase leading-none mb-6">
                  System<br /><span className="text-primary">Architecture</span>
                </h2>
                <p className="font-paragraph text-base md:text-lg text-secondary/80 mb-8">
                  Our integrated platform connects every stakeholder in the Ayurvedic supply chain, ensuring complete transparency through advanced digital tracking.
                </p>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-secondary text-secondary-foreground font-heading text-sm uppercase tracking-wide hover:bg-primary transition-colors duration-300"
                  >
                    Request Demo
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Scrollable Right Side */}
            <div className="lg:w-2/3 space-y-6">
              {SYSTEM_OVERVIEW_DATA.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group bg-white border border-secondary/10 p-8 hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <item.icon className="w-24 h-24 text-secondary" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-highlightyellow/20 flex items-center justify-center rounded-full text-secondary flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-2xl text-secondary uppercase">{item.title}</h3>
                      <motion.div 
                        className="h-1 w-16 bg-primary mt-2 group-hover:w-full transition-all duration-500" 
                      />
                    </div>
                  </div>
                  
                  <p className="font-paragraph text-base text-secondary/70 mb-6 max-w-2xl">
                    {item.description}
                  </p>

                  <div className="flex items-end gap-2">
                    <span className="font-heading text-4xl text-primary">{item.stat}</span>
                    <span className="font-paragraph text-xs uppercase tracking-widest text-secondary mb-1">{item.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- HORIZONTAL SCROLL / BENEFITS --- */}
      <section className="w-full py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-4 md:px-8 mb-12">
          <h2 className="font-heading text-3xl md:text-5xl uppercase text-center">
            Why Traceability Matters
          </h2>
        </div>
        
        <Marquee text="Trust • Safety • Purity • Ethics •" direction={-1} />
        
        <div className="max-w-[100rem] mx-auto px-4 md:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_LIST.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-4 border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-highlightyellow flex-shrink-0" />
                </motion.div>
                <p className="font-heading text-base uppercase leading-tight">
                  {benefit}
                </p>
              </motion.div>
            ))}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="flex items-center justify-center p-4 bg-highlightyellow text-secondary"
            >
               <motion.div 
                 className="text-center"
                 whileHover={{ scale: 1.05 }}
               >
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 >
                   <Globe className="w-10 h-10 mx-auto mb-3" />
                 </motion.div>
                 <p className="font-heading text-base uppercase">Global Standards Compliant</p>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full min-h-[70vh] flex items-center relative bg-secondary overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://static.wixstatic.com/media/153483_870d27268b0e407a92c4af6d4384b8d2~mv2.png?originWidth=1152&originHeight=576"
            alt="Background Texture"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-[7vw] md:text-[6rem] text-background uppercase leading-[0.8] mb-6 mix-blend-difference">
              Join The<br />Revolution
            </h2>
            <p className="font-paragraph text-base md:text-lg text-background/80 max-w-3xl mx-auto mb-10">
              Whether you're a farmer, processor, laboratory, or consumer, our platform provides the tools you need to participate in a transparent, trustworthy Ayurvedic supply chain.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-primary text-primary-foreground font-heading text-base uppercase tracking-wide hover:bg-highlightyellow hover:text-secondary transition-colors shadow-xl"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link to="/farmer-portal">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-background text-background font-heading text-base uppercase tracking-wide hover:bg-background hover:text-secondary transition-colors"
                >
                  Explore Portals
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}