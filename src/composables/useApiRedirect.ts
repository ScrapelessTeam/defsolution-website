export function useApiRedirect(target: string) {
  return process.env.NEXT_PUBLIC_API_BASE_URL + '/' + 'links/' + target;
}
