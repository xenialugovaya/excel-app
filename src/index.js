import Excel from './components/excel/Excel';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('/', true, /\.(scss|js)$/));

const excel = new Excel('#app', {
  components: [],
});

console.log('Excel', excel);