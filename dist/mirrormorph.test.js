"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mirrormorph_1 = require("./mirrormorph");
describe('getAvatarByEmail', () => {
    it('should return a valid URL for a given email', () => {
        const email = 'test@example.com';
        const result = (0, mirrormorph_1.getAvatarByEmail)(email);
        expect(result).toBe(`https://mirrormorph.com/avatar/${encodeURIComponent(email)}`);
    });
});
