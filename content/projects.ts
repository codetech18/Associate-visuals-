export type ProjectCategory = 'interviews-ads' | 'talking-head';
export type Project = {
  slug: string;
  title: string;
  client?: string;
  year?: number;
  role?: string;
  category: ProjectCategory;
  featured: boolean;
  brief?: string;
  format?: string;
  video: { driveId: string; poster?: string; orientation?: 'portrait' | 'landscape'; src?: string };
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
    "title": "Consumer HallaTV — The interview",
    "brief": "An interview film that puts the conversation centre stage. Part of the Consumer HallaTV work in the Associate Visuals collection.",
    "category": "interviews-ads",
    "featured": true,
    "format": "Interview film",
    "video": {
      "driveId": "1rdnAU4M0Q1u7qlCN2M0RiyQesgdMpoRc"
    }
  },
  {
    "slug": "griddle-reel-1",
    "title": "Griddle · Reel 1",
    "brief": "A short-form food reel from Griddle, presented in its original vertical format.",
    "category": "interviews-ads",
    "featured": false,
    "format": "Short-form food reel",
    "video": {
      "driveId": "1xs-ZjjVYGgMhrSMjyChDnhhUw9lxvr4C",
      "orientation": "portrait"
    }
  },
  {
    "slug": "nautica-beach-highlight",
    "title": "Nautica Beach",
    "brief": "A vertical highlight film from Nautica Beach, bringing together the location and the experience.",
    "category": "interviews-ads",
    "featured": true,
    "format": "Experience highlight",
    "video": {
      "driveId": "1YMOXOYWdS5bRCcnQUzIqHVUTcE6mE2Jt",
      "orientation": "portrait"
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
    "title": "Redwood — A different perspective",
    "format": "Location & aerial film",
    "brief": "A location film with an aerial perspective. Explore the Redwood film from the Associate Visuals collection.",
    "category": "interviews-ads",
    "featured": true,
    "video": {
      "driveId": "1-wa5As2uecq7BvSJurv0FJy86G4N5Bsx"
    }
  },
  {
    "slug": "zizou-project-trailer",
    "title": "ZIZOU — The trailer",
    "format": "Project trailer",
    "brief": "A short trailer for the ZIZOU project. Watch the landscape preview featured on the homepage, or open the original film on Google Drive.",
    "category": "interviews-ads",
    "featured": true,
    "video": {
      "driveId": "1TlfmQF5VE0PRhDlzd6u9CzKHd0pNXAGZ",
      "src": "/videos/zizou-project-trailer.mp4?v=2"
    }
  },
  {
    "slug": "choose-spaces",
    "title": "Choose spaces that inspire",
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
export function getVideoOrientation(project: Project): 'portrait' | 'landscape' {
  return project.video.orientation ?? (project.category === 'talking-head' ? 'portrait' : 'landscape');
}
const featuredOrder = ['nautica-beach-highlight', 'consumer-hallatv-interview', 'zizou-project-trailer', 'redwood-review'];
export const featuredProjects = featuredOrder.map(slug => getProject(slug)!).filter(Boolean);
