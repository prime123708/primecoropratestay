const { buildWrapper } = require('./plugins/layouts');
(async () => {
  const fakeId = 'd:/adavenue/primecorporatestay/primecoropratestay/src/app/page.jsx';
  const wrapperCode = buildWrapper.call({ addWatchFile: () => {} }, fakeId);
  console.log('wrapper code start\n', wrapperCode.slice(0,500), '\n...');
  const esbuild = require('esbuild');
  const compiled = await esbuild.transform(wrapperCode, {
    loader: 'jsx',
    sourcemap: true,
    sourcefile: fakeId,
    jsx: 'automatic',
    jsxImportSource: 'react',
  });
  console.log('map sources:', compiled.map.sources);
})();