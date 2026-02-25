import esbuild from 'esbuild';
(async () => {
  const fakeId = 'd:/adavenue/primecorporatestay/primecoropratestay/src/app/page.jsx';
  const wrapper = `import Page from "${fakeId}?noLayout.jsx";
export default function WrappedPage(props) {return <Page {...props} />;}`;
  const compiled = await esbuild.transform(wrapper, {
    loader: 'jsx',
    sourcemap: true,
    sourcefile: fakeId,
    jsx: 'automatic',
    jsxImportSource: 'react',
  });
  console.log('compiled', compiled);
})();