"use client";

import { Breadcrumb } from "./Breadcrumbs";

export const ProseExemptBreadcrumbs = (props: any) => {
  return (
    <div className="z-[999] not-prose !p-0 !m-0 !my-8">
      <div
        className={`[&_*]:!leading-normal [&_a]:!no-underline [&_p]:!m-0 [&_span]:!m-0 `}
      >
        <Breadcrumb mode="url" />
      </div>
    </div>
  );
};
