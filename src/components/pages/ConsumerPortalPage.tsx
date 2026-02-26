import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { QrCode, MapPin, FileCheck, Download, Shield, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConsumerPortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-14 bg-highlightyellow">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block px-5 py-2 bg-secondary/10 backdrop-blur-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-paragraph text-xs md:text-sm text-secondary uppercase tracking-wider">
                For End Consumers
              </p>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-6xl text-secondary uppercase mb-4">
              CONSUMER
              <br />
              <span className="text-primary">VERIFICATION</span>
              <br />
              PORTAL
            </h1>
            <p className="font-paragraph text-base md:text-lg text-secondary/80 max-w-3xl mx-auto">
              Verify product authenticity, trace herb origins, and access complete quality documentation through simple QR code scanning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl text-secondary uppercase mb-6">
              HOW IT WORKS
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl">
              A simple three-step process to access complete product information and verify authenticity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: QrCode,
                title: 'Scan QR Code',
                description: 'Use your smartphone camera to scan the unique QR code printed on the product packaging.',
                color: 'bg-primary'
              },
              {
                step: '02',
                icon: Search,
                title: 'View Information',
                description: 'Instantly access complete product provenance including farm location, processing details, and test results.',
                color: 'bg-highlightyellow'
              },
              {
                step: '03',
                icon: Download,
                title: 'Download Certificates',
                description: 'Save laboratory test certificates and quality documentation for your records.',
                color: 'bg-secondary'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-background border-2 border-secondary/20 p-8 hover:border-primary transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-6xl text-secondary/20">{step.step}</span>
                  <div className={`${step.color} w-16 h-16 flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl text-secondary uppercase mb-4">
                  {step.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Access Section */}
      <section className="w-full py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px]"
            >
              <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-highlightyellow"></div>
              <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-secondary flex items-center justify-center p-8">
                <Image
                  src="https://static.wixstatic.com/media/153483_4cddc92d17f9444689450f09a882219d~mv2.png?originWidth=576&originHeight=576"
                  alt="Consumer scanning QR code on product"
                  width={600}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-7xl text-primary-foreground uppercase mb-8">
                COMPLETE
                <br />
                <span className="text-highlightyellow">TRANSPARENCY</span>
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed mb-8">
                Access comprehensive information about every Ayurvedic product, from the farm where herbs were collected to the laboratory tests confirming quality and safety.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Farm Origin Details',
                    description: 'Collector information, harvest date, and GPS location'
                  },
                  {
                    title: 'Processing Information',
                    description: 'Drying methods, storage conditions, and handling procedures'
                  },
                  {
                    title: 'Laboratory Results',
                    description: 'Complete test reports including safety and authenticity verification'
                  },
                  {
                    title: 'Quality Certifications',
                    description: 'Government-approved certificates and compliance documentation'
                  },
                  {
                    title: 'Supply Chain Timeline',
                    description: 'Complete journey from collection to final product'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-primary-foreground/10 backdrop-blur-sm p-6"
                  >
                    <h4 className="font-heading text-xl text-primary-foreground uppercase mb-2">{item.title}</h4>
                    <p className="font-paragraph text-sm text-primary-foreground/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl text-secondary uppercase mb-6">
              PORTAL FEATURES
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl mx-auto">
              Powerful tools designed to give consumers confidence in the authenticity and quality of Ayurvedic products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Interactive Maps',
                description: 'Visual representation of herb collection sites with GPS coordinates and geographical context.',
                color: 'bg-primary'
              },
              {
                icon: FileCheck,
                title: 'Test Certificates',
                description: 'Access and download official laboratory test certificates and quality documentation.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Shield,
                title: 'Authenticity Verification',
                description: 'Confirm product authenticity through DNA testing results and species verification.',
                color: 'bg-secondary'
              },
              {
                icon: QrCode,
                title: 'QR Code Technology',
                description: 'Unique QR codes for each product batch ensuring tamper-proof identification.',
                color: 'bg-primary'
              },
              {
                icon: Download,
                title: 'Document Downloads',
                description: 'Save certificates, test reports, and compliance documents for personal records.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Search,
                title: 'Batch Lookup',
                description: 'Search by batch number or product code to access complete traceability information.',
                color: 'bg-secondary'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-background border-2 border-secondary/20 p-8 hover:border-primary transition-all"
              >
                <div className={`${feature.color} w-16 h-16 flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl text-secondary uppercase mb-4">
                  {feature.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl text-secondary-foreground uppercase mb-6">
              CONSUMER BENEFITS
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/90 max-w-4xl mx-auto">
              Empowering consumers with information to make informed decisions about Ayurvedic products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Product Authenticity',
                description: 'Verify that products contain genuine herbs without adulteration or substitution.',
                benefits: ['DNA verification results', 'Species confirmation', 'Origin authentication', 'Quality assurance']
              },
              {
                title: 'Safety Assurance',
                description: 'Access laboratory test results confirming products are free from harmful contaminants.',
                benefits: ['Pesticide screening', 'Heavy metal testing', 'Microbial analysis', 'Safety compliance']
              },
              {
                title: 'Informed Decisions',
                description: 'Make educated choices based on complete supply chain transparency and quality data.',
                benefits: ['Complete traceability', 'Processing details', 'Storage conditions', 'Handling procedures']
              },
              {
                title: 'Trust & Confidence',
                description: 'Build confidence in Ayurvedic products through government-backed verification systems.',
                benefits: ['Official certification', 'Government standards', 'Independent testing', 'Transparent records']
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background p-8"
              >
                <h3 className="font-heading text-3xl text-secondary uppercase mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed mb-6">
                  {benefit.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {benefit.benefits.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary"></div>
                      <span className="font-paragraph text-sm text-secondary/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No Login Required Section */}
      <section className="w-full py-24 bg-highlightyellow">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-5xl md:text-7xl text-secondary uppercase mb-6">
              NO LOGIN REQUIRED
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-3xl mx-auto mb-8">
              The consumer portal is designed as a public-facing interface. Simply scan the QR code on any product to instantly access complete traceability information without creating an account or logging in.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                'Instant Access',
                'No Registration',
                'Mobile Friendly',
                'Free to Use',
                'Privacy Protected'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-secondary px-8 py-4"
                >
                  <span className="font-heading text-lg text-secondary-foreground uppercase">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
