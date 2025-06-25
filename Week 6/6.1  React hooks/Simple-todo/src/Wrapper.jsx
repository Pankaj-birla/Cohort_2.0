// function App() {
//   return (
//     <>
//       <CardWrapper innerComponent={<TextComponent />} />
//     </>
//   );
// }

// function TextComponent() {
//   return <div>hi there</div>;
// }

// function CardWrapper({innerComponent}) {
//   return (
//     <div
//       style={{
//         border: "10px solid black",
//       }}
//     >
//       {innerComponent}
//     </div>
//   );
// }
// or

function Wrapper() {
  return (
    <>
      <CardWrapper >
            Hello there 2
        </CardWrapper>
      <CardWrapper> 
        <div>
            Hi Peoples
        </div>
      </CardWrapper>
    </>
  );
}

function CardWrapper({ children }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: '10px',
        margin: '10px'
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
