import { useState } from 'react'
import { Zap, Code, Shield, MessageSquare, ChevronRight, Menu, X } from 'lucide-react'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Zap className="text-primary" size={24} />
        <span className="text-xl font-bold text-dark">AI Agent</span>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="text-dark hover:text-primary">Features</a>
        <a href="#" className="text-dark hover:text-primary">Pricing</a>
        <a href="#" className="text-dark hover:text-primary">Docs</a>
        <a href="#" className="text-dark hover:text-primary">About</a>
      </nav>
      
      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 text-dark hover:text-primary">Sign In</button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600">
          Get Started
        </button>
      </div>
      
      <button 
        className="md:hidden text-dark" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-dark hover:text-primary">Features</a>
            <a href="#" className="text-dark hover:text-primary">Pricing</a>
            <a href="#" className="text-dark hover:text-primary">Docs</a>
            <a href="#" className="text-dark hover:text-primary">About</a>
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-4">
            <button className="w-full py-2 text-dark hover:text-primary">Sign In</button>
            <button className="w-full py-2 bg-primary text-white rounded-md hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
          Build AI Agents for Your Business
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Automate workflows, enhance productivity, and deliver exceptional customer experiences with our AI Agent platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 flex items-center justify-center">
            Get Started <ChevronRight className="ml-2" size={20} />
          </button>
          <button className="px-6 py-3 border border-gray-300 text-dark rounded-md hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

const Features = () => {
  const features = [
    {
      icon: <Code size={24} className="text-primary" />,
      title: "Developer Friendly",
      description: "Easy-to-use APIs and SDKs to integrate AI into your applications."
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Enterprise Grade",
      description: "Secure, scalable, and reliable infrastructure for mission-critical applications."
    },
    {
      icon: <MessageSquare size={24} className="text-primary" />,
      title: "Natural Language",
      description: "Conversational AI that understands and responds like a human."
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-dark mb-4">Powerful Features</h2>
        <p className="text-gray-600">
          Everything you need to build, deploy, and manage AI agents at scale.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AI Agent has transformed how we interact with our customers. The results have been phenomenal.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp"
    },
    {
      quote: "Implementation was seamless and the support team was incredibly helpful throughout the process.",
      author: "Michael Chen",
      role: "CTO, InnovateX"
    },
    {
      quote: "We've seen a 40% increase in customer satisfaction since deploying AI Agent.",
      author: "Emma Rodriguez",
      role: "Director of Ops, ServicePro"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-dark mb-4">Trusted by Industry Leaders</h2>
        <p className="text-gray-600">
          Join thousands of businesses that are transforming with AI Agent.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-dark">{testimonial.author}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="text-white" size={24} />
              <span className="text-xl font-bold">AI Agent</span>
            </div>
            <p className="text-gray-400">
              Building the future of AI-powered automation.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2023 AI Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default App