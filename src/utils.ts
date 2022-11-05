export function getURLpath(controller: string, path: string) {
  return (controller ? adaptPath(controller) : "") + adaptPath(path);
}
export function adaptPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}
