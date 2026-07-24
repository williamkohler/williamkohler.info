/**
 * All formatters pin timeZone: 'UTC'.
 * `z.coerce.date()` parses "2018-06-01" as UTC midnight; formatting that in EST
 * would render "May 2018" — a silent off-by-one-month bug.
 */
const MONTH_YEAR = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatMonth = (d: Date): string => MONTH_YEAR.format(d);

/** `end === null` renders as "Present". */
export const formatRange = (start: Date, end: Date | null): string =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`;

/** Machine-readable value for <time datetime="...">. */
export const isoMonth = (d: Date): string => d.toISOString().slice(0, 7);
