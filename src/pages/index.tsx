import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children?: React.ReactNode
}) => (
  <motion.section
    id={id}
    className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-32 scroll-mt-24 border-b border-gray-200"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    variants={fadeUp}
  >
    <h2 className="text-4xl font-bold text-gray-800 mb-2">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 mb-6">{subtitle}</p>}
    <div className="text-gray-700 text-md">{children}</div>
  </motion.section>
)

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      {/* Home */}
      <Section
        id="home"
        title="Welcome to Our Research Lab"
        subtitle="Innovating at the intersection of science, technology, and society."
      >
        <p>
          Our lab explores bold questions in AI, biology, and material science. We’re driven by curiosity, backed by
          rigor, and inspired by collaboration.
        </p>
      </Section>

      {/* Research */}
      <Section
        id="research"
        title="Research"
        subtitle="Pushing the boundaries of knowledge across disciplines"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Synthetic Biology & Bioengineering</li>
          <li>Quantum Materials & Nanoscience</li>
          <li>Robotics for Human-Centered Design</li>
        </ul>
      </Section>

      {/* Team */}
      <Section id="team-members" title="Our Team" subtitle="Brilliant minds behind groundbreaking research">
        <p>
          From professors to postdocs, graduate students to interns — our team thrives on diversity, integrity, and
          shared curiosity.
        </p>
        <p className="mt-4 italic text-sm text-gray-500">*Team profiles coming soon</p>
      </Section>

      {/* Publications */}
      <Section
        id="publications"
        title="Publications"
        subtitle="Peer-reviewed contributions and open-access research"
      >
        <p>Our findings have been featured in Nature, Science, NeurIPS, and other top journals and conferences.</p>
        <p className="mt-4 italic text-sm text-gray-500">*Full publication list to be added</p>
      </Section>

      {/* Open Positions */}
      <Section
        id="open-positions"
        title="Open Positions"
        subtitle="Join a world-class team committed to impact and mentorship"
      >
        <ul className="list-disc pl-5 space-y-2">
          <li>Postdoctoral Researchers (AI, Bioengineering)</li>
          <li>PhD Students (via affiliated departments)</li>
          <li>Internships (Fall 2025 applications open in July)</li>
        </ul>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Contact Us"
        subtitle="We’d love to hear from you"
      >
        <p>Email: <a href="mailto:lab@example.edu" className="text-blue-600 underline">lab@example.edu</a></p>
        <p>Address: Department of Science, Example University, City, Country</p>
        <p className="mt-2">Follow us on <span className="underline text-blue-600 cursor-pointer">Twitter</span> and <span className="underline text-blue-600 cursor-pointer">LinkedIn</span></p>
      </Section>
    </div>
  )
}
