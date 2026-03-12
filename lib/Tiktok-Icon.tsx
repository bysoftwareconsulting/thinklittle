export default function TikTokIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-label="TikTok"
      className={className}
    >
      <title>TikTok</title>
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.25V2h-3.67v13.673a2.835 2.835 0 1 1-2.835-2.835c.177 0 .348.018.515.052V9.213a6.507 6.507 0 0 0-.515-.02 6.505 6.505 0 1 0 6.505 6.505V9.819a8.44 8.44 0 0 0 4.77 1.51V7.763a4.77 4.77 0 0 1-1-.077z" />
    </svg>
  );
}
