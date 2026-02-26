import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Package, Thermometer, Wind, Database, CheckCircle, Link as LinkIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProcessingUnitPage() {
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
                For Processing Centers
              </p>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-6xl text-secondary uppercase mb-4">
              PROCESSING
              <br />
              <span className="text-primary">UNIT</span>
              <br />
              DASHBOARD
            </h1>
            <p className="font-paragraph text-base md:text-lg text-secondary/80 max-w-3xl mx-auto">
              Comprehensive tracking of post-harvest operations including drying, grinding, and storage with complete batch traceability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Functions Section */}
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
              CORE FUNCTIONS
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl">
              Record and monitor every processing step to maintain an unbroken chain of custody from farm to finished product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: 'Batch Reception',
                description: 'Receive batches from farmers by entering batch ID to retrieve complete collection details and verify authenticity.',
                color: 'bg-primary'
              },
              {
                icon: Wind,
                title: 'Drying Operations',
                description: 'Record drying methods including sun drying, shade drying, or mechanical drying with time and temperature logs.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Database,
                title: 'Grinding & Processing',
                description: 'Document grinding status, particle size, and processing techniques applied to each batch.',
                color: 'bg-secondary'
              },
              {
                icon: Thermometer,
                title: 'Storage Monitoring',
                description: 'Track storage conditions including temperature, humidity, and duration to ensure quality preservation.',
                color: 'bg-primary'
              },
              {
                icon: LinkIcon,
                title: 'Chain of Custody',
                description: 'Maintain digital linkage between collection and processing data for complete traceability.',
                color: 'bg-highlightyellow'
              },
              {
                icon: CheckCircle,
                title: 'Quality Control',
                description: 'Perform quality checks at each processing stage and document results for compliance.',
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

      {/* Processing Workflow */}
      <section className="w-full py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[700px]"
            >
              <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-primary"></div>
              <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-highlightyellow flex items-center justify-center p-8">
                <Image
                  src="https://static.wixstatic.com/media/153483_edff10696c60469aa55edd626440d52b~mv2.png?originWidth=576&originHeight=512"
                  alt="Processing unit operations"
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
              <h2 className="font-heading text-5xl md:text-7xl text-secondary-foreground uppercase mb-8">
                PROCESSING
                <br />
                <span className="text-highlightyellow">WORKFLOW</span>
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground/90 leading-relaxed mb-8">
                A systematic approach to documenting every stage of herb processing for complete transparency.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Batch Verification',
                    description: 'Scan or enter batch ID to retrieve farm collection data'
                  },
                  {
                    step: '02',
                    title: 'Initial Inspection',
                    description: 'Visual quality check and moisture content verification'
                  },
                  {
                    step: '03',
                    title: 'Drying Process',
                    description: 'Select and record drying method with environmental parameters'
                  },
                  {
                    step: '04',
                    title: 'Grinding Operations',
                    description: 'Document grinding specifications and particle analysis'
                  },
                  {
                    step: '05',
                    title: 'Storage Assignment',
                    description: 'Assign storage location with condition monitoring'
                  },
                  {
                    step: '06',
                    title: 'Batch Handoff',
                    description: 'Transfer processed batch to laboratory for testing'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-highlightyellow flex items-center justify-center">
                        <span className="font-heading text-2xl text-secondary">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-secondary-foreground uppercase mb-2">{item.title}</h4>
                      <p className="font-paragraph text-sm text-secondary-foreground/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drying Methods */}
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
              DRYING METHODS
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl mx-auto">
              Different herbs require specific drying techniques to preserve their medicinal properties and active compounds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sun Drying',
                description: 'Traditional method using natural sunlight for herbs that can withstand direct exposure.',
                parameters: ['Temperature: 30-40°C', 'Duration: 3-7 days', 'Humidity: <60%', 'UV exposure monitored'],
                color: 'bg-primary'
              },
              {
                title: 'Shade Drying',
                description: 'Gentle drying in shaded areas for herbs sensitive to direct sunlight and heat.',
                parameters: ['Temperature: 20-30°C', 'Duration: 5-10 days', 'Humidity: <70%', 'Air circulation required'],
                color: 'bg-highlightyellow'
              },
              {
                title: 'Mechanical Drying',
                description: 'Controlled environment drying using specialized equipment for consistent results.',
                parameters: ['Temperature: 40-60°C', 'Duration: 12-48 hours', 'Humidity: <50%', 'Automated monitoring'],
                color: 'bg-secondary'
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`${method.color} p-8`}
              >
                <h3 className="font-heading text-3xl text-primary-foreground uppercase mb-4">
                  {method.title}
                </h3>
                <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed mb-6">
                  {method.description}
                </p>
                <div className="space-y-3">
                  {method.parameters.map((param, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-foreground"></div>
                      <span className="font-paragraph text-sm text-primary-foreground/90">{param}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Conditions */}
      <section className="w-full py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl md:text-7xl text-primary-foreground uppercase mb-6">
              STORAGE CONDITIONS
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 max-w-4xl mx-auto">
              Proper storage is critical to maintaining herb quality and preventing degradation of medicinal compounds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Temperature Control',
                description: 'Maintain optimal temperature ranges to prevent moisture accumulation and microbial growth.',
                specs: ['Ideal range: 15-25°C', 'Continuous monitoring', 'Automated alerts', 'Climate control systems']
              },
              {
                title: 'Humidity Management',
                description: 'Control moisture levels to prevent mold, fungal growth, and quality degradation.',
                specs: ['Target: 40-60% RH', 'Dehumidification systems', 'Regular testing', 'Moisture barriers']
              },
              {
                title: 'Light Protection',
                description: 'Shield herbs from direct sunlight and UV radiation that can degrade active compounds.',
                specs: ['Dark storage areas', 'UV-blocking containers', 'Opaque packaging', 'Light exposure logs']
              },
              {
                title: 'Pest Prevention',
                description: 'Implement measures to protect stored herbs from insects, rodents, and contamination.',
                specs: ['Sealed containers', 'Regular inspections', 'Pest monitoring', 'Sanitation protocols']
              }
            ].map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background p-8"
              >
                <h3 className="font-heading text-2xl text-secondary uppercase mb-4">
                  {condition.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed mb-6">
                  {condition.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {condition.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary"></div>
                      <span className="font-paragraph text-sm text-secondary/70">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              SYSTEM BENEFITS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Complete Traceability',
                description: 'Link processing operations directly to farm collection data',
                color: 'bg-primary'
              },
              {
                title: 'Quality Documentation',
                description: 'Comprehensive records of all processing parameters',
                color: 'bg-highlightyellow'
              },
              {
                title: 'Compliance Assurance',
                description: 'Meet regulatory requirements with detailed logs',
                color: 'bg-secondary'
              },
              {
                title: 'Efficiency Gains',
                description: 'Streamlined workflows and reduced paperwork',
                color: 'bg-primary'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className={`${benefit.color} p-8 text-center`}
              >
                <h3 className="font-heading text-xl text-primary-foreground uppercase mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-sm text-primary-foreground/90 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
