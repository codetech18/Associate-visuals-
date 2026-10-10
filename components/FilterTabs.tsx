'use client';

import { categoryLabels, type ProjectCategory } from '@/content/projects';
import styles from './portfolio.module.css';

export type WorkFilter = 'all' | ProjectCategory;
const filters: { value: WorkFilter; label: string }[] = [{ value: 'all', label: 'All films' }, ...(Object.keys(categoryLabels) as ProjectCategory[]).map(category => ({ value: category, label: categoryLabels[category] }))];

export default function FilterTabs({ value, onChange }: { value: WorkFilter; onChange: (filter: WorkFilter) => void }) {
  return <div className={styles.filters} role="group" aria-label="Filter films by category">{filters.map(filter => <button key={filter.value} type="button" aria-pressed={value === filter.value} onClick={() => onChange(filter.value)} className={styles.filter}>{filter.label}</button>)}</div>;
}
