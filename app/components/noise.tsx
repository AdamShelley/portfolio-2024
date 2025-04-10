const NoiseBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className} bg-white dark:bg-neutral-950`}>
      {/* Base background with gradient for dark mode */}
      <div
        className="hidden dark:block absolute inset-0 w-full h-full
              bg-[radial-gradient(ellipse_90%_80%_at_50%_-15%,rgba(120,119,198,0.15),rgba(255,255,255,0.05))]"
      ></div>

      {/* Light mode noise texture */}
      <div
        className="absolute inset-0 w-full h-full opacity-[15%] dark:hidden"
        style={{
          backgroundImage: `url("/noise-texture.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "110px",
          mixBlendMode: "multiply",
        }}
      />

      {/* Dark mode specific noise with higher visibility */}
      <div
        className="absolute inset-0 w-full h-full hidden dark:block dark:opacity-[30%]"
        style={{
          backgroundImage: `url("/noise-texture.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "110px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default NoiseBackground;
