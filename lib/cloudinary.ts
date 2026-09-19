// Helpers for Cloudinary delivery URLs. When Sam's assets are uploaded, swap
// the local paths in content/projects.ts for these. Set the cloud name in
// .env.local as NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME.

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function base(kind: 'video' | 'image'): string {
  return `https://res.cloudinary.com/${cloudName}/${kind}/upload`;
}

// Full case study video: H.264 MP4, capped at 1080p.
export function cloudinaryVideo(publicId: string): string {
  return `${base('video')}/q_auto,vc_h264,h_1080,c_limit/${publicId}.mp4`;
}

// 5-8s muted preview loop: smaller and lighter for grid tiles.
export function cloudinaryPreview(publicId: string): string {
  return `${base('video')}/q_auto:low,vc_h264,h_720,c_limit/${publicId}.mp4`;
}

// Poster frame pulled from the video's first second.
export function cloudinaryPoster(publicId: string): string {
  return `${base('video')}/so_0,q_auto,f_jpg,h_1080,c_limit/${publicId}.jpg`;
}

export function cloudinaryImage(publicId: string): string {
  return `${base('image')}/q_auto,f_auto,w_1600,c_limit/${publicId}`;
}
