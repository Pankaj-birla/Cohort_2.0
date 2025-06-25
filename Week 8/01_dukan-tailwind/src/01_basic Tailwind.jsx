import "./index.css"; // or wherever the file is located
function App() {
  return (
    <>
      {/* <Flex /> */}
      {/* <Grid /> */}
      {/* <Responsivness /> */}
      <DivResponsivness />
    </>
  );
}

function Flex() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ background: "red" }}>First Div</div>
        <div style={{ background: "blue" }}>Second Div</div>
        <div style={{ background: "green" }}>Third Div</div>
      </div>

      <div className="flex justify-center">
        <div className="bg-red-500">First Div</div>
        <div className="bg-blue-500">Second Div</div>
        <div className="bg-green-500">Third Div</div>
      </div>
    </>
  );
}

function Grid() {
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">First Div</div>
        <div className="bg-blue-500 col-span-4">Second Div</div>
        <div className="bg-green-500 col-span-2">Third Div</div>
      </div>
    </>
  );
}

function Responsivness() {
  return (
    <>
      <div className="bg-red-500 md:bg-blue-500">Hi there</div>
    </>
  );
}

function DivResponsivness() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-red-500">First Div</div>
        <div className="bg-blue-500">Second Div</div>
        <div className="bg-green-500">Third Div</div>
        <div className="bg-orange-500">Third Div</div>
      </div>
    </>
  );
}
export default App;
