export type findPackageManagerType = (path: string) => 'yarn' | 'npm' | 'pnpm' | 'unknown';