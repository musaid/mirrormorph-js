import { getAvatarByEmail } from './mirrormorph';

describe('getAvatarByEmail', () => {
  it('should return a valid URL for a given email', () => {
    const email = 'test@example.com';
    const result = getAvatarByEmail(email);
    expect(result).toBe(`https://mirrormorph.com/avatar/${encodeURIComponent(email)}`);
  });
});
