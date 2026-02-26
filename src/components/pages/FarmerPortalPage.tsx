import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { MapPin, Wifi, Camera, Database, Leaf, Cloud } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FarmerPortalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-2 bg-primary-foreground/10 backdrop-blur-sm mb-6">
              <p className="font-paragraph text-sm text-primary-foreground uppercase tracking-wider">
                For Farmers & Wild Collectors
              </p>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl text-primary-foreground uppercase mb-6">
              FARMER
              <br />
              <span className="text-highlightyellow">COLLECTOR</span>
              <br />
              DASHBOARD
            </h1>
            <p className="font-paragraph text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Designed for rural environments with offline capabilities, GPS tracking, and simple data entry for medicinal herb collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
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
              DASHBOARD FEATURES
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl">
              A comprehensive digital registration system that works even in areas with limited internet connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Herb Registration',
                description: 'Register harvested herbs with essential details including collector ID, herb species, harvest date, quantity, and initial moisture level.',
                color: 'bg-primary'
              },
              {
                icon: MapPin,
                title: 'GPS Location Tracking',
                description: 'Automatic capture of geographical coordinates using browser-based GPS functionality with Google Maps integration for farm location display.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Camera,
                title: 'Image Upload',
                description: 'Upload high-quality images of harvested herbs to support quality verification and visual documentation of collection.',
                color: 'bg-secondary'
              },
              {
                icon: Wifi,
                title: 'Offline Data Capture',
                description: 'Work without internet using IndexedDB local storage. Data automatically syncs when connectivity is restored.',
                color: 'bg-primary'
              },
              {
                icon: Database,
                title: 'Batch Management',
                description: 'Create and manage collection batches with unique identifiers for seamless tracking through the supply chain.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Cloud,
                title: 'Auto Synchronization',
                description: 'Automatic data sync with backend servers when internet becomes available, ensuring no data loss.',
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

      {/* Data Collection Process */}
      <section className="w-full py-24 bg-highlightyellow">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-7xl text-secondary uppercase mb-8">
                DATA
                <br />
                COLLECTION
                <br />
                <span className="text-primary">PROCESS</span>
              </h2>
              <p className="font-paragraph text-lg text-secondary/80 leading-relaxed mb-8">
                Our streamlined data collection process ensures accurate and comprehensive documentation of every herb harvest.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Collector Identification',
                    description: 'Enter unique collector ID and personal details for accountability'
                  },
                  {
                    step: '02',
                    title: 'Herb Details Entry',
                    description: 'Select herb species, enter quantity, and record initial moisture level'
                  },
                  {
                    step: '03',
                    title: 'Location Capture',
                    description: 'GPS automatically records collection site coordinates'
                  },
                  {
                    step: '04',
                    title: 'Image Documentation',
                    description: 'Upload photos of harvested herbs for quality verification'
                  },
                  {
                    step: '05',
                    title: 'Batch Generation',
                    description: 'System creates unique batch ID for supply chain tracking'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary flex items-center justify-center">
                        <span className="font-heading text-2xl text-primary-foreground">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-secondary uppercase mb-2">{item.title}</h4>
                      <p className="font-paragraph text-sm text-secondary/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[700px]"
            >
              <div className="absolute inset-0 bg-secondary p-8">
                <Image
                  src="https://static.wixstatic.com/media/153483_cd67841e064f48ef8063c1624e31e989~mv2.png?originWidth=576&originHeight=640"
                  alt="Farmer using mobile device for herb registration"
                  width={600}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offline Capabilities */}
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
              OFFLINE CAPABILITIES
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/90 max-w-4xl mx-auto">
              Designed specifically for rural environments where internet connectivity may be intermittent or unavailable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Local Storage',
                description: 'All data is stored locally using IndexedDB technology, ensuring no information is lost even without internet connection.',
                features: ['Secure local database', 'Unlimited storage capacity', 'Fast data retrieval', 'Encrypted storage']
              },
              {
                title: 'Auto Sync',
                description: 'When internet connectivity is restored, the system automatically synchronizes all offline data with the central server.',
                features: ['Background synchronization', 'Conflict resolution', 'Progress tracking', 'Retry mechanism']
              },
              {
                title: 'Mobile Optimized',
                description: 'Interface designed for smartphones and tablets commonly used in rural areas with touch-friendly controls.',
                features: ['Responsive design', 'Large touch targets', 'Minimal data usage', 'Battery efficient']
              },
              {
                title: 'GPS Integration',
                description: 'Browser-based GPS functionality works offline, capturing location data even without internet connectivity.',
                features: ['Automatic location capture', 'Map visualization', 'Coordinate accuracy', 'Location history']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-background p-8"
              >
                <h3 className="font-heading text-3xl text-secondary uppercase mb-4">
                  {item.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary"></div>
                      <span className="font-paragraph text-sm text-secondary/70">{feature}</span>
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
              BENEFITS FOR FARMERS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Digital Record Keeping',
                description: 'Maintain comprehensive digital records of all harvests, eliminating paper-based documentation.',
                color: 'bg-primary'
              },
              {
                title: 'Quality Assurance',
                description: 'Image documentation and detailed data entry support quality verification and premium pricing.',
                color: 'bg-highlightyellow'
              },
              {
                title: 'Supply Chain Visibility',
                description: 'Track your harvested herbs through the entire supply chain from collection to consumer.',
                color: 'bg-secondary'
              },
              {
                title: 'Fair Compensation',
                description: 'Transparent tracking ensures proper attribution and fair payment for quality produce.',
                color: 'bg-primary'
              },
              {
                title: 'Easy to Use',
                description: 'Simple, intuitive interface designed for users with varying levels of digital literacy.',
                color: 'bg-highlightyellow'
              },
              {
                title: 'Government Support',
                description: 'Direct connection to government quality standards and certification programs.',
                color: 'bg-secondary'
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
                <h3 className="font-heading text-2xl text-primary-foreground uppercase mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed">
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
