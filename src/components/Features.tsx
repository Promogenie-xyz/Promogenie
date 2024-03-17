'use client'

import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Features = () => {
    const content = [
      {
        title: "LinkedIn Posts",
        description:
        "Elevate your LinkedIn presence with our dynamic service. Our tailored approach generates compelling posts that captivate your audience and drive engagement. From eye-catching visuals to persuasive copy, we'll help you stand out in the crowded LinkedIn feed and attract valuable connections. Maximize your impact and unlock new opportunities with our innovative website promo solution. Try it now and watch your LinkedIn presence soar!",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
             <Image
              src="/Linkedin.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
        {
            title: "Cold Emails for refferals",
            description:
            "Unlock new opportunities with our innovative product that generates personalized cold emails tailored to your target audience. Our cutting-edge technology ensures that your messages stand out and resonate with recipients, leading to higher response rates and meaningful engagements. Say goodbye to generic outreach and hello to impactful connections that drive results. Try our website promo today and revolutionize your email marketing approach!",
            content: (
              <div className="h-full w-full  flex items-center justify-center text-white">
                 <Image
                  src="/ColdEmail.png"
                  width={300}
                  height={300}
                  className="h-full w-full object-cover"
                  alt="linear board demo"
                />
              </div>
            ),
          },
        {
          title: "Twitter Posts",
          description:
          "Boost your online visibility with our website designed for Twitter. Our strategic approach crafts attention-grabbing posts that resonate with your audience and spark conversations. From trending hashtags to compelling visuals, we ensure your message shines in the Twitterverse. Take your online presence to the next level and drive engagement with our powerful website promo solution. Try it now and make waves on Twitter!",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/TwitterImg.png"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
        },
        {
          title: "Instagram Post Captions",
          description:
            "Elevate your Instagram game with our website captions. Crafted to perfection, our captions are designed to captivate your audience and drive clicks. From catchy hooks to compelling calls-to-action, we help you stand out in the crowded feed. Level up your Instagram presence and unlock new opportunities with our irresistible promo captions. Try them now and watch your engagement soar!",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/Instagram.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
          ),
        },
        {
          title: "Youtube community posts",
          description:
            "Supercharge your YouTube community engagement with us. Tailored for maximum impact, our posts grab attention and foster meaningful interactions. Whether it's teasing upcoming content or sharing exclusive offers, we ensure your community stays engaged and excited. Elevate your YouTube channel's presence and connect with your audience like never before with our powerful promo posts. Try them now and watch your community grow!",
          content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/Youtube.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
          ),
        },
        {
            title: "WhatsApp Buisness messages",
            description:
              "Revolutionize your business communication with our website promogenie generating WhatsApp messages. Crafted with precision, our messages are designed to engage customers and drive conversions. From personalized offers to timely updates, we ensure your business stays top-of-mind with your audience. Take your WhatsApp marketing to the next level and boost your business growth with our powerful promo messages. Try them now and see the difference in customer engagement!",
            content: (
              <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/Whatsapp.png"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
            ),
          },
          {
            title: "Content for your personal blogs",
            description:
              "Transform your personal blog into a captivating space with our product. Crafted to reflect your unique voice and style, our content ensures your blog stands out in the digital crowd. From thought-provoking articles to engaging stories, we help you connect with your audience on a deeper level. Elevate your blogging experience and unleash your creativity with our powerful promo content generator. Try it now and watch your blog flourish!",
            content: (
              <div className="h-full w-full  flex items-center justify-center text-white">
              <Image
                src="/Blog.png"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
            ),
          },
      ];
  return (
    <div className="p-10" id="features">
    <StickyScroll content={content} />
  </div>
  )
}

export default Features