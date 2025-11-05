"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Code, Code2, DollarSign, Github, Globe, HeadphonesIcon, Linkedin, Sparkles, Star, TrendingUp, Trophy, Twitter, Users, Zap, Clock } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom="true"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "feature" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DevCraft"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Professional Web Development Solutions"
          description="Transform your ideas into powerful web experiences with custom development, modern design, and scalable solutions"
          tag="Web Developers"
          tagIcon={Code}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern web development workspace"
          frameStyle="browser"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose DevCraft"
          description="We're a team of passionate web developers dedicated to creating exceptional digital experiences that drive business growth"
          tag="About Us"
          tagIcon={Users}
          bulletPoints={[
            {
              title: "Expert Development",
              description: "Full-stack expertise in modern technologies and frameworks",
              icon: Code2
            },
            {
              title: "Proven Results",
              description: "Successfully delivered 200+ projects for businesses worldwide",
              icon: Trophy
            },
            {
              title: "24/7 Support",
              description: "Ongoing maintenance and support for all our web solutions",
              icon: HeadphonesIcon
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional development team"
          imagePosition="right"
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Development Services"
          description="Comprehensive web development solutions tailored to your business needs"
          tag="Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Responsive Web Design",
              description: "Mobile-first designs that look perfect on all devices and screen sizes",
              imageSrc: "https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Responsive web design showcase"
            },
            {
              title: "Custom Development",
              description: "Tailored web applications built with modern frameworks and best practices",
              imageSrc: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Custom software development"
            },
            {
              title: "E-commerce Solutions",
              description: "Full-featured online stores with secure payment processing and inventory management",
              imageSrc: "https://images.pexels.com/photos/6994177/pexels-photo-6994177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "E-commerce website development"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Development Package"
          description="Flexible pricing options to match your project scope and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              price: "$2,999",
              name: "Starter Website",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "5-page responsive website",
                "Mobile optimization",
                "Basic SEO setup",
                "3 months support",
                "Contact form integration"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$7,999",
              name: "Business Solution",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Schedule Call",
                  href: "contact"
                }
              ],
              features: [
                "Custom web application",
                "Content management system",
                "Advanced SEO optimization",
                "6 months support",
                "Performance optimization",
                "Analytics integration"
              ]
            },
            {
              id: "enterprise",
              price: "$15,999+",
              name: "Enterprise Platform",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Custom Quote",
                  href: "contact"
                }
              ],
              features: [
                "Full-scale web platform",
                "Custom integrations",
                "Advanced security features",
                "12 months support",
                "Performance monitoring",
                "Dedicated project manager"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Development Impact"
          description="Numbers that showcase our commitment to excellence and client success"
          tag="Success Metrics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Globe,
              title: "Websites Launched",
              value: "200+"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Clients",
              value: "150+"
            },
            {
              id: "3",
              icon: Clock,
              title: "Years Experience",
              value: "8+"
            },
            {
              id: "4",
              icon: Zap,
              title: "Performance Boost",
              value: "300%"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Start Your Project?"
          description="Get in touch with our development team to discuss your web project requirements and receive a custom proposal"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "budget",
              type: "text",
              placeholder: "Project Budget",
              required: false
            }
          ]}
          textarea={{
            name: "project",
            placeholder: "Tell us about your project requirements...",
            rows: 5,
            required: true
          }}
          buttonText="Send Proposal Request"
          imageSrc="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Web development agency workspace"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="DevCraft"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Web Development",
                  href: "feature"
                },
                {
                  label: "Custom Applications",
                  href: "feature"
                },
                {
                  label: "E-commerce",
                  href: "feature"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Process",
                  href: "about"
                },
                {
                  label: "Case Studies",
                  href: "feature"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Get Quote",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Github,
              href: "https://github.com",
              ariaLabel: "GitHub"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© 2025 DevCraft. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}