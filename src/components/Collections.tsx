import { motion } from "framer-motion";
import earringsImage from "@/assets/earrings-category.jpg";
import banglesImage from "@/assets/bangles-category.jpg";
import necklaceImage from "@/assets/necklace-category.jpg";

const collections = [
  {
    name: "Earrings",
    description: "Delicate drops to statement chandeliers",
    image: earringsImage,
  },
  {
    name: "Bangles",
    description: "Traditional elegance meets modern design",
    image: banglesImage,
  },
  {
    name: "Necklaces",
    description: "Graceful chains and stunning pendants",
    image: necklaceImage,
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm tracking-[0.4em] text-primary uppercase font-medium mb-4">
            Our Collections
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Curated for <span className="text-gradient-gold">You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each collection is thoughtfully designed to complement your unique
            style and celebrate life's precious moments.
          </p>
        </motion.div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg hover-lift cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2 group-hover:text-gradient-gold transition-all duration-300">
                  {collection.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {collection.description}
                </p>
                
                {/* Decorative Line */}
                <motion.div
                  className="h-px bg-primary/50 mt-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
