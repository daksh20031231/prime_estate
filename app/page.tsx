'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Stats } from '@/components/stats'
import { Services } from '@/components/services'
import { FeaturedProperties } from '@/components/featured-properties'
import { RegionsServed } from '@/components/regions-served'
import { WhyChooseUs } from '@/components/why-choose-us'
import { JoinUs } from '@/components/join-us'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ListPropertyPopup } from '@/components/list-property-popup'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <RegionsServed />
      <FeaturedProperties />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <JoinUs />
      <Contact />
      <Footer />
      <ListPropertyPopup />
      
      {/* Chatbot Integration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.chtlConfig = { chatbotId: "3365791432" }
          `,
        }}
      />
      <script
        async
        data-id="3365791432"
        id="chtl-script"
        type="text/javascript"
        src="https://chatling.ai/js/embed.js"
      />
    </div>
  )
}
