import "./CssEP1.css";
import Code from "./../../Code";
import "./CssBlogEp2.css";

const htmlDivOriginal = `<div class="center-element"><span>HelloWorld</span></div>`;
const cssOriginal = `.center-element { 
    height: 100px;
    background-color: #f5f5f5;
    border: 1px solid black;
}`;

const cssFlex = `.center-element {
    display: flex;
    justify-content: center;
    align-items: center;
}`;

function CssBlogEp2() {
  return (
    <div className="blog-content-container">
      <div className="blog-content">
        <div className="text-header">
          #CSS Trick: วิธีจัด Element ไว้ตรงกลางของหน้าจอเว็บไซต์
        </div>

        <div className="text-content">
          ผมจะมี html code ตั้งต้นเพื่อใช้กับแต่ละวิธีนะครับ ตามด้านล่างนี้เลย
        </div>
        <div class="text-content">
          <Code code={htmlDivOriginal} language="html" />
        </div>

        <div class="text-content">
          <Code code={cssOriginal} language="css" />
        </div>

        <div class="text-content">ผลลัพท์ในตอนแรก</div>

        <div class="text-content">
          <div class="center-element"><span>HelloWorld</span></div>
        </div>

        <div class="text-content">ผลลัพท์ที่คาดหวัง</div>

        <div class="text-content">
          <div class="center-element-center"><span>HelloWorld</span></div>
        </div>

        <div class="text-content">
          จะสังเหตุว่าคำว่า HelloWorld นั้น มี "ผลลัพท์ในตอนแรก"
          แสดงอยู่ที่มุมบนซ้ายของกล่อง แล้วถ้าเราอยากจะให้
          ย้ายมาอยู่ตรงกลางของกล่องแบบ "ผลลัพท์ที่คาดหวัง" จะต้องทำอย่างไร
          มีวิธีอยู่หลายวิธีครับ มาติดตามกันเลย
        </div>

        
        <div className="text-topic">1. ใช้ display:flex</div>
        <div class="text-content">
          <Code code={cssFlex} language="css" />
        </div>

        <div class="text-content">
          <div>- กำหนด css ของกล่องให้เป็น display:flex</div>
          <div>
            - ใช้ justify-content ให้เป็น center
            เพื่อกำหนดให้อยู่ตรงกลางในแนวนอน
          </div>
          <div>
            - ใช้ align-items เป็น center เพื่อกำหนดให้อยู่ตรงกลางในแนวตั้ง
          </div>
        </div>

        <div className="text-topic">2. </div>

        
      </div>
    </div>
  );
}

export default CssBlogEp2;
