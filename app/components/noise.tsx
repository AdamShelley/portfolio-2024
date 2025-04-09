const NoiseBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className} bg-white dark:bg-black/95`}>
      {/* Noise texture overlay - only visible in light mode */}
      <div
        className="dark:hidden absolute inset-0 w-full h-full opacity-[15%]"
        style={{
          backgroundImage: `url("/noise-texture.png")`,
          backgroundRepeat: "repeat",
          backgroundSize: "110px",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content container */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default NoiseBackground;
