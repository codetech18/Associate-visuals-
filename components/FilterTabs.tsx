'use client';

import { categoryLabels, type ProjectCategory } from '@/content/projects';

export type WorkFilter = 'all' | ProjectCategory;

const filters: { value: WorkFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => ({
    value: category,
    label: categoryLabels[category],
  })),
];

export default function FilterTabs({
  value,
  onChange,
}: {
  value: WorkFilter;
  onChange: (filter: WorkFilter) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-x-6 gap-y-1 border-b border-hairline"
      role="group"
      aria-label="Filter projects by category"
    >
      {filters.map((filter) => {
        const active = filter.value === value;
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(filter.value)}
            className={`-mb-px border-b pb-3 text-[13px] transition-colors duration-200 ${
              active
                ? 'border-accent text-primary'
                : 'border-transparent text-muted hover:text-primary'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
