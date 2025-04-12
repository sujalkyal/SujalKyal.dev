import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image, { StaticImageData } from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { TestimonialCTA } from "@/components/AddTestimonial";

type Testimonial = {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
};

const testimonials: Testimonial[] = [
  // {
  //   name: "Alex Turner",
  //   position: "Marketing Manager @ TechStartups",
  //   text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
  //   avatar: memojiAvatar1,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24 relative">
      <div className="container">
        <SectionHeader
          title="What My Clients Say"
          eyebrow="Happy Clients"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        {testimonials.length > 0 && (
          <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
            <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
              {[...new Array(2)].map((_, i) => (
                <Fragment key={i}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Always visible CTA */}
        <div className="mt-16">
          <TestimonialCTA />
        </div>
      </div>
    </div>
  );
};
