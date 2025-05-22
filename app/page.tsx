import Link from "next/link"
import { ArrowRight, CheckCircle2, Code, LineChart, Lightbulb, Rocket, Server, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Rocket className="h-6 w-6 text-primary" />
            <span>Viquoe</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#how-we-help" className="text-sm font-medium hover:text-primary">
              How We Help
            </Link>
            <Link href="#target-market" className="text-sm font-medium hover:text-primary">
              Target Market
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Our Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Link href="#contact" className="text-sm font-medium hover:text-primary"><Button >Get Started</Button></Link>
          
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Resilience is our drive. Excellence is our goal.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empowering SMEs and industries through technology, digital integration and strategic service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                                  
                  <Button asChild size="lg">
                    <Link href="#services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4 shadow-sm">
                        <Lightbulb className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium text-center">Bridge Digital Gaps</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4 shadow-sm">
                        <LineChart className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium text-center">Data-Informed Decisions</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4 shadow-sm">
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium text-center">Market Access</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4 shadow-sm">
                        <Server className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium text-center">Operational Efficiency</span>
                      </div>
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
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="business">Business Development</TabsTrigger>
                  <TabsTrigger value="software">Software Development</TabsTrigger>
                </TabsList>
                <TabsContent value="business" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Business Consultancy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Expert advice to improve business operations and strategic planning.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Digital Marketing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Strategies to enhance online presence and brand visibility.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Business Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Evaluating business processes for improvement opportunities.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Market Research</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Studies to understand market trends and customer needs.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Strategic Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Planning and executing long-term business strategies.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Brand Building</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Enhancing reputation and building a strong client base.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="software" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Product Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Custom software, mobile apps, and web platforms tailored to your needs.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Technology Consulting</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Expert advice on tech strategy, cloud migration, and digital transformation.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Platform Maintenance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Ongoing support and optimization of deployed platforms with uptime guarantees.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Internal Product Innovation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Development of proprietary tools and SaaS products for recurring revenue.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Rapid Prototyping</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Fast delivery of MVPs for startups and innovation teams.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Implementation Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Support for third-party tools and integrations to enhance your systems.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section id="how-we-help" className="w-full py-12 md:py-24 bg-muted/50">
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
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Bridge Digital Gaps</h3>
                <p className="text-muted-foreground">
                  We connect businesses to digital opportunities and technologies, helping them navigate the digital
                  landscape with confidence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Digital transformation strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Technology adoption</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Digital skills development</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Improve Operational Efficiency</h3>
                <p className="text-muted-foreground">
                  We streamline processes for enhanced business performance, reducing costs and increasing productivity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Process optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Workflow automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Resource management</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Enable Market Access and Brand Visibility</h3>
                <p className="text-muted-foreground">
                  We expand market reach and boost brand recognition, helping businesses connect with their target
                  audience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Digital marketing strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Brand development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Market expansion planning</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Drive Data-Informed Decision-Making</h3>
                <p className="text-muted-foreground">
                  We utilize data for strategic business decisions, turning information into actionable insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Data analysis and reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Business intelligence</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Performance tracking</span>
                  </li>
                </ul>
              </div>
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
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>SMEs</CardTitle>
                  <CardDescription>Small and Medium-sized Enterprises</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Established businesses looking to enhance their digital capabilities and streamline operations.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Rocket className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Startups</CardTitle>
                  <CardDescription>Early-stage Businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    New ventures seeking to establish a strong digital foundation and accelerate growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Lightbulb className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Entrepreneurs</CardTitle>
                  <CardDescription>Individual Business Owners</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visionaries looking to bring their ideas to life with the right digital strategy and tools.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>NGOs</CardTitle>
                  <CardDescription>Non-Governmental Organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organizations with social missions seeking to maximize their impact through digital solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Server className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Traditional Businesses</CardTitle>
                  <CardDescription>Established Companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Legacy businesses looking to modernize and adapt to the digital economy.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Social Ventures</CardTitle>
                  <CardDescription>Purpose-driven Enterprises</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organizations balancing profit and purpose, seeking digital solutions to enhance their impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Structure Section */}
        <section id="team" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Expertise
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Team Structure</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our multidisciplinary team brings together the expertise needed to drive your success.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <Tabs defaultValue="business" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="business">Business Development Team</TabsTrigger>
                  <TabsTrigger value="software">Software Development Team</TabsTrigger>
                </TabsList>
                <TabsContent value="business" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Business Strategist</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Leads client discovery sessions, business planning, and strategy development with expertise in
                          business modeling and strategic planning.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Digital Marketing Specialist</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manages online campaigns, SEO, social media, and brand visibility with expertise in digital
                          advertising and content strategy.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Business Analyst</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Gathers and interprets business requirements, develops insights, and tracks KPIs with
                          expertise in data analysis and process improvement.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Market Research Analyst</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Conducts industry research, competitor analysis, and customer segmentation with expertise in
                          quantitative and qualitative research.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Strategic Partnerships Lead</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Identifies collaboration opportunities and negotiates partnerships with expertise in B2B
                          networking and relationship building.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Manager</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Oversees timelines, deliverables, and coordination across the team with expertise in Agile
                          methodologies and client communication.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="software" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>UI/UX Designer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Designs interfaces for digital products and websites with expertise in design systems,
                          responsive design, and UX research.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Web Developer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Builds websites, web apps, and technical infrastructure with expertise in React, WordPress,
                          and API integration.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Full-Stack Developer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Develops both client and server-side applications with expertise in multiple programming
                          languages and frameworks.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Product Manager</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Oversees product development from conception to launch with expertise in user requirements and
                          market fit.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>QA Engineer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Ensures software quality through testing and validation with expertise in test automation and
                          quality assurance.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>DevOps Engineer</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Manages deployment, infrastructure, and continuous integration with expertise in cloud
                          platforms and automation.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Leadership
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Board of Directors</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the visionary leaders guiding Viquoe's mission and strategic direction.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sarah Johnson"
                    className="h-40 w-40 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-sm text-primary">Chairperson</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Former CEO of TechVision with 20+ years of experience in digital transformation and business strategy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Michael Okonkwo"
                    className="h-40 w-40 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Michael Okonkwo</h3>
                <p className="text-sm text-primary">CEO & Co-Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Serial entrepreneur with a passion for empowering SMEs through innovative technology solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Amina Patel"
                    className="h-40 w-40 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Amina Patel</h3>
                <p className="text-sm text-primary">CTO & Co-Founder</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tech visionary with extensive experience in software development and digital product innovation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="David Nguyen"
                    className="h-40 w-40 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">David Nguyen</h3>
                <p className="text-sm text-primary">Chief Financial Officer</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Financial strategist with a background in venture capital and scaling technology businesses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Elena Rodriguez"
                    className="h-40 w-40 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Elena Rodriguez</h3>
                <p className="text-sm text-primary">Chief Marketing Officer</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Marketing expert specializing in brand development and digital marketing strategies for B2B companies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="James Chen"
                    className="h-40 w-40 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">James Chen</h3>
                <p className="text-sm text-primary">Independent Director</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Industry veteran with expertise in corporate governance and international business development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How We Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Business Model</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer flexible engagement models to suit your business needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Fixed-price Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clearly defined scope with a set price, ideal for projects with well-defined requirements and
                    deliverables.
                  </p>
                  <div className="mt-4 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Predictable costs</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Defined timeline</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Clear deliverables</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Retainers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ongoing support and services for a fixed monthly fee, ideal for long-term partnerships and
                    continuous improvement.
                  </p>
                  <div className="mt-4 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Consistent support</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Flexible priorities</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Dedicated resources</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Performance-based Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Payment tied to achieving specific results or KPIs, ideal for marketing and growth-focused
                    initiatives.
                  </p>
                  <div className="mt-4 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Results-oriented</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Shared risk</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Aligned incentives</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Commission on Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Percentage-based compensation on revenue or savings generated, ideal for sales and efficiency
                    projects.
                  </p>
                  <div className="mt-4 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Pay for success</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Scalable costs</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                    <span>Long-term partnership</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Operations & Workflow Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Operations & Workflow</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our structured approach ensures consistent results and clear communication throughout your project.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 border-l-2 border-dashed border-muted-foreground/30" />
                <div className="space-y-12">
                  <div className="relative pl-12">
                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <h3 className="text-xl font-bold">Client Onboarding</h3>
                    <p className="mt-2 text-muted-foreground">
                      We get to know your business, goals, and challenges through in-depth discovery sessions and
                      interviews.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <h3 className="text-xl font-bold">Needs Assessment</h3>
                    <p className="mt-2 text-muted-foreground">
                      We analyze your current situation, identify gaps, and determine the most impactful areas for
                      improvement.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <h3 className="text-xl font-bold">Solution Proposal</h3>
                    <p className="mt-2 text-muted-foreground">
                      We develop a tailored strategy and action plan with clear deliverables, timelines, and expected
                      outcomes.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <h3 className="text-xl font-bold">Execution</h3>
                    <p className="mt-2 text-muted-foreground">
                      We implement the agreed-upon solutions with regular check-ins and progress updates to ensure
                      alignment.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      5
                    </div>
                    <h3 className="text-xl font-bold">Results Review</h3>
                    <p className="mt-2 text-muted-foreground">
                      We measure outcomes against objectives, gather feedback, and make adjustments to optimize results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step towards digital transformation and business growth.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Name"
                      className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      placeholder="Email"
                      type="email"
                      className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Get Started
                  </Button>
                </form>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">100+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">95% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Rocket className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Fast Implementation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Rocket className="h-6 w-6 text-primary" />
            <span>Viquoe</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Viquoe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
