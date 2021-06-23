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
    height: 100px;
    background-color: #f5f5f5;
    border: 1px solid black;

    // code ที่เพิ่มเข้ามา
    display: flex;
    justify-content: center;
    align-items: center;
}`;

const cssPaddingWithTextAlign = `.center-element {
  // height: 100px;
  background-color: #f5f5f5;
  border: 1px solid black;

  // code ที่เพิ่มเข้ามา
  padding: 50px 0px;
  text-align:center;
}`;

const cssPositionWithRranslate = `.center-element {
  height: 100px;
  background-color: #f5f5f5;
  border: 1px solid black;

  // code ที่เพิ่มเข้ามา
  position:relative;
}
.center-element > span {
  // code ที่เพิ่มเข้ามา
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
          <div class="mb-10">- กำหนด css ของกล่องให้เป็น display:flex</div>
          <div class="mb-10"> 
            - ใช้ justify-content ให้เป็น center
            เพื่อกำหนดให้อยู่ตรงกลางในแนวนอน
          </div>
          <div>
            - ใช้ align-items เป็น center เพื่อกำหนดให้อยู่ตรงกลางในแนวตั้ง
          </div>
        </div>

        <div className="text-topic">2. ใช้ padding คู่กับ text-align</div>
        <div class="text-content">
          <Code code={cssPaddingWithTextAlign} language="css" />
        </div>
        <div class="text-content">
          <div class="mb-10">
            - comment height ของกล่องออกไปก่อน
          </div>
          <div class="mb-10">
           - กำหนด padding ด้านบน-ล่าง เท่ากับ 50px และ ซ้าย-ขวา เท่ากับ 0px เพื่อให้คำอยู่ตรงกลางในแนวตั้ง **แต่คำยังชิดซ้ายในแนวนอนอยู่**
          </div>
          <div>
            - ใช้ text-align เท่ากับ center เข้ามาช่วยให้คำอยู่ตรงกลางในแนวนอน
          </div>
        </div>

        <div className="text-topic">3. ใช้ position คู่กับ transform</div>
        <div class="text-content">
          <Code code={cssPositionWithRranslate} language="css" />
        </div>

        <div class="text-content pb-50">
          <div class="mb-10">
            - สำหรับ class center-element ให้กำหนด position เท่ากับ relative
          </div>
          <div class="mb-10">
           - สำหรับ span ที่อยู่ใน class center-element ในที่นี้หมายถึงคำว่า HelloWorld ให้กำหนด position เท่ากับ absolute เพื่อให้มันสามารถย้ายตำแหน่งโลดแล่นไปตรงไหนก็ได้ภายในกล่อง (scope ที่ถูกกำหนดโดยใช้ position: relative)
          
          
          </div>
          
          <div class="mb-10">
          - กำหนด top และ left เท่ากับ 50% ผลลัพท์จะสังเหตุว่าย้ายตำแหน่งแล้วแต่ก็ยังไม่ใช่กึ่งกลาง เหตุเพราะตัวคำว่า Helloworld ก็มีความยาวและความสูง
          </div>

          <div>
          - ดังนั้นจึงต้องกำหนด transform  เท่ากับ translate เพื่อเลื่อนตำแหน่ง มีค่าเท่ากับ (-50%) อันแรกคือเลื่อนไปทางซ้าย(แกน x) (-50%) และอันต่อมาคือ เลื่อนขึ้นข้างบน(แกน y) 50% 
          </div>
        </div>

        <div class="text-content pb-50">
          <strong>ข้อมูลอ้างอิงจาก:</strong> https://www.w3schools.com/
        </div>
        
      </div>
    </div>
  );
}

export default CssBlogEp2;
