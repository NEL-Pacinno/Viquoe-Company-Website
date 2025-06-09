"use client"

import React from "react"
import { useState } from "react"
import { ArrowRight, CheckCircle2, Code, LineChart, Lightbulb, Rocket, Server, Users, Menu, X, Mail, Phone, MapPin, Star } from "lucide-react"

const Button = ({ children, variant = "default", size = "default", asChild, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  }
  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`} 
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ children }) => (
  <div className="flex flex-col space-y-1.5 p-6 pb-2">{children}</div>
)

const CardTitle = ({ children }) => (
  <h3 className="text-2xl font-semibold leading-none tracking-tight">{children}</h3>
)

const CardContent = ({ children }) => (
  <div className="p-6 pt-0">{children}</div>
)

const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)
  
  return (
    <div data-active-tab={activeTab} className="w-full">
      {children.map(child => 
        child.type.name === 'TabsList' 
          ? { ...child, props: { ...child.props, setActiveTab, activeTab } }
          : child.type.name === 'TabsContent' 
            ? { ...child, props: { ...child.props, activeTab } }
            : child
      )}
    </div>
  )
}

const TabsList = ({ children, setActiveTab, activeTab }) => (
  <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid grid-cols-2 w-full">
    {children.map((child, index) => 
      <button
        key={index}
        onClick={() => setActiveTab(child.props.value)}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          activeTab === child.props.value 
            ? 'bg-background text-foreground shadow-sm' 
            : 'hover:bg-background/50'
        }`}
      >
        {child.props.children}
      </button>
    )}
  </div>
)

const TabsTrigger = ({ value, children }) => children

const TabsContent = ({ value, activeTab, children }) => 
  activeTab === value ? <div className="mt-6">{children}</div> : null

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      content: "Viquoe transformed our business operations with their comprehensive digital strategy. Our efficiency increased by 40% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, Local Retail Chain",
      content: "The team's expertise in both business development and software solutions made them the perfect partner for our growth journey.",
      rating: 5
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="relative">
              <Rocket className="h-6 w-6 text-primary animate-pulse" />
              <div className="absolute inset-0 h-6 w-6 rounded-full bg-primary/20 animate-ping"></div>
            </div>
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Viquoe</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {['Services', 'How We Help', 'Target Market', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex">
              <a href="#contact">Get Started</a>
            </Button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="container py-4 flex flex-col gap-4">
              {['Services', 'How We Help', 'Target Market', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted/50 to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                    <Rocket className="mr-2 h-4 w-4" />
                    Empowering SMEs Since 2020
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                    Resilience is our drive.<br />
                    <span className="text-primary">Excellence</span> is our goal.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                    Empowering SMEs and industries through technology, digital integration and strategic service delivery that drives real results.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="group">
                    <a href="#services" className="flex items-center">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="group">
                    <a href="#contact" className="flex items-center">
                      Contact Us
                      <Phone className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center animate-float">
                <div className="relative w-full max-w-[500px] aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1 shadow-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
                  <div className="relative inset-0 flex items-center justify-center p-4">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {[
                        { icon: Lightbulb, title: "Bridge Digital Gaps", delay: "0s" },
                        { icon: LineChart, title: "Data-Informed Decisions", delay: "0.2s" },
                        { icon: Users, title: "Market Access", delay: "0.4s" },
                        { icon: Server, title: "Operational Efficiency", delay: "0.6s" }
                      ].map(({ icon: Icon, title, delay }, index) => (
                        <div 
                          key={index}
                          className="flex flex-col items-center justify-center rounded-xl bg-background/80 backdrop-blur p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: delay }}
                        >
                          <Icon className="h-8 w-8 text-primary mb-2" />
                          <span className="text-sm font-medium text-center">{title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive Solutions for Your Business
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a dual approach with our Business Development and Software Development teams working together
                  to deliver exceptional results.
                </p>
              </div>
            </div>
            
            <div className="mx-auto mt-12 max-w-4xl">
              <Tabs defaultValue="business">
                <TabsList>
                  <TabsTrigger value="business">Business Development</TabsTrigger>
                  <TabsTrigger value="software">Software Development</TabsTrigger>
                </TabsList>
                
                <TabsContent value="business">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: "Business Consultancy", desc: "Expert advice to improve business operations and strategic planning." },
                      { title: "Digital Marketing", desc: "Strategies to enhance online presence and brand visibility." },
                      { title: "Business Analysis", desc: "Evaluating business processes for improvement opportunities." },
                      { title: "Market Research", desc: "Studies to understand market trends and customer needs." },
                      { title: "Strategic Development", desc: "Planning and executing long-term business strategies." },
                      { title: "Brand Building", desc: "Enhancing reputation and building a strong client base." }
                    ].map((service, index) => (
                      <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="software">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: "Product Development", desc: "Custom software, mobile apps, and web platforms tailored to your needs." },
                      { title: "Technology Consulting", desc: "Expert advice on tech strategy, cloud migration, and digital transformation." },
                      { title: "Platform Maintenance", desc: "Ongoing support and optimization of deployed platforms with uptime guarantees." },
                      { title: "Internal Product Innovation", desc: "Development of proprietary tools and SaaS products for recurring revenue." },
                      { title: "Rapid Prototyping", desc: "Fast delivery of MVPs for startups and innovation teams." },
                      { title: "Implementation Support", desc: "Support for third-party tools and integrations to enhance your systems." }
                    ].map((service, index) => (
                      <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section id="how-we-help" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Help SMEs</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We focus on four key areas to empower small and medium-sized enterprises.
                </p>
              </div>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
              {[
                {
                  icon: Lightbulb,
                  title: "Bridge Digital Gaps",
                  desc: "We connect businesses to digital opportunities and technologies, helping them navigate the digital landscape with confidence.",
                  features: ["Digital transformation strategy", "Technology adoption", "Digital skills development"]
                },
                {
                  icon: Server,
                  title: "Improve Operational Efficiency",
                  desc: "We streamline processes for enhanced business performance, reducing costs and increasing productivity.",
                  features: ["Process optimization", "Workflow automation", "Resource management"]
                },
                {
                  icon: Users,
                  title: "Enable Market Access and Brand Visibility",
                  desc: "We expand market reach and boost brand recognition, helping businesses connect with their target audience.",
                  features: ["Digital marketing strategies", "Brand development", "Market expansion planning"]
                },
                {
                  icon: LineChart,
                  title: "Drive Data-Informed Decision-Making",
                  desc: "We utilize data for strategic business decisions, turning information into actionable insights.",
                  features: ["Data analysis and reporting", "Business intelligence", "Performance tracking"]
                }
              ].map(({ icon: Icon, title, desc, features }, index) => (
                <Card key={index} className="flex flex-col items-start space-y-4 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Market Section */}
        <section id="target-market" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Who We Serve
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Target Market</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in helping various types of organizations achieve their digital transformation goals.
                </p>
              </div>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "Small & Medium Enterprises", desc: "Growing businesses looking to scale operations and improve efficiency through technology." },
                { icon: Rocket, title: "Startups", desc: "Early-stage companies needing rapid prototyping and market validation strategies." },
                { icon: Server, title: "Traditional Industries", desc: "Established sectors seeking digital transformation and modernization of legacy systems." },
                { icon: Code, title: "Tech Companies", desc: "Software firms requiring specialized development expertise and strategic consulting." },
                { icon: LineChart, title: "E-commerce Businesses", desc: "Online retailers needing optimization, analytics, and growth strategies." },
                { icon: Lightbulb, title: "Innovation Teams", desc: "Corporate innovation labs and R&D departments exploring new technologies and solutions." }
              ].map(({ icon: Icon, title, desc }, index) => (
                <Card key={index} className="flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Client Success
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our satisfied clients have to say about working with Viquoe.
                </p>
              </div>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Business?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Let's discuss how we can help you achieve your goals. Contact us today for a free consultation.
                </p>
              </div>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>contact@viquoe.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+234 (0) 123 456 7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Lagos, Nigeria</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full p-3 border border-input rounded-md bg-background"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full p-3 border border-input rounded-md bg-background"
                    />
                    <textarea 
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 border border-input rounded-md bg-background resize-none"
                    ></textarea>
                    <Button className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Rocket className="h-6 w-6 text-primary" />
              <span>Viquoe</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Viquoe. All rights reserved. Empowering businesses through technology.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}
