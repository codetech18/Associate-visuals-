export default function HeroReel({
  label,
}: {
  driveId: string;
  label: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-surface">
      <video
        src="/videos/zizou-project-trailer.mp4?v=2"
        poster="/images/previews/zizou-project-trailer.jpg"
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-hairline"
      />
      <p className="label-micro pointer-events-none absolute bottom-4 left-4 rounded-full bg-background/80 px-3 py-2 text-primary">
        ZIZOU · muted loop
      </p>
    </div>
  );
}
