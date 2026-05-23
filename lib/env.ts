function required(key: string): string {
  const v = process.env[key];
  if (!v) throw new Error(`Missing env: ${key}`);
  return v;
}

export const env = {
  githubToken: required("GITHUB_TOKEN"),
  githubUsername: required("GITHUB_USERNAME"),
  vscodePublisher: required("VSCODE_PUBLISHER"),
};
