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
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex gap-5"
        >
          {/* Timeline */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.08,
              }}
              className="z-10 h-4 w-4 rounded-full bg-brand"
            />

            {index !== items.length - 1 && (
              <>
                <div className="absolute top-4 h-full w-[2px] bg-background" />

                <motion.div
                  initial={{
                    scaleY: 0,
                  }}
                  whileInView={{
                    scaleY: 1,
                  }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08 + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "top" }}
                  className="absolute top-4 h-full w-[2px] origin-top bg-brand"
                />
              </>
            )}
          </div>

          {/* Content (rides the row entrance — one moving layer) */}
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