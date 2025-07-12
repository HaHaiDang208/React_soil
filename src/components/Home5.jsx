import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home5 = () => {

    const navigate = useNavigate();

  return (
    <div className="container">
        <p>Page 5</p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="page-button" onClick={() => navigate('/home4')}> ⬅️ </button>
        <button className="page-button" onClick={() => navigate('/home6')}>➡️</button>
      </div>
      <h1 className="title-box">Soil Moisture Sensor Report</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          An internet search today turns up thousands of options for measuring soil moisture — from analog dial-based devices
          to sophisticated electronic sensors. The abundance of options can be overwhelming when simply trying to identify which
          sensor provides reliable, accurate, and publishable data.
        </p>
      </section>

      <section>
        <h2>Project Objective</h2>
        <p>
          The goal is to develop a reliable and cost-effective soil moisture monitoring system for field use — especially for
          agricultural settings like coffee farms during dry seasons. A key component is an <strong>in-situ soil moisture sensor</strong>
          that reflects real changes in volumetric water content (VWC) under field conditions.
        </p>
        <p>
          After evaluating several sensing technologies, <strong>capacitance-based sensors</strong> were selected over resistance-based
          ones due to their superior accuracy, scientific validity, and robustness.
        </p>
      </section>

      <section>
        <h2>I. Resistance Moisture Sensor</h2>
        <p>
          A resistance moisture sensor measures the soil water content percentage by creating a voltage difference across two electrodes, allowing a small amount of current to flow between them and outputting a value of resistance or electrical conductivity.
        </p>
        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392714626361458819/Picture1.png?ex=68708a12&is=686f3892&hm=4d42343593764acbff3c3b3e0188aaa9562f4b0db041f64afea1946ba52470fa&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>
        <p>
          Since water is a very poor conductor, it is the ions in the water that carry the current from one electrode to the other. In theory, the idea is a good one; it makes sense that the resistance will go down as the amount of water in soil increases. However, in practice, there are challenges associated with the assumptions behind this method.
        </p>
        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392714626025787563/Picture2.png?ex=68708a12&is=686f3892&hm=6b8fc7a0f9c3fd74c942853fde18a4bb45b3b79a7462349a3be7d297cbda37a4&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>

        <p>For the resistance method to work, one critical assumption is that the number of ions in the soil remains relatively constant. If the number of ions in the soil is not constant or we use the sensor in a different soil, accuracy becomes impossible because as the number of ions in the pore water changes, the ability for current to flow is altered, even when the amount of water has not changed.</p>
        <p>For a sensor to be used for more than wet/dry measurements, it needs to have a calibration that relates the sensor output (in this case, its resistance or its simple inverse: electrical conductivity) to volumetric water content.</p>
        
        <img src="https://media.discordapp.net/attachments/1302584762078203998/1392714625690112050/Picture3.png?ex=68708a12&is=686f3892&hm=e517db2da8712a03d724ed03929eda70efd054a424291c1d7b217084a6229ecb&=&format=webp&quality=lossless&width=1522&height=856" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>

        <p>Figure above is a simple model of saturation extract electrical conductivity (the electrical conductivity of water after it’s pulled out of a saturated soil). It shows that the sensor calibration can change more than an order of magnitude.</p>
        <p>So, although resistance sensors are inexpensive, react to changes in water content, and are simple to integrate into DIY projects, their only real use is for home gardening and science fair projects. In any scientific pursuit, they simply can’t produce reliable volumetric water content measurements.</p>
        
        
        <h4>Comparison of Sensor Types</h4>
        <table className="report-table">
          <thead>
            <tr>
              <th>Sensor Type</th>
              <th>Measurement Principle</th>
              <th>Sensitivity to Water Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resistance</td>
              <td>Electrical conductivity of ions</td>
              <td>Affected by salt, not just water</td>
            </tr>
            <tr>
              <td>Capacitance</td>
              <td>Dielectric permittivity of water</td>
              <td>Responds directly to water volume</td>
            </tr>
          </tbody>
        </table>
      </section>
        <p>Resistance sensors measure how easily electrical current passes between two probes, which is highly dependent on ion concentration (salinity), not just moisture. This leads to inaccurate or unstable readings in different soil types or fertilized plots</p>
      <section>
        <h2>II. Capacitance Sensor (Dielectric Measurement)</h2>
        <p>
          Dielectric sensors (TDR, FDR, capacitance types),, on the other hand, are a general category of sensors that measure the charge-storing capacity of the soil. This charge-storage approach is much more effective than a resistance approach and correlates strongly with actual water content (VWC).
        </p>
        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392714625325465600/Picture4.png?ex=68708a12&is=686f3892&hm=96d71cfcf4bc17f6bba95a02ef07e095dfc748aa1164f570cdf0ff252cfcae83&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>


        <p>
            The ideal dielectric sensor electrical circuit is one that simply acts to polarize water molecules between two electrodes. The water molecules align in that field very briefly, so it stores a small amount of charge without causing the salt ions to polarize. This ideal measurement is sensitive to changes in the amount of water but not to changes in the amount of salt.
        </p>
        <p>
            Some dielectric measurements act more like the middle circuit diagram, where they incorporate some resistance into the measurement and are somewhat sensitive to changes in salt concentration.  
        </p>

        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392714624889131088/Picture5.png?ex=68708a11&is=686f3891&hm=97faa21ba9ccc9422ddd3e525fbdc553402fbdb199ebde0cd5019fdbd6a6248d&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>

        <p>
          Each material in soil has a unique ability to store electrical charge, referred to as its dielectric constant. The dielectric scale arbitrarily assigns a value of 1 to air and then relates other materials to that value. Soil is a mixture of solids, liquids, and gases. Each of these has a different dielectric, but in general, they all have low dielectric values compared to water. Thus, when the charge-storing capacity of the soil is measured by a dielectric sensor, water and air are the only things that change significantly by volume, so we can relate that to volumetric water content.
        </p>

        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392714624582815844/Picture6.png?ex=68708a11&is=686f3891&hm=9cd2073573c3e17298047025abbb21453f737457dc3a0386be8dd839982e7fd7&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>
        <p>
            Figure above  is the same scale showing volume percentages of different soil mixtures equated to dielectric values with pure water all the way to the right (obviously this would not happen in soil because there would be no minerals). Since minerals are often approximately 50% of the total soil volume, the actual dielectric range of mineral soil is usually between 2 and 30, though that’s just a general rule, and it can change in specific soil situations.
        </p>

        <img src="https://cdn.discordapp.com/attachments/1302584762078203998/1392714624289472512/Picture7.png?ex=68708a11&is=686f3891&hm=34cad4778afcc95864b95b47c2e45ada8742c7694f692db6c15d631dd4713ad6&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>

        <p>
            Figure above is a graph of a relationship between the dielectric of the soil and its volumetric water content. Like resistance, dielectric sensors are not perfect at predicting the volumetric water content. However, with these sensors, things that affect performance do so with a much smaller effect. In this graph with the dielectric on the x-axis and the volumetric water content on the y-axis, note how the difference in soil bulk density affects the calibration. The effect is there, but it’s relatively minor. Bulk density is not the only thing that will change the calibration, things like soil type, salinity, clay percentage, and sensor-to-soil contact can also affect accuracy, among other things. However, many of the high-quality sensors available have developed technology to mitigate most of these challenges. It’s not possible to avoid these issues completely, but it is possible to minimize them
        </p>


      </section>


    </div>
  );
};

export default Home5;
