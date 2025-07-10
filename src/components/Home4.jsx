import React from 'react';
import { useNavigate } from 'react-router-dom';



const Home4 = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <p>Page 4</p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="page-button" onClick={() => navigate('/home3')}> ⬅️ </button>
        <button className="page-button" onClick={() => navigate('/home5')}>➡️</button>
      </div>
      <h1 className="title-box">NPK Sensor Overview</h1>

      <section>
        <h2>1.1 Product Overview</h2>
        <p>
          The soil nitrogen phosphorus potassium index sensor is suitable for detecting the nitrogen phosphorus potassium index in the soil, and the fertility of the soil is judged by detecting the nitrogen phosphorus potassium index in the soil, thus facilitating the evaluation of the soil situation by the customer system..
        </p>
      </section>

      <section>
        <h2>1.2 Scope of Application</h2>
        <p>
          Widely used in paddy fields, greenhouse cultivation, rice, vegetable cultivation, orchard nursery, flowers and soil research. 
        </p>
      </section>

      <section>
        <h2>1.3 Measurement Parameters</h2>

        <table className="report-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Technical Indicator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Measurement Range</td>
              <td>0 - 1999 (NPK index)</td>
            </tr>
            <tr>
              <td>Resolution</td>
              <td>1 (NPK index)</td>
            </tr>
            <tr>
              <td>Response Time (T90)</td>
              <td>Less than 10s</td>
            </tr>
            <tr>
              <td>Working Temperature</td>
              <td>5°C to 45°C</td>
            </tr>
            <tr>
              <td>Working Humidity</td>
              <td>5% to 95% RH, no condensation</td>
            </tr>
            <tr>
              <td>Baud Rate</td>
              <td>2400 / 4800 / 9600</td>
            </tr>
            <tr>
              <td>Communication Port</td>
              <td>RS485</td>
            </tr>
            <tr>
              <td>Power Supply</td>
              <td>12V - 24V DC</td>
            </tr>
          </tbody>
        </table>
        <p><em>* The NPK index can be equivalently regarded as mg/kg under the normal soil standard conditions (black soil or loess, natural environment, non-saline and alkali), and the same as the following</em></p>
      </section>


        <h2>1.4 Measurement Parameters</h2>
            <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392706817595019385/Picture1.png?ex=687082cc&is=686f314c&hm=26b4076ce963bce250b035b386641bcae3e0b1fd4d8392a6555d4399524d81b3&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>

        <h2>1.5 Measurement Parameters</h2>
            <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392706817200750714/Picture2.png?ex=687082cc&is=686f314c&hm=f9b73ad0de9f3bba9f64d12ccd2b0212e063401829cfa4d3906f6c97ed5500c5&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>


      <section>
        <h2>1.6 Interface Description</h2>
        <p>
          Power interface for wide voltage power supply 12-24V can be. When wiring 485 signal lines, pay attention to the fact that the/B lines cannot be connected in reverse, and the addresses of multiple devices on the bus cannot conflict.
        </p>
        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392706816831524896/Picture3.png?ex=687082cc&is=686f314c&hm=4cae1561cd1c0521fbd1a383056e6db8a62813fdcf4aa4e58d669f38b4c4d364&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>


        <h4>Wire Color Descriptions</h4>
        <table className="report-table">
          <thead>
            <tr>
              <th>Line Color</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brown</td>
              <td>Power supply positive (12–24V DC)</td>
            </tr>
            <tr>
              <td>Black</td>
              <td>Power supply negative</td>
            </tr>
            <tr>
              <td>Yellow / Gray</td>
              <td>RS485-A</td>
            </tr>
            <tr>
              <td>Blue</td>
              <td>RS485-B</td>
            </tr>
          </tbody>
        </table>
        <p><em>
          <strong> Note:</strong> Note: Please be careful not to connect the wrong line sequence, the wrong wiring will cause the equipment to burn. 
          <p>The factory provides 1.25 m long wire by default, and customers can extend the wire or wire sequentially as needed. 
            Note that there is no yellow line in the line sequence that may be provided in some factory batches. At this time, the gray line is equivalent to replacing the yellow line. 
            </p>
          </em>
        </p>
      </section>

      <section>

        <h2>1.7 Surface Measurement Method</h2>
        <ul>
            <p>Select a suitable measurement location, avoid stones, ensure that the steel needle will not touch hard objects, throw away the topsoil according to the required measurement depth, maintain the original tightness of the soil below, hold the sensor vertically and insert it into the soil, and do not shake left and right during insertion. 
                It is recommended to measure and average multiple times within a small range of a measurement point. </p>

        </ul>

        <h2>1.8 Buried Measurement Method </h2>
        <ul>
            <p>Dig a pit with a diameter of more than 20cm vertically, insert the sensor steel needle horizontally into the pit wall at a given depth, and fill the pit tightly. After a period of stability, continuous measurement and recording can be carried out for several days, months or even longer</p>
        </ul>
      </section>

      <section>
        <h2>1.9 Precautions</h2>
        <ul>
            <ul>
            <li>All steel needles must be inserted into the soil during measurement.</li>
            <li>Avoid strong sunlight directly on the sensor and cause the temperature to be too high. Use in the field and pay attention to lightning protection</li>
            <li>Do not bend the steel needle violently, do not pull the sensor lead wire with force, and do not beat or hit the sensor violently. </li>
            <li> Sensor protection grade IP68, sensor can be entirely  in the water. </li>
            <li> Due to the presence of radio frequency electromagnetic radiation in the air, it should not be in the air for a long time in the state of power</li>
            </ul>
        </ul>
      </section>
    </div>
  );
};

export default Home4;
