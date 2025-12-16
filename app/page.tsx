"use client"

import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Video,
  FileText,
  MessageSquare,
  Clock,
  Shield,
  Users,
  BarChart,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Heart,
  Activity,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 px-4 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground w-fit">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Trusted by 500+ healthcare providers
              </div>

              <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
                Healthcare management that <span className="text-primary">just works</span>
              </h1>

              <p className="text-pretty text-xl text-muted-foreground leading-relaxed">
                PulseCal transforms chaotic appointment scheduling into seamless patient care. Manage appointments,
                records, and communication all in one intelligent platform.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-base">
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  Watch demo
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">HIPAA compliant</span>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative h-[500px] w-full rounded-2xl border border-border bg-card p-4 shadow-2xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10" />
                <img
                  src="/modern-healthcare-dashboard.png"
                  alt="PulseCal Dashboard"
                  className="relative h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-b border-border bg-destructive/5 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground">
                Healthcare runs on outdated systems that create chaos
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Traditional healthcare management systems are fragmented, complex, and slow. They create bottlenecks
                  that frustrate patients and overwhelm staff.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                    <span>Missed appointments cost clinics $150 billion annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                    <span>Patients wait 30+ minutes on average for appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                    <span>Medical records are scattered across multiple systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-destructive" />
                    <span>Staff spend hours on manual scheduling and follow-ups</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <img src="/frustrated-healthcare-staff-with-paperwork.jpg" alt="Healthcare Problems" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="border-b border-border px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              One platform. Complete control.
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-xl text-muted-foreground leading-relaxed">
              PulseCal brings everything together in one intelligent system designed for modern healthcare.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description:
                  "AI-powered appointment booking that reduces no-shows by 60% with automated reminders and confirmations.",
              },
              {
                icon: Video,
                title: "Telemedicine Ready",
                description:
                  "Built-in video consultations with secure, HIPAA-compliant infrastructure. No third-party tools needed.",
              },
              {
                icon: FileText,
                title: "Unified Records",
                description:
                  "All patient records, prescriptions, and history in one place. Accessible anytime, anywhere.",
              },
              {
                icon: MessageSquare,
                title: "Real-time Communication",
                description: "Secure messaging between patients and providers. Reduce phone calls by 80%.",
              },
              {
                icon: Clock,
                title: "Queue Management",
                description:
                  "Live wait time tracking and patient flow optimization. Keep your clinic running smoothly.",
              },
              {
                icon: BarChart,
                title: "Analytics Dashboard",
                description:
                  "Actionable insights on appointments, revenue, and patient satisfaction at your fingertips.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-pretty text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="border-b border-border bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Why healthcare providers choose PulseCal
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                <Stethoscope className="h-10 w-10 text-success" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-foreground">98%</h3>
              <p className="text-lg font-medium text-foreground">Patient Satisfaction</p>
              <p className="mt-2 text-muted-foreground">Patients love the convenience</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-foreground">5 hours</h3>
              <p className="text-lg font-medium text-foreground">Saved per day</p>
              <p className="mt-2 text-muted-foreground">Automated workflows free up staff</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <Activity className="h-10 w-10 text-accent" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-foreground">40%</h3>
              <p className="text-lg font-medium text-foreground">Revenue Increase</p>
              <p className="mt-2 text-muted-foreground">Reduced no-shows and better scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role-based Section */}
      <section id="solutions" className="border-b border-border px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Built for every role in healthcare
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                role: "Patients",
                icon: Heart,
                benefits: [
                  "Book appointments in seconds",
                  "Access medical records anytime",
                  "Get prescription refills online",
                  "Video consultations from home",
                ],
              },
              {
                role: "Doctors",
                icon: Stethoscope,
                benefits: [
                  "See patient history instantly",
                  "Manage schedule efficiently",
                  "E-prescriptions and digital notes",
                  "Focus on care, not paperwork",
                ],
              },
              {
                role: "Receptionists",
                icon: Users,
                benefits: [
                  "Automated appointment reminders",
                  "Real-time queue management",
                  "Quick patient check-in",
                  "Reduce phone call volume",
                ],
              },
              {
                role: "Administrators",
                icon: Shield,
                benefits: [
                  "Complete system analytics",
                  "Revenue and performance insights",
                  "Compliance management",
                  "Staff and resource optimization",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.role}</h3>
                </div>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border bg-primary/5 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Ready to transform your healthcare practice?
          </h2>
          <p className="mb-8 text-pretty text-xl text-muted-foreground leading-relaxed">
            Join hundreds of healthcare providers who have already switched to PulseCal. Start your free trial today, no
            credit card required.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Schedule a demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">14-day free trial • HIPAA compliant • 24/7 support</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
