import { motion } from 'framer-motion'

type TeamMember = {
  name: string
  title: string
  image?: string
  bio: string
}

export default function TeamCard({ name, title, bio }: TeamMember) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image placeholder or skipped entirely */}
      {/* <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full" /> */}

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2 text-sm text-gray-600">{bio}</p>
    </motion.div>
  )
}
