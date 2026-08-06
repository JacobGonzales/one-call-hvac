import type { ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
};

export function Image({
  alt,
  decoding,
  fill = false,
  loading,
  priority = false,
  style,
  ...props
}: ImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      decoding={decoding ?? "async"}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : undefined}
      style={
        fill
          ? {
              height: "100%",
              inset: 0,
              position: "absolute",
              width: "100%",
              ...style,
            }
          : style
      }
    />
  );
}
