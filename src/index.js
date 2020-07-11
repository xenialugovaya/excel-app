import Excel from './components/excel/Excel';
import Header from './components/header/Header';
import Toolbar from './components/toolbar/Toolbar';
import Formula from './components/formula/Formula';
import Table from './components/table/Table';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('/', true, /\.(scss|js)$/));

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();