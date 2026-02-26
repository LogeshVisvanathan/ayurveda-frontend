import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { MapPin, Wifi, Camera, Database, Leaf, Cloud, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function FarmerPortalPage() {
  const { isAuthenticated, userRole } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated or wrong role
    if (!isAuthenticated || userRole !== 'farmer') {
      navigate('/farmer-login');
    }
  }, [isAuthenticated, userRole, navigate]);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-14 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block px-5 py-2 bg-primary-foreground/10 backdrop-blur-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-paragraph text-xs md:text-sm text-primary-foreground uppercase tracking-wider">
                For Farmers & Wild Collectors
              </p>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground uppercase mb-4">
              FARMER
              <br />
              <span className="text-highlightyellow">COLLECTOR</span>
              <br />
              DASHBOARD
            </h1>
            <p className="font-paragraph text-base md:text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Designed for rural environments with offline capabilities, GPS tracking, and simple data entry for medicinal herb collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-secondary uppercase mb-4">
              DASHBOARD FEATURES
            </h2>
            <p className="font-paragraph text-base md:text-lg text-secondary/80 max-w-4xl">
              A comprehensive digital registration system that works even in areas with limited internet connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                whileHover={{ y: -6 }}
                className="bg-background border-2 border-secondary/20 p-6 hover:border-primary transition-all"
              >
                <div className={`${feature.color} w-14 h-14 flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg text-secondary uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="font-paragraph text-sm text-secondary/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection Process */}
      <section className="w-full py-16 bg-highlightyellow">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl text-secondary uppercase mb-6">
                DATA
                <br />
                COLLECTION
                <br />
                <span className="text-primary">PROCESS</span>
              </h2>
              <p className="font-paragraph text-base md:text-lg text-secondary/80 leading-relaxed mb-6">
                Our streamlined data collection process ensures accurate and comprehensive documentation of every herb harvest.
              </p>

              <div className="space-y-4">
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
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 bg-primary flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="font-heading text-lg text-primary-foreground">{item.step}</span>
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="font-heading text-base text-secondary uppercase mb-1">{item.title}</h4>
                      <p className="font-paragraph text-xs text-secondary/70">{item.description}</p>
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
              className="relative h-[500px] md:h-[600px]"
            >
              <div className="absolute inset-0 bg-secondary p-6">
                <Image
                  src="https://static.wixstatic.com/media/153483_cd67841e064f48ef8063c1624e31e989~mv2.png?originWidth=576&originHeight=640"
                  alt="Farmer using mobile device for herb registration"
                  width={600}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offline Capabilities */}
      <section className="w-full py-16 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-secondary-foreground uppercase mb-4">
              OFFLINE CAPABILITIES
            </h2>
            <p className="font-paragraph text-base md:text-lg text-secondary-foreground/90 max-w-4xl mx-auto">
              Designed specifically for rural environments where internet connectivity may be intermittent or unavailable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="bg-background p-6"
              >
                <h3 className="font-heading text-2xl text-secondary uppercase mb-3">
                  {item.title}
                </h3>
                <p className="font-paragraph text-sm text-secondary/70 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {item.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-2"
                      whileHover={{ x: 4 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                      />
                      <span className="font-paragraph text-xs text-secondary/70">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-secondary uppercase mb-4">
              BENEFITS FOR FARMERS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className={`${benefit.color} p-6 text-center`}
              >
                <h3 className="font-heading text-lg text-primary-foreground uppercase mb-3">
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

      {/* Farmer Collections Section */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl text-secondary uppercase mb-4">
              RECENT COLLECTIONS
            </h2>
            <p className="font-paragraph text-base md:text-lg text-secondary/80 max-w-4xl">
              View detailed information about recent herb collections and their supply chain progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'farmer-1',
                name: 'Rajesh Kumar',
                location: 'Himachal Pradesh',
                herbs: ['Ashwagandha', 'Brahmi', 'Tulsi'],
                harvest: '250 kg',
                date: '2024-02-15'
              },
              {
                id: 'farmer-2',
                name: 'Priya Sharma',
                location: 'Uttarakhand',
                herbs: ['Jatamansi', 'Sarpagandha', 'Neem'],
                harvest: '180 kg',
                date: '2024-02-10'
              },
              {
                id: 'farmer-3',
                name: 'Vikram Singh',
                location: 'Kerala',
                herbs: ['Brahmi', 'Bacopa', 'Gotu Kola'],
                harvest: '320 kg',
                date: '2024-02-12'
              }
            ].map((farmer, index) => (
              <Link to={`/farmer-detail/${farmer.id}`} key={farmer.id} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-background border-2 border-secondary/20 p-6 hover:border-primary transition-all h-full flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-heading text-xl text-secondary uppercase mb-1">
                        {farmer.name}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary/70">
                        <MapPin className="w-4 h-4" />
                        <span className="font-paragraph text-sm">{farmer.location}</span>
                      </div>
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <p className="font-paragraph text-xs text-secondary/70 uppercase mb-2">Herbs Collected</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {farmer.herbs.map((herb, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 font-paragraph text-xs rounded">
                          {herb}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-secondary/20 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-paragraph text-xs text-secondary/70">Total Harvest</span>
                      <span className="font-heading text-sm text-secondary">{farmer.harvest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-paragraph text-xs text-secondary/70">Harvest Date</span>
                      <span className="font-heading text-sm text-secondary">{farmer.date}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
