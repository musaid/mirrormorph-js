export function getAvatarByEmail(email: string): string {
  // TODO: Implement the logic to get the avatar URL from mirrormorph.com using the email
  return `https://mirrormorph.com/avatar/${encodeURIComponent(email)}`;
}
