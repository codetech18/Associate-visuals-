export type ProjectCategory = 'interviews-ads' | 'talking-head';
export type Project = {
  slug: string;
  title: string;
  client?: string;
  year?: number;
  role?: string;
  category: ProjectCategory;
  featured: boolean;
  featuredSize?: 'large' | 'medium';
  brief?: string;
  video: { driveId: string; poster?: string };
  caseStudy?: {
    format: string;
    intro: string;
    intent: string;
    treatment: string;
    focus: readonly string[];
  };
  stills?: string[];
};
export const categoryLabels: Record<ProjectCategory, string> = {
  'interviews-ads': 'Commercial / Editorial',
  'talking-head': 'Social storytelling',
};
// Verified from Sam's shared folders. Credits and production dates await confirmation.
export const projects: Project[] = [
  {
    "slug": "consumer-hallatv-victoria-island",
    "title": "Consumer HallaTV · Victoria Island",
    "category": "interviews-ads",
    "featured": false,
    "video": {
      "driveId": "1ip2eh1VsHfkeDJ2YgVworehNx89p4foa"
    }
  },
  {
    "slug": "consumer-hallatv-interview",
    "title": "Consumer HallaTV interview",
    "category": "interviews-ads",
    "featured": true,
    "featuredSize": "medium",
    "video": {
      "driveId": "1rdnAU4M0Q1u7qlCN2M0RiyQesgdMpoRc"
    },
    "caseStudy": {
      "format": "Interview film",
      "intro": "A clean, personality-led interview piece with a composed visual treatment that keeps the speaker at the centre of the story.",
      "intent": "Give the conversation room to feel natural while maintaining the polish and visual clarity expected from branded editorial content.",
      "treatment": "Balanced framing, controlled background separation, and dialogue-led pacing create a confident film without distracting from the person speaking.",
      "focus": ["Interview composition", "Natural delivery", "Editorial pacing"]
    }
  },
  {
    "slug": "griddle-reel-1",
    "title": "Griddle · Reel 1",
    "category": "interviews-ads",
    "featured": true,
    "featuredSize": "medium",
    "video": {
      "driveId": "1xs-ZjjVYGgMhrSMjyChDnhhUw9lxvr4C"
    },
    "caseStudy": {
      "format": "Short-form food reel",
      "intro": "A compact food film designed to turn colour, texture, and close detail into immediate appetite appeal.",
      "intent": "Make the product read instantly on a phone screen while giving the short edit enough visual polish to feel premium.",
      "treatment": "Tight compositions, detail-led imagery, and concise pacing keep the food tactile and the message clear from the first frame.",
      "focus": ["Food detail", "Colour and texture", "Mobile-first pacing"]
    }
  },
  {
    "slug": "nautica-beach-highlight",
    "title": "Nautica Beach highlight",
    "category": "interviews-ads",
    "featured": true,
    "featuredSize": "large",
    "video": {
      "driveId": "1YMOXOYWdS5bRCcnQUzIqHVUTcE6mE2Jt"
    },
    "caseStudy": {
      "format": "Experience highlight",
      "intro": "A location-led lifestyle film built around movement, atmosphere, and the sense of escape surrounding the Nautica Beach experience.",
      "intent": "Translate an active day on location into a concise highlight that feels energetic, inviting, and grounded in the environment.",
      "treatment": "Action, human moments, and wider location views are brought together through rhythmic pacing to give the experience a clear sense of place.",
      "focus": ["Lifestyle coverage", "Movement and energy", "Location atmosphere"]
    }
  },
  {
    "slug": "ojota",
    "title": "Ojota",
    "category": "interviews-ads",
    "featured": false,
    "video": {
      "driveId": "1Ydxo4-BNNoiV8rPvECHnalR0SpYdTHpw"
    }
  },
  {
    "slug": "redwood-review",
    "title": "Redwood review",
    "category": "interviews-ads",
    "featured": false,
    "video": {
      "driveId": "1-wa5As2uecq7BvSJurv0FJy86G4N5Bsx"
    }
  },
  {
    "slug": "zizou-project-trailer",
    "title": "ZIZOU project trailer",
    "category": "interviews-ads",
    "featured": false,
    "video": {
      "driveId": "1TlfmQF5VE0PRhDlzd6u9CzKHd0pNXAGZ"
    }
  },
  {
    "slug": "choose-spaces",
    "title": "Choose spaces that inspires",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "13b41wDrIMB3hIWOv_q4SSEubifynPu2C"
    }
  },
  {
    "slug": "expectation",
    "title": "Expectation",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1tEN9zdVY21xmXBQbIhcjbIw3HNe9Q8gv"
    }
  },
  {
    "slug": "filling-bucket",
    "title": "Filling Bucket",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1yBIvCzrXeXf8z9N3bAqLexwq_r4finij"
    }
  },
  {
    "slug": "first-and-yet",
    "title": "First and yet",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "14gdxoXAEqkAv8T-7vyx2lO1aVD6YEwNr"
    }
  },
  {
    "slug": "following-the-footpath",
    "title": "Following the footpath",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1iPk98xJoVwYSm0uXhEAfpBMttQYmc8PU"
    }
  },
  {
    "slug": "live-your-dream",
    "title": "Live your dream",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1YWIQaCUw_bXU_7zmJtquz7eObbHFkvcy"
    }
  },
  {
    "slug": "mark-twain-quote",
    "title": "Mark Twain quote",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "16jr0cRPYaMvscZmQgboZvLqVhIz7jLJg"
    }
  },
  {
    "slug": "ose",
    "title": "Ose",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1e4PIbLruPEEC8tuldiVYCgl7ixkes63s"
    }
  },
  {
    "slug": "reel-1",
    "title": "Reel 1",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1kQuN2pLR6BcoWZX58c6gT8-mY8WyPZXe"
    }
  },
  {
    "slug": "what-you-choose",
    "title": "What you choose",
    "category": "talking-head",
    "featured": false,
    "video": {
      "driveId": "1cxAPJGbxAYUwEgBDkFSGesRkoL_ga4cT"
    }
  }
];
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
export const featuredProjects = projects.filter((project) => project.featured);
