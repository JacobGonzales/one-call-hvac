import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: path,
    },
  };
}
