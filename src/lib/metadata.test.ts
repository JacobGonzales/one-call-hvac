import { describe, expect, it } from "vitest";

import { createPageMetadata } from "@/lib/metadata";

describe("createPageMetadata", () => {
  it("keeps route titles and canonical paths together", () => {
    expect(
      createPageMetadata({
        title: "Services | One Call",
        description: "Service description",
        path: "/services",
      }),
    ).toMatchObject({
      title: { absolute: "Services | One Call" },
      description: "Service description",
      alternates: { canonical: "/services" },
    });
  });
});
