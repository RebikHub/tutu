import EnhancedTable from '../Table/EnhancedTable';
import app from './App.module.css';

export default function App() {
  return (
    <div className={app.app}>
      <header className={app.header}>
          Learn React
      </header>
      <EnhancedTable/>
    </div>
  );
}
