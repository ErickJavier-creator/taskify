import React from 'react'
import Image from 'next/image'
const SocialProof = () => {
  return (
    <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Trusted by 50,000+ teams worldwide
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/generic-company-logo.png?height=60&width=120&query=company logo ${i}`}
                    alt={`Company ${i}`}
                    width={120}
                    height={60}
                    className="mx-auto grayscale hover:grayscale-0 transition-all"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default SocialProof