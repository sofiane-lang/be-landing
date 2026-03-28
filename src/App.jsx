import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Menu, X, ArrowRight, ChevronRight, Star, Users, Zap, TrendingUp,
  Brain, ShoppingBag, BarChart3, CheckCircle2, Instagram, Twitter,
  Linkedin, Youtube, Mail, Phone, ExternalLink, Sparkles, Target,
  Award, Clock, Globe, MessageSquare
} from 'lucide-react'

// ─── Animation Variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

// ─── useInView hook wrapper ────────────────────────────────────────────────
function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Navigation ────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Programmes', 'Méthode', 'Témoignages', 'Blog']

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mauve/80 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 bg-orange rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="font-display font-black text-white text-lg tracking-tight">
            Business<span className="text-orange">Entrepreneur</span>
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="https://calendly.com/business-entrepreneur/appel-accompagnement-perso" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">
            Réserver un appel
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mauve/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white text-base font-medium"
                >
                  {link}
                </a>
              ))}
              <a href="https://calendly.com/business-entrepreneur/appel-accompagnement-perso" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Réserver un appel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  const stats = [
    { value: '1 200+', label: 'Talents formés' },
    { value: '94%', label: 'Taux de placement' },
    { value: '3,2×', label: 'Salaire moyen boosté' },
  ]

  return (
    <section className="relative min-h-screen bg-mauve bg-mauve-grid flex items-center overflow-hidden pt-20">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col gap-7"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-4 py-2 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-orange" />
              Hub d'Accélération de Carrière
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white"
          >
            Les talents ambitieux ne subissent plus le marché du travail, ils le{' '}
            <span className="text-gradient-orange">pilotent.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p variants={fadeUp} className="text-white/65 text-lg leading-relaxed max-w-lg">
            Un Hub d'Accélération. Ni école, ni agence, ni réseau seul.{' '}
            <span className="text-white/90 font-medium">La méthode BE</span> pour ceux qui refusent la médiocrité.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/business-entrepreneur/appel-accompagnement-perso"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              Réserver un appel
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#programmes" className="btn-outline flex items-center gap-2">
              Découvrir les programmes
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display font-black text-2xl text-white">{value}</span>
                <span className="text-white/50 text-xs mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Profile photo slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-[-20px] rounded-3xl border border-orange/20 rotate-3" />
            <div className="absolute inset-[-36px] rounded-3xl border border-white/5 -rotate-2" />

            {/* Photo placeholder */}
            <div className="w-[420px] h-[520px] rounded-3xl bg-gradient-to-br from-mauveL to-mauve border border-white/10 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-mauve-grid opacity-30" />
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center">
                <Users className="w-10 h-10 text-white/30" />
              </div>
              <p className="text-white/30 text-sm font-medium">Photo de profil pro</p>
              <p className="text-white/20 text-xs">1080 × 1350 recommandé</p>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Accompagnement A à Z</div>
                  <div className="text-white/50 text-xs">Coaching live inclus</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── Programme Card ────────────────────────────────────────────────────────
function ProgramCard({ icon: Icon, iconColor, title, description, tags, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariant}
      transition={{ delay }}
      className="card-hover bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col gap-6 group"
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconColor}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="font-display font-bold text-charcoal text-xl leading-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Badge */}
      <div className="flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-xl px-4 py-2.5">
        <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
        <span className="text-orange text-xs font-semibold">Accompagnement A à Z · Coaching live inclus</span>
      </div>

      {/* CTA */}
      <a
        href="https://calendly.com/business-entrepreneur/appel-accompagnement-perso"
        target="_blank" rel="noopener noreferrer"
        className="mt-auto flex items-center justify-center gap-2 bg-charcoal text-white font-display font-bold text-sm py-3.5 px-6 rounded-xl hover:bg-mauve transition-all duration-300 group-hover:bg-orange"
      >
        Vérifier mon éligibilité
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </motion.div>
  )
}

// ─── Programmes Section ────────────────────────────────────────────────────
function Programmes() {
  const programmes = [
    {
      icon: Globe,
      iconColor: 'bg-blue-500',
      title: 'Traffic Manager IA',
      description: 'Maîtrise la publicité digitale augmentée par l\'IA. Meta Ads, TikTok Ads, Google Ads — génère des leads qualifiés pour tes clients partenaires à grande échelle.',
      tags: ['Meta Ads', 'TikTok Ads', 'IA & Automatisation', 'Lead Gen'],
    },
    {
      icon: BarChart3,
      iconColor: 'bg-[#460B5E]',
      title: 'Business Analyst',
      description: 'Transforme les données en décisions business. Analyse les performances, pilote les KPIs et devient l\'interlocuteur stratégique indispensable de toute direction.',
      tags: ['Data Analytics', 'Reporting', 'Stratégie', 'KPIs'],
    },
    {
      icon: ShoppingBag,
      iconColor: 'bg-orange',
      title: 'TikTok Shop',
      description: 'Le commerce social qui explose en 2024-2025. Crée ton flux de revenus sur TikTok Shop, de la stratégie de contenu à la conversion — faceless ou facecam.',
      tags: ['TikTok Organic', 'Live Commerce', 'Affiliation', 'UGC'],
    },
  ]

  return (
    <section id="programmes" className="section-cream py-28 diagonal-clip-reverse -mt-4">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-orange/10 text-orange text-xs font-semibold px-4 py-2 rounded-full mb-5">
            <Target className="w-3.5 h-3.5" />
            3 voies d'accélération
          </span>
          <h2 className="font-display font-black text-charcoal text-4xl sm:text-5xl leading-tight mb-5">
            Choisis ta trajectoire,{' '}
            <span className="text-orange">accélère maintenant.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Trois programmes taillés pour les profils ambitieux. Pas de théorie sans pratique. Chaque formation mène à une activité génératrice de revenus.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {programmes.map((prog, i) => (
            <ProgramCard key={prog.title} {...prog} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pont Entrepreneurial ──────────────────────────────────────────────────
function PontEntrepreneurial() {
  return (
    <section className="bg-mauve bg-mauve-grid py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-px h-full bg-white/5" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-orange/8 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight mb-4">
            Le pont entrepreneurial
          </h2>
          <p className="text-white/55 text-lg">
            Deux outils complémentaires pour aller plus loin que la formation.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Test DISC */}
          <FadeInSection delay={0.1}>
            <div className="card-hover relative bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col gap-6 overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-lg w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  Profil DISC offert
                </div>
                <h3 className="font-display font-bold text-white text-2xl">
                  Découvre ton profil comportemental
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Le test DISC révèle tes forces naturelles, ton style de communication et le programme BE qui te correspond le mieux. 15 minutes. Résultats immédiats.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-xs">
                {['Leadership', 'Communication', 'Style de vente', 'Compatibilité programme'].map(t => (
                  <span key={t} className="bg-white/8 border border-white/10 text-white/60 px-3 py-1.5 rounded-lg">{t}</span>
                ))}
              </div>

              <a
                href="https://www.profil-business-entrepreneur.fr/"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 mt-auto"
              >
                Passer le test gratuit
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </FadeInSection>

          {/* Communauté Skool */}
          <FadeInSection delay={0.2}>
            <div className="card-hover relative bg-gradient-to-br from-orange/10 to-orange/5 border border-orange/20 rounded-2xl p-10 flex flex-col gap-6 overflow-hidden group h-full">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange/10 rounded-full blur-3xl" />

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-orange/70 flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 bg-orange/20 text-orange text-xs font-semibold px-3 py-1.5 rounded-lg w-fit">
                  <Users className="w-3.5 h-3.5" />
                  Communauté active
                </div>
                <h3 className="font-display font-bold text-white text-2xl">
                  Rejoins le club BE
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  La communauté privée des entrepreneurs BE. Entraide, partages de résultats, accès aux replays, sessions lives mensuelles et catalogue de partenaires exclusifs.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-xs">
                {['Entraide active', 'Lives mensuels', 'Catalogue partenaires', 'Replays illimités'].map(t => (
                  <span key={t} className="bg-white/8 border border-white/10 text-white/60 px-3 py-1.5 rounded-lg">{t}</span>
                ))}
              </div>

              <a
                href="#"
                className="btn-primary flex items-center justify-center gap-2 mt-auto"
              >
                Rejoindre le club
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

// ─── Mindset Section ───────────────────────────────────────────────────────
function Mindset() {
  return (
    <section className="section-cream py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-mauve/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <FadeInSection>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-1 bg-orange mx-auto mb-10 rounded-full"
          />

          <blockquote className="font-display font-black text-charcoal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-10 tracking-tight">
            "BE n'est pas pour tout le monde.
            <br />
            <span className="text-orange">La sélection n'est pas un filtre,</span>
            <br />
            c'est la marque."
          </blockquote>

          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Nous ne formons pas des participants. Nous accélérons des entrepreneurs qui ont déjà décidé de réussir.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Target, label: 'Orienté résultats', desc: 'Chaque heure de formation génère un ROI mesurable.' },
              { icon: Clock, label: 'Intensif & dense', desc: 'Pas de rembourrage. 100% actionnable dès le jour 1.' },
              { icon: Award, label: 'Standard d\'excellence', desc: 'La qualité BE ou rien. Le niveau monte avec chaque cohorte.' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col gap-3 text-left">
                <div className="w-10 h-10 bg-mauve rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="font-display font-bold text-charcoal">{label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: 'Yasmine K.',
      role: 'Traffic Manager IA · Promo 2024',
      avatar: 'YK',
      color: 'bg-purple-500',
      stars: 5,
      text: 'En 3 mois j\'ai signé mes premiers clients à 800€/mois de mandat. La méthode BE m\'a donné les outils mais surtout le mindset pour me positionner correctement.',
    },
    {
      name: 'Mehdi A.',
      role: 'TikTok Shop · Promo 2024',
      avatar: 'MA',
      color: 'bg-orange',
      stars: 5,
      text: 'Je faisais 1 200€ de CA/mois avec mon TikTok Shop au bout de 6 semaines. Le suivi hebdomadaire et les retours du coach ont tout changé.',
    },
    {
      name: 'Léa D.',
      role: 'Business Analyst · Promo 2023',
      avatar: 'LD',
      color: 'bg-blue-500',
      stars: 5,
      text: 'Reconversion réussie en 5 mois. De commerciale terrain à Business Analyst en remote pour une startup. BE n\'est pas une formation, c\'est une trajectoire.',
    },
  ]

  return (
    <section id="témoignages" className="bg-mauve bg-mauve-grid py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full mb-5">
            <Star className="w-3.5 h-3.5 text-orange fill-orange" />
            Ils ont fait le choix BE
          </span>
          <h2 className="font-display font-black text-white text-4xl sm:text-5xl">
            Des résultats, pas des promesses.
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={t.name} delay={i * 0.1}>
              <div className="card-hover bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5 h-full">
                <div className="flex gap-1">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-orange fill-orange" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ─────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="section-cream py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeInSection>
          <div className="relative bg-mauve rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-mauve-grid" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center gap-7">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full">
                <MessageSquare className="w-3.5 h-3.5 text-orange" />
                Appel stratégique offert · 30 minutes
              </span>
              <h2 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight">
                Prêt à piloter ta carrière ?
              </h2>
              <p className="text-white/60 text-lg max-w-lg">
                Un appel de 30 minutes avec un expert BE pour évaluer ton profil, identifier le programme adapté et définir ta feuille de route.
              </p>
              <a
                href="https://calendly.com/business-entrepreneur/appel-accompagnement-perso"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-lg px-10 py-5 glow-orange"
              >
                Réserver mon appel gratuit
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-white/30 text-xs">Sans engagement · Résultats concrets en 30 min</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter/X' },
  ]

  const links = {
    Programmes: ['Traffic Manager IA', 'Business Analyst', 'TikTok Shop'],
    Ressources: ['Blog', 'Podcast', 'Test DISC', 'Communauté Skool'],
    Légal: ['Mentions légales', 'CGV', 'Politique de confidentialité', 'Cookies'],
  }

  return (
    <footer className="bg-mauve border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-display font-black text-white text-base">
                Business<span className="text-orange">Entrepreneur</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Le hub d'accélération pour les talents qui refusent la médiocrité.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
              <a href="mailto:sav@business-entrepreneur.fr" className="text-white/50 text-sm hover:text-white transition-colors">
                sav@business-entrepreneur.fr
              </a>
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/8 border border-white/10 rounded-xl flex items-center justify-center hover:bg-orange hover:border-orange transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="font-display font-bold text-white text-sm tracking-wide">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Business Entrepreneur. Tous droits réservés.
          </p>
          <a
            href="https://calendly.com/business-entrepreneur/appel-accompagnement-perso"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange text-xs font-semibold px-4 py-2 rounded-lg hover:bg-orange hover:text-white transition-all duration-200"
          >
            Réserver un appel
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Programmes />
      <PontEntrepreneurial />
      <Mindset />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}
