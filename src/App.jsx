import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CgColorPicker } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
function App() {
  const [font, setfont] = useState("Arial");
  const [size, setsize] = useState(15);
  const [color, setcolor] = useState("#000000");
  const [id, setid] = useState(Date.now());
  var arr = [];
  const [top, settop] = useState(-1);
  const handlecolor = (e) => {
    setcolor(e.target.value);
  };
  const handlefamily = (e) => {
    setfont(e.target.value);
  };
  const handlesize = (e) => {
    if (e.target.value >= 15) setsize(e.target.value);
  };
  const handleadd = () => {
    var input = document.querySelectorAll("input");
    for (var i = 0; i < input.length; i++) {
      var txt = document.getElementById(`${input[i].id}`);
      if (txt) {
        txt.style.backgroundColor = "transparent";
        txt.style.border = "none";
      }
    }
    setcolor("#000000");
    setfont("Arial");
    setsize(15);
    setid(`${0}`);
  };
  const handleremove = () => {
    var txt = document.getElementById(`${id}`);
    if (txt) {
      txt.style.display = "none";
    }
  };
  const handleposition = (e) => {
    var child = document.createElement("input");
    child.setAttribute("id", `${Date.now()}`);
    child.addEventListener("click", (e) => {
      setid(e.target.id);
      arr.push(id);
      settop(top + 1);
    });
    child.style.position = "absolute";
    if (70 <= e.clientX <= 615) {
      child.style.left = `${e.clientX}px`;
    }
    if (75 <= e.clientY <= 614) {
      child.style.top = `${e.clientY}px`;
    }

    child.style.minHeight = `30px`;
    child.style.minWidth = `200px`;
    child.style.border = `1px dashed`;
    child.style.backgroundColor = `transparent`;

    document.getElementById(e.target.id).appendChild(child);
  };
  useEffect(() => {
    var txt = document.getElementById(`${id}`);
    if (txt) {
      txt.style.color = `${color}`;
      txt.style.fontFamily = `${font}`;
      txt.style.fontSize = `${parseInt(size)}px`;
    }
  }, [color, size, font, id]);
  const Family = [
    "Arial",
    "Arial Black",
    "Bahnschrift",
    "Calibri",
    "Cambria",
    "Cambria Math",
    "Candara",
    "Comic Sans MS",
    "Consolas",
    "Constantia",
    "Corbel",
    "Courier New",
    "Ebrima",
    "Franklin Gothic Medium",
    "Gabriola",
    "Gadugi",
    "Georgia",
    "HoloLens MDL2 Assets",
    "Impact",
    "Ink Free",
    "Javanese Text",
    "Leelawadee UI",
    "Lucida Console",
    "Lucida Sans Unicode",
    "Malgun Gothic",
    "Marlett",
    "Microsoft Himalaya",
    "Microsoft JhengHei",
    "Microsoft New Tai Lue",
    "Microsoft PhagsPa",
    "Microsoft Sans Serif",
    "Microsoft Tai Le",
    "Microsoft YaHei",
    "Microsoft Yi Baiti",
    "MingLiU-ExtB",
    "Mongolian Baiti",
    "MS Gothic",
    "MV Boli",
    "Myanmar Text",
    "Nirmala UI",
    "Palatino Linotype",
    "Segoe MDL2 Assets",
    "Segoe Print",
    "Segoe Script",
    "Segoe UI",
    "Segoe UI Historic",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "SimSun",
    "Sitka",
    "Sylfaen",
    "Symbol",
    "Tahoma",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
    "Webdings",
    "Wingdings",
    "Yu Gothic",
  ];
  return (
    <div className="page">
      <div className="text-screen" id="text-screen" onClick={handleposition}>
        <div id="text">Text</div>
      </div>
      <div className="functions">
        <div>
          <div className="font-family">
            <label style={{ left: "0%", fontSize: "30px" }}>Font-Family</label>
            <select name="choose" id="" onChange={handlefamily} value={font}>
              {Family.map((data) => (
                <option>{data}</option>
              ))}
            </select>
          </div>
          <div className="other">
            <div className="font-size">
              Size:-
              <input type="number" onChange={handlesize}></input>
            </div>
            <div className="color">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "x-large",
                }}
              >
                <CgColorPicker size={30} />
                <input
                  type="color"
                  onChange={handlecolor}
                  value={color}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleadd}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "x-large",
            }}
          >
            Add Text <IoMdAdd />
          </div>
        </button>
        <hr />
        <span style={{ color: "green", fontWeight: "900", paddingTop: "10px" }}>
          *Press add text to fix input texts and remove all waste text boxes and
          fix the positions..
        </span>
        <hr />
        <button
          className="remove"
          onClick={handleremove}
          style={{
            backgroundColor: "rgba(255, 0, 0, 0.723)",
            fontSize: "larger",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            Remove Text <RiDeleteBin6Fill />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
