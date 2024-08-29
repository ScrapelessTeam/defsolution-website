export function formatBytes(bytes: number) {
  if (bytes === 0) {
    return '0 B';
  }

  const k = 1024;
  const sizes = ['B', 'K', 'MB', 'GB', 'T'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * @example: 1000 => 1k, 1200 => 1.2k, 1256 => 1.3k 10000 => 1w, 12000 => 1.2w
 */
export function formatWorkflowUsedNum(usedNum: any) {
  if (typeof usedNum !== 'number') return 0;

  const num = usedNum;
  if (num < 1000) return num;
  if (num < 10000) return `${(num / 1000).toFixed(1)}k`;
  return `${(num / 10000).toFixed(1)}w`;
}
