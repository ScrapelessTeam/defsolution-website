import dayjs from 'dayjs/esm';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

dayjs.extend(relativeTime);

export const TO_SECOND_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const TO_MINUTE_FORMAT = 'YYYY-MM-DD HH:mm';
export const TO_DAY_FORMAT = 'YYYY-MM-DD';

/**
 * 模拟sleep
 * @param ms
 * @returns
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms));
}

/**
 * 格式化时间
 * @param ms
 * @param format
 * @returns
 */
export function formatTime(ms: number | string | undefined, format?: string) {
  if (!ms) {
    return '-';
  }

  format = format || TO_SECOND_FORMAT;
  return dayjs(ms).format(format);
}

/**
 *
 * @description format table time
 * @param time time
 * @param overDay ma
 */
export function formatTableTime(time: string, overDay = 7) {
  const timestamp = dayjs(time).valueOf();
  const now = dayjs().valueOf();

  const diff = now - timestamp;
  const day = diff / (24 * 3600 * 1000);

  if (day > overDay) {
    // format time example Jan 17, 2024 17:26:30
    return dayjs(time).format('MMM DD, YYYY HH:mm:ss');
  }

  const unixTimestamp = dayjs(time).unix();
  const timesStr = dayjs.unix(unixTimestamp).fromNow();

  // handle
  // miniutes => m
  // hours => h
  // days => d
  // months => M
  // years => y
  // seconds => s
  // example: 1 minutes ago => 1m ago
  // example: 1 hours ago => 1h ago
  // example: 1 days ago => 1d ago
  // example: 1 month ago => 1M ago
  // example: 1 years ago => 1y ago
  // example: 1 seconds ago => 1s ago

  if (timesStr.includes('minute')) {
    return timesStr.replace(/minutes?/g, 'min');
  }

  if (timesStr.includes('hour')) {
    return timesStr.replace(/hours?/g, 'h');
  }

  if (timesStr.includes('day')) {
    return timesStr.replace(/days?/g, 'd');
  }

  if (timesStr.includes('month')) {
    return timesStr.replace(/months?/g, 'M');
  }

  if (timesStr.includes('year')) {
    return timesStr.replace(/years?/g, 'y');
  }

  if (timesStr.includes('a few second')) {
    return timesStr.replace(/a few seconds? ago/g, 'just now');
  }

  return timesStr;
}
