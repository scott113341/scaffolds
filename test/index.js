import test from 'tape';

import dummy from '../lib';


test('dummy test', t => {
  const output = dummy();
  t.equal(output, 'dummy');
  t.end();
});
