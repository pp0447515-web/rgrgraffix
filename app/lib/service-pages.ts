export type ServiceItem = { title: string; description?: string; image?: string };
export type ServicePageData = { slug: string; title: string; eyebrow: string; intro?: string; contentTitle?: string; images: string[]; items: ServiceItem[] };

export const servicePages: ServicePageData[] = [
  {
    slug: "signage",
    title: "Powerful Signage That Gets You Noticed",
    eyebrow: "Signage",
    images: ["1-3.jpg", "2-3.jpg", "3-3.jpg", "4-3.jpg", "5-3.jpg", "6-3.jpg", "20231206_211224-scaled.jpg", "Untitled-design-14.jpg"],
    items: [
      { title: "Banners", description: "Durable, eye-catching banners designed to promote your events, sales, or brand with impact.", image: "1-3.jpg" },
      { title: "Magnetic Signs", description: "Flexible and removable vehicle signage that turns your car into a mobile advertisement.", image: "2-3.jpg" },
      { title: "Estate Boards", description: "Professional real estate boards to showcase properties and grab buyer attention.", image: "3-3.jpg" },
      { title: "Notice Boards", description: "Clear and practical boards for schools, offices, or community announcements.", image: "4-3.jpg" },
      { title: "Funeral Boards", description: "Respectful and dignified boards designed for funerals and memorial services.", image: "5-3.jpg" },
      { title: "Shop Signage", description: "Custom shop signs crafted in Perspex, Chromodeck, or vinyl to enhance your storefront.", image: "6-3.jpg" },
      { title: "Construction Sign Boards", description: "Strong, weather-resistant boards for construction sites, safety info, and project branding.", image: "20231206_211224-scaled.jpg" },
      { title: "Window Frosting", image: "Untitled-design-14.jpg" },
    ],
  },
  {
    slug: "vehicle-branding-and-wrapping",
    title: "Drive Your Brand Everywhere",
    eyebrow: "Vehicle Branding and Wrapping",
    images: ["67839881_367065233982743_8305294069773369344_n.jpg", "95477089_532485307440734_2654642457282609152_n.jpg", "Untitled-design-15.jpg", "Untitled-design-16.jpg", "5.jpg"],
    items: [
      { title: "Vehicle Stickers and Graphics", description: "High-quality stickers and graphics that personalize your vehicle and promote your brand on the go.", image: "67839881_367065233982743_8305294069773369344_n.jpg" },
      { title: "Vehicle Wraps", description: "Durable, eye-catching wraps that transform your vehicle into a mobile billboard for maximum exposure.", image: "95477089_532485307440734_2654642457282609152_n.jpg" },
      { title: "Full Branding Wraps", description: "Complete vehicle coverage with bold designs to showcase your brand identity everywhere you travel.", image: "Untitled-design-15.jpg" },
      { title: "Custom Car Decals and Designs", description: "Unique, custom-designed decals that give your car a distinctive look and creative flair.", image: "Untitled-design-16.jpg" },
      { title: "Taxi Branding", description: "Professional taxi wraps and decals designed to boost visibility and attract daily impressions.", image: "5.jpg" },
      { title: "Truck and Bus Branding", image: "1-3.jpg" },
    ],
  },
  {
    slug: "large-format-printing",
    title: "Big Prints, Bigger Impact",
    eyebrow: "Large Format Printing",
    images: ["67059928_358895678133032_7981487083644518400_n.jpg", "67695159_358302308192369_8667096883518242816_n.jpg", "67839881_367065233982743_8305294069773369344_n.jpg", "84716356_481015819254350_4938297785704251392_n.jpg", "84740037_481013679254564_2288591293816766464_n.jpg", "image-12.jpg"],
    items: [
      { title: "Decals and Stickers (Digital and More)", description: "Custom decals and stickers in any size or design, perfect for branding, promotions, or personal use.", image: "67839881_367065233982743_8305294069773369344_n.jpg" },
      { title: "Wall Art", description: "Transform your space with creative wall art prints that add style, personality, and visual impact.", image: "67059928_358895678133032_7981487083644518400_n.jpg" },
      { title: "PVC Banners", description: "Durable, weather-resistant PVC banners designed for indoor or outdoor advertising and events.", image: "67695159_358302308192369_8667096883518242816_n.jpg" },
      { title: "Shops and Office Wall Art", description: "Professional wall graphics tailored for shops and offices to enhance branding and create a modern look.", image: "84716356_481015819254350_4938297785704251392_n.jpg" },
    ],
  },
  {
    slug: "safety-signs",
    title: "Safety Signs",
    eyebrow: "Safety Signs",
    contentTitle: "Safety First, Always Visible",
    intro: "Ensure compliance and protect people with our durable, high-visibility safety signs. From warning and health signs to construction and directional boards, we deliver signage that keeps workplaces safe and organized.",
    images: ["Safety-Signage.png", "7-5.jpg", "96713380_532905940732004_6007846918464471040_n.jpg", "image-11.jpg", "image-12.jpg", "4-1.jpg"],
    items: [
      { title: "Reflective and Non-Reflective Magnets", description: "Custom vehicle magnets available in reflective or non-reflective finishes for advertising.", image: "4-1.jpg" },
      { title: "Warning Signs", description: "Clear and durable warning signs designed to communicate hazards and ensure public safety.", image: "Safety-Signage.png" },
      { title: "Health and Safety Signs", description: "Compliant safety signage to promote awareness and maintain safe environments.", image: "7-5.jpg" },
      { title: "Construction Signs", description: "Custom vehicle magnets available in reflective or non-reflective finishes for advertising.", image: "96713380_532905940732004_6007846918464471040_n.jpg" },
      { title: "Directional / Information Boards", description: "Custom vehicle magnets available in reflective or non-reflective finishes for advertising.", image: "image-11.jpg" },
    ],
  },
  {
    slug: "apparel",
    title: "Apparel",
    eyebrow: "Apparel",
    contentTitle: "Custom Printing & Novelty Items | Apparel, Cups, Invitations & More",
    intro: "Discover professional DTF printing for apparel, safety vests, and uniforms, plus custom novelty items like cups and invitations. High-quality, durable prints for every occasion.",
    images: ["124073065_651581528864444_4303563664991341556_n.jpg", "124371040_651918595497404_6441305460869706927_n.jpg", "Untitled-design.jpg"],
    items: [
      { title: "DTF Printing on Apparel (T-Shirts, Safety Vests and More)", description: "High-quality Direct-to-Film (DTF) printing for all types of apparel. From t-shirts and safety vests to uniforms and custom wear, we deliver vibrant, durable prints that bring your designs to life.", image: "124073065_651581528864444_4303563664991341556_n.jpg" },
      { title: "Novelty Items (Cups, Invitations and More)", description: "Personalized novelty items designed to make every occasion special. From custom-printed cups and mugs to invitations and gifts, we create unique products tailored to your needs.", image: "124371040_651918595497404_6441305460869706927_n.jpg" },
    ],
  },
];

export const services = servicePages.map(({ slug, eyebrow }) => ({ slug, title: eyebrow }));
