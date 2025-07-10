import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  return (
    
    
    <div className="container">
        <div>
          <p>Page 1</p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="page-button" onClick={() => navigate('/home4')}>⬅️</button>
        <button className="page-button" onClick={() => navigate('/home2')}>➡️</button>
      </div>
          <h1 className="title-box">Soil Measurement and Analysis</h1>
        </div>

      <section>
        <h2>I. Introduction</h2>
        <p>
          Fertilizer supplements have been a great challenge in the Vietnamese farming industry from the very start of their ancestors.
          “Nhất nước, nhi phân, tam cần, tứ giống” - Fertilizer is the second most important aspect in Vietnamese Farming.
          And as so, some are willing to add at least enough chemical fertilizer to increase yield, regardless of knowing the nutrient value of the soil.
          This mindset, though satisfying the goal of higher yields, poses a threat to environmental sustainability and cost-effectiveness.
        </p>
        <p>
          As technology evolves, there must be a solution to this problem with accuracy and cost-effectiveness!
        </p>
      </section>

      <section>
        <h2>II. Purpose</h2>
        <p>
          The purpose of this project is to determine the optimal amount of fertilizer (NPK - Nitrogen, Phosphorus, Potassium), pH treatment,
          and water needed for different sections of a field by using GPS-based data. By accurately measuring soil nutrients,
          farmers can improve fertilization efficiency, reduce nutrition loss, and save time.
        </p>
        <p>
          Furthermore, nutrient data will be uploaded to the cloud for analysis. AI-powered predictions will help identify potential nutrient deficiencies
          for each crop, providing farmers with precise recommendations on fertilizer application and soil treatment.
          This approach optimizes plant growth while minimizing unnecessary costs, leading to smarter, more sustainable farming.
        </p>
      </section>

      <section>
        <h2>III. Key Features</h2>
        <h3>
            The system will generate nutrient heat maps that visually indicate areas of deficiency, allowing farmers to take immediate action. Over time, the AI model will continuously improve based on the field’s collected data, making predictions even more accurate.
        </h3>
        <ul>
          <li>Nutrient heat maps that visually indicate deficiency areas for immediate action.</li>
          <li>IoT Integration: ESP32-based system with NPK, pH, and moisture sensors.</li>
          <li>Cloud Computing: Data uploaded for remote access and historical tracking.</li>
          <li>AI & Machine Learning: Cluster land zones and provide tailored fertilizer suggestions.</li>
          <li>GPS Mapping: Precisely map soil nutrient levels to target areas needing treatment.</li>
          <li>Cost Efficiency: Reduces fertilizer waste, lowering costs.</li>
          <li>Sustainability: Prevents over-fertilization, minimizing environmental impact.</li>
        </ul>
      </section>

      <section>
        <h2>IV. Implementation</h2>

        <h3>1. At the Testing Site (Field)</h3>
        <ul>
            <ul>
          <h4>1. Start Testing Session</h4>
          <li>Insert the NPK, pH, and moisture sensors into the soil.</li>
          <li>Capture GPS coordinates.</li>
          <li>Collect real-time soil data.</li>
          </ul>
          <ul>
          <h4>2.Save Data (Press an onboard Button)</h4>
          <li>Store soil nutrition results in memory.</li>
          <li>Attempt to send HTTP request to save data to cloud or locally if sending failed</li>
          <li>Increment count for data points collected.</li>
          </ul>
          <ul>
          <h4>3.End Testing Session (Turn off the power of ESP32)</h4>
          <li>The operating code for ESP32 will be in the flash card even if the power provided is off.</li>
          </ul>
        </ul>

        <h3>2. At the Cloud (Processing Center)</h3>
        <ul>
            <ul>
          <h4>1.Calculate the area of the uploaded Test Session</h4>
          <li>Define the field boundary using GPS points.</li>
          <li>Estimate total land coverage for analysis.</li>
          </ul>
          <ul>
          <h4>2.Generate a Nutrient Deficiency Map</h4>
          <li>Process NPK, pH, and moisture data.</li>
          <li>Identify areas lacking key nutrients.</li>
          </ul>
          <ul>
          <h4>3.AI Analysis & Land Grouping</h4>
          <li>Cluster regions with similar nutrient deficiencies.</li>
          <li>Recommend the optimal fertilizer type and quantity for each group.</li>
          </ul>
          <ul>
          <h4>4.Generate Fertilizer Supplement Map</h4>
          <li>Output a visual map showing fertilizer recommendations per land zone.</li>
          </ul>
        </ul>

        <h3>3. At the Web Dashboard</h3>
        <ul>
            <ul>
          <h4>1.View Test History & Results</h4>
          <li>Access past testing sessions and soil data logs.</li>
          </ul>
          <ul>
          <h4>2.Visualize the Nutrient Deficiency Map</h4>
          <li>Interactive map highlighting soil conditions.</li>
          <li>Color-coded nutrient levels & treatment suggestions with fertilizer type and quantity.</li>
          </ul>
        </ul>
      </section>

      <section>
        <h2>V. Hardwares</h2>

        <h4>1. Microcontroller and Sensor</h4>
        <ul>
          <li>Microcontroller connected to Wifi: ESP32</li>
          <li>NPK and PH sensor (12 to 24 V power) - output: RS485</li>
          <li>RS-485 transceiver module that converts a UART serial stream to RS-485 (Microcontroller to NPK + PH sensor)</li>
          <li>Soil Moisture sensor</li>
        </ul>

        <h4>2. Power and Connection</h4>
        <ul>
          <li>Boost Converter (MT3608, XL6009, or similar): Convert 5V power from power bank to 12V for NPK sensor</li>
          <li>Electric lines to connect components</li>
          <li>Onboard "voltmeter” to adjust and keep track of the Volt converter</li>
        </ul>
      </section>

      <section>
        <h2>IV. Software</h2>

        <p>placeholder for software section </p>
        <img src="https://cdn.discordapp.com/attachments/1318416746968776755/1392395265083838534/placeholderImg.jpg?ex=686f60a4&is=686e0f24&hm=5970afc0432f51f160ebd6a998daa637795c70d9f28fd6b75706b2915b68ac28&" 
        alt="React Badge"
        style={{ width: "300px", height: "200px" }}
         />


      </section>

    </div>
  );
};

export default Home;
