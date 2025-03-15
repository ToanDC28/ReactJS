// import Hello from "./components/Hello.jsx";

function Hello(props) {
  return (
    <h1>
      {props.person.message}: {props.person.name} {props.person.seatNum}
    </h1>
  );
}
export default Hello;
