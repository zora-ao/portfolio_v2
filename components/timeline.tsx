"use client";

import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({
  items,
}: TimelineProps) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
          }}
          className="flex gap-5"
        >
          {/* Timeline */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
              }}
              className="z-10 h-4 w-4 rounded-full bg-violet-500"
            />

            {index !== items.length - 1 && (
              <>
                <div className="absolute top-4 h-full w-[2px] bg-background" />

                <motion.div
                  initial={{
                    height: 0,
                  }}
                  whileInView={{
                    height: "100%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute top-4 w-[2px] bg-violet-500"
                />
              </>
            )}
          </div>

          {/* Content */}
          <div className="pb-10">
            <p className="font-semibold text-foreground">
              {item.year}
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>

            <p className="mt-1 text-foreground text-sm">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}