export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PakingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you want for your trip?</h3>
    </div>
  );
}
function PakingList() {
  return <div className="list">LIST</div>;
}
function Stats() {
  return (
    <footer>
      <em> You have X items on your list , and you already packed X (X%) </em>
    </footer>
  );
}
