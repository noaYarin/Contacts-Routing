import { IsLikeColdPipe } from './is-like-cold.pipe';

describe('IsLikeColdPipe', () => {
  it('create an instance', () => {
    const pipe = new IsLikeColdPipe();
    expect(pipe).toBeTruthy();
  });
});
