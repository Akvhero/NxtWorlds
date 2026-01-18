import { motion } from "framer-motion";
import { Sparkles, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Handcrafted Excellence",
    description:
      "Each piece is meticulously crafted by skilled artisans with decades of experience.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "We pour our passion into every design, creating jewelry that speaks to your heart.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Only the finest materials are selected to ensure lasting beauty and durability.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm tracking-[0.4em] text-primary uppercase font-medium mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Crafting Dreams into{" "}
              <span className="text-gradient-gold">Reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Next World Enterprises, we believe that jewelry is more than
                just an accessory—it's an expression of your unique identity and
                the moments that matter most.
              </p>
              <p>
                Our journey began with a simple vision: to create exquisite
                pieces that combine traditional craftsmanship with contemporary
                elegance. Every earring, bangle, and necklace in our collection
                is designed to make you feel extraordinary.
              </p>
              <p>
                From festive celebrations to everyday elegance, our pieces are
                crafted to accompany you through life's beautiful journey.
              </p>
            </div>

            {/* Decorative Element */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mt-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Right Content - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-6 p-6 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
