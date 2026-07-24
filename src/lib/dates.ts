/**
 * Formatters pin timeZone: 'UTC'.
 * `z.coerce.date()` parses "2013-01-01" as UTC midnight; formatting that in EST
 * would render it as the previous year — a silent off-by-one bug.
 */
const YEAR = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatYear = (d: Date): string => YEAR.format(d);

/** `end === null` renders as "Present". */
export const formatRange = (start: Date, end: Date | null): string => {
  const from = formatYear(start);
  const to = end ? formatYear(end) : 'Present';
  // A role that started and ended in the same year shows one year, not "2018 – 2018".
  return from === to ? from : `${from} – ${to}`;
};

/** Machine-readable value for <time datetime="...">. */
export const isoYear = (d: Date): string => d.toISOString().slice(0, 4);
