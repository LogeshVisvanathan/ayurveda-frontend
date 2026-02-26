import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { FlaskConical, FileCheck, Microscope, Shield, CheckCircle, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function LaboratoryTestingPage() {
  const { isAuthenticated, userRole } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated or wrong role
    if (!isAuthenticated || userRole !== 'lab') {
      navigate('/laboratory-login');
    }
  }, [isAuthenticated, userRole, navigate]);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-14 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block px-5 py-2 bg-secondary-foreground/10 backdrop-blur-sm mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="font-paragraph text-xs md:text-sm text-secondary-foreground uppercase tracking-wider">
                For Quality Testing Laboratories
              </p>
            </motion.div>
            <h1 className="font-heading text-4xl md:text-6xl text-secondary-foreground uppercase mb-4">
              LABORATORY
              <br />
              <span className="text-highlightyellow">TESTING</span>
              <br />
              DASHBOARD
            </h1>
            <p className="font-paragraph text-base md:text-lg text-secondary-foreground/90 max-w-3xl mx-auto">
              Upload test reports, verify quality standards, and certify herb batches with comprehensive analytical documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testing Services Section */}
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
              TESTING SERVICES
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl">
              Comprehensive analytical testing to ensure herb quality, safety, and authenticity according to government standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: 'Moisture Analysis',
                description: 'Determine moisture content to ensure proper drying and prevent microbial growth during storage.',
                color: 'bg-primary'
              },
              {
                icon: Shield,
                title: 'Pesticide Residue',
                description: 'Screen for harmful pesticide residues and chemical contaminants to ensure consumer safety.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Microscope,
                title: 'DNA Authentication',
                description: 'Verify species authenticity and detect adulteration using advanced DNA barcoding techniques.',
                color: 'bg-secondary'
              },
              {
                icon: FileCheck,
                title: 'Heavy Metal Testing',
                description: 'Analyze for toxic heavy metals including lead, mercury, arsenic, and cadmium.',
                color: 'bg-primary'
              },
              {
                icon: CheckCircle,
                title: 'Microbial Testing',
                description: 'Test for bacterial, fungal, and other microbial contamination to ensure product safety.',
                color: 'bg-highlightyellow'
              },
              {
                icon: Shield,
                title: 'Active Compound Analysis',
                description: 'Quantify key medicinal compounds to verify therapeutic potency and quality.',
                color: 'bg-secondary'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-background border-2 border-secondary/20 p-8 hover:border-primary transition-all"
              >
                <div className={`${service.color} w-16 h-16 flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl text-secondary uppercase mb-4">
                  {service.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="w-full py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl md:text-7xl text-primary-foreground uppercase mb-8">
                TESTING
                <br />
                <span className="text-highlightyellow">WORKFLOW</span>
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed mb-8">
                A systematic approach to quality testing that ensures every batch meets stringent safety and authenticity standards.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Batch Reception',
                    description: 'Receive processed herb batch with complete traceability data'
                  },
                  {
                    step: '02',
                    title: 'Sample Collection',
                    description: 'Extract representative samples following standardized protocols'
                  },
                  {
                    step: '03',
                    title: 'Laboratory Analysis',
                    description: 'Conduct comprehensive testing using validated methods'
                  },
                  {
                    step: '04',
                    title: 'Report Generation',
                    description: 'Create detailed test reports with results and interpretations'
                  },
                  {
                    step: '05',
                    title: 'Quality Approval',
                    description: 'Mark batch as approved or rejected based on standards'
                  },
                  {
                    step: '06',
                    title: 'Certificate Upload',
                    description: 'Upload digital certificates to the traceability system'
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
                      <div className="w-16 h-16 bg-highlightyellow flex items-center justify-center">
                        <span className="font-heading text-2xl text-secondary">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-primary-foreground uppercase mb-2">{item.title}</h4>
                      <p className="font-paragraph text-sm text-primary-foreground/70">{item.description}</p>
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
              <div className="absolute inset-0 bg-highlightyellow p-8">
                <Image
                  src="https://static.wixstatic.com/media/153483_53bd4f4cb3f04b589c39895533d53032~mv2.png?originWidth=576&originHeight=640"
                  alt="Laboratory testing equipment and procedures"
                  width={600}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              QUALITY STANDARDS
            </h2>
            <p className="font-paragraph text-lg text-secondary/80 max-w-4xl mx-auto">
              All testing follows internationally recognized standards and government regulations for Ayurvedic medicinal plants.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Ayurvedic Pharmacopoeia of India (API)',
                description: 'Official standards published by the Ministry of AYUSH for quality parameters of Ayurvedic drugs.',
                parameters: ['Morphological standards', 'Microscopic characteristics', 'Physicochemical parameters', 'Chemical constituents']
              },
              {
                title: 'WHO Guidelines',
                description: 'World Health Organization guidelines for quality control of herbal medicines.',
                parameters: ['Authentication methods', 'Purity testing', 'Safety assessment', 'Stability testing']
              },
              {
                title: 'Good Laboratory Practice (GLP)',
                description: 'Quality system concerned with organizational process and conditions for laboratory studies.',
                parameters: ['Standard operating procedures', 'Equipment calibration', 'Data integrity', 'Quality assurance']
              },
              {
                title: 'FSSAI Regulations',
                description: 'Food Safety and Standards Authority of India regulations for herbal products.',
                parameters: ['Contaminant limits', 'Labeling requirements', 'Hygiene standards', 'Testing protocols']
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-highlightyellow p-8"
              >
                <h3 className="font-heading text-2xl text-secondary uppercase mb-4">
                  {standard.title}
                </h3>
                <p className="font-paragraph text-base text-secondary/80 leading-relaxed mb-6">
                  {standard.description}
                </p>
                <div className="space-y-3">
                  {standard.parameters.map((param, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary"></div>
                      <span className="font-paragraph text-sm text-secondary/70">{param}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approval Process */}
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
              APPROVAL PROCESS
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/90 max-w-4xl mx-auto">
              Batches are evaluated against predefined quality criteria and marked as approved or rejected.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary w-16 h-16 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-3xl text-secondary uppercase">
                  APPROVED BATCHES
                </h3>
              </div>
              <p className="font-paragraph text-base text-secondary/70 leading-relaxed mb-6">
                Batches that meet all quality standards are approved for further processing and consumer distribution.
              </p>
              <div className="space-y-3">
                {[
                  'All test parameters within limits',
                  'No contamination detected',
                  'Species authenticity confirmed',
                  'Certificate of analysis issued',
                  'Batch released for distribution'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary"></div>
                    <span className="font-paragraph text-sm text-secondary/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-destructive w-16 h-16 flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-destructiveforeground" />
                </div>
                <h3 className="font-heading text-3xl text-secondary uppercase">
                  REJECTED BATCHES
                </h3>
              </div>
              <p className="font-paragraph text-base text-secondary/70 leading-relaxed mb-6">
                Batches failing quality standards are rejected and cannot proceed in the supply chain.
              </p>
              <div className="space-y-3">
                {[
                  'Test parameters exceed limits',
                  'Contamination detected',
                  'Species mismatch identified',
                  'Rejection report generated',
                  'Batch quarantined or disposed'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-destructive"></div>
                    <span className="font-paragraph text-sm text-secondary/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Management */}
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
              REPORT MANAGEMENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Digital Upload',
                description: 'Upload test reports in PDF or image formats',
                color: 'bg-primary'
              },
              {
                title: 'Batch Linking',
                description: 'Associate reports with specific batch IDs',
                color: 'bg-highlightyellow'
              },
              {
                title: 'Secure Storage',
                description: 'Encrypted storage of sensitive test data',
                color: 'bg-secondary'
              },
              {
                title: 'Public Access',
                description: 'Consumer-facing certificate downloads',
                color: 'bg-primary'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className={`${feature.color} p-8 text-center`}
              >
                <h3 className="font-heading text-xl text-primary-foreground uppercase mb-4">
                  {feature.title}
                </h3>
                <p className="font-paragraph text-sm text-primary-foreground/90 leading-relaxed">
                  {feature.description}
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
