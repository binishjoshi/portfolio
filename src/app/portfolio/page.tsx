import { WorkItem } from "@/features/works/components/work-item";

import { works } from "#site/content";

export default async function PortfolioPage() {
  const orderedWorks = works.sort((a, b) => a.position - b.position);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">
            My Portfolio
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      {orderedWorks.length !== 0 ? (
        <ul>
          {orderedWorks.map(
            ({
              slug,
              position,
              title,
              description,
              image,
              sourceCode,
              url,
            }) => (
              <li key={slug + "-" + position} className="mb-8">
                <WorkItem
                  slug={slug}
                  title={title}
                  description={description}
                  image={image}
                  sourceCode={sourceCode}
                  url={url}
                />
              </li>
            ),
          )}
        </ul>
      ) : null}
    </div>
  );
}
