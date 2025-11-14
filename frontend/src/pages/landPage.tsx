import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Users, MessageSquare, User} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#646cff_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        {/* Main Content */}
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  TASKATY
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take control of your tasks. Empower your productivity.
                <br />
                Plan smarter, collaborate easier, get more done.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg" className="text-base px-8 py-6 rounded-full">
                  <Link to="/auth">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base px-8 py-6 rounded-full">
                  <Link to="/auth">Log In</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Taskaty?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our simple yet powerful features help you manage tasks efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Star className="h-8 w-8 mb-4 text-primary" />}
              title="Smart Task Management"
              description="Organize your tasks with our intuitive, drag-and-drop interface"
              delay={0}
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 mb-4 text-primary" />}
              title="Team Collaboration"
              description="Work together seamlessly with your team in real-time"
              delay={0.2}
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 mb-4 text-primary" />}
              title="Progress Tracking"
              description="Monitor your progress with visual charts and stay on top of goals"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The talented individuals behind Taskaty
            </p>
          </motion.div>

          <div className="w-full">
            <TeamMember 
              name="Kareem" 
              role="Team Lead"
              delay={0}
              initials="KE"
            />
            <TeamMember
              name="Ayman Elfeky"
              role="Full-Stack Developer"
              delay={0.1}
              initials="A"
            />
            <TeamMember 
              name="Yousef" 
              role="frontend Developer"
              delay={0.2}
              initials="Y"
            />
            {/* <TeamMember 
              name="Shahd" 
              role="UI/UX Designer"
              delay={0.3}
              initials="S"
            /> */}
            {/* <TeamMember 
              name="Malak" 
              role="QA Engineer"
              delay={0.4}
              initials="M"
            /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Taskaty</h4>
              <p className="text-muted-foreground">
                A modern task management system designed to help you achieve more every day.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-muted-foreground">
                Need help? Reach out at{" "}
                <a href="mailto:aywork73@gmail.com" className="text-primary hover:underline">
                  aywork73@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ayman-elfeky" className="text-muted-foreground hover:text-primary transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Ayman-Elfeky" className="text-muted-foreground hover:text-primary transition-colors">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Taskaty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="p-8 rounded-xl bg-background border shadow-sm 
                 hover:bg-blue-100 dark:hover:bg-blue-900 
                 transition-colors duration-300 
                 flex flex-col items-center text-center"
    >
      {icon}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-6">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span className="text-sm">Easy to use</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span className="text-sm">Fast and reliable</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

// Team Member Component
const TeamMember = ({
  name,
  role,
  initials,
  delay = 0
}: {
  name: string;
  role: string;
  initials: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center"
    >
      <Card className="w-full overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-3">
            <Avatar className="h-20 w-20 border-2 border-primary mb-2">
              {/* <img src="../_self_pic_Ayman.jpg" alt={name} /> */}
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LandingPage;
