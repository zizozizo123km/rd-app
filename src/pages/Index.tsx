import { motion } from 'framer-motion'

export function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-slate-400">Start building something amazing!</p>
        <p className="text-sm text-slate-500 mt-4">Project: تطبيق فيسبوك ...</p>
      </motion.div>
    </div>
  )
}