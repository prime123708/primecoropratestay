import { buildWrapper } from './plugins/layouts.js';
import esbuild from 'esbuild';
(async () => {
  const fakeId = 'd:/adavenue/primecorporatestay/primecoropratestay/src/app/page.jsx';
  const wrapperCode = buildWrapper.call({ addWatchFile: () => {} }, fakeId);
  console.log('wrapper code snippet\n', wrapperCode.slice(0,500), '\n...');
  const compiled = await esbuild.transform(wrapperCode, {
    loader: 'jsx',
    sourcemap: true,
    sourcefile: fakeId,
    jsx: 'automatic',
    jsxImportSource: 'react',
  });
  console.log('map sources:', compiled.map.sources);
})();