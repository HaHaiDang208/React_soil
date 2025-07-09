import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home2 = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <p>Page 2</p>
        <div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button className="page-button" onClick={() => navigate('/')}>Go to Page 1</button>
              <button className="page-button" onClick={() => navigate('/home3')}>Go to Page 3</button>
            </div>
            <h1 className="title-box">NPK Analysis Report</h1>
        </div>
     
      <section>
        
        <p>
          Determining the levels of nitrogen (N), phosphorus (P), and potassium (K) in soil is vital for optimizing
          agricultural productivity and minimizing environmental impact. This report explores five key methods for NPK
          detection: laboratory-based chemical analysis, ion-selective electrodes (ISEs), conductivity/impedance-based
          sensors (e.g., JXCT), near-infrared spectroscopy (NIRS), and remote sensing.
        </p>
      </section>

      <section>
        <h2>2. Detailed Comparison of NPK Measurement Methods</h2>

        <h3>2.1 Laboratory-Based Chemical Analysis</h3>
        <p>
          
          <strong>Principle of the lab-based method is comprised of separate and distinct elements measurements:</strong><br />
          <ul>
            <li><strong>Nitrogen: Kjeldahl digestion (total N).</strong><br /></li>
            <img src="https://cdn1.byjus.com/wp-content/uploads/2021/03/Kjeldahl-Method1.png" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>
            <ul>
                <li>Digestion:</li>
                
                <ul>
                    <li>The soil sample is digested with concentrated sulfuric acid (H₂SO₄) and a catalyst (often selenium or copper).</li>
                    <li>Organic nitrogen compounds are converted to ammonium sulfate [(NH₄)₂SO₄].</li>
                </ul>
                <li>Neutralization and Distillation:</li>
                <ul>
                    <li>After digestion, the solution is neutralized with sodium hydroxide (NaOH), converting ammonium to ammonia gas (NH₃).</li>
                    <li>Ammonia is distilled and captured in a boric acid solution</li>
                </ul>
            </ul>
            <img src="https://www.mdpi.com/agronomy/agronomy-12-02907/article_deploy/html/images/agronomy-12-02907-g005.png" 
                    alt="Soil" className="centered-img-block" 
                    style={{ width: "500px", height: "300px" }}/>
            
            <h4>⇒ The result is a reliable measurement for total nitrogen in organic and inorganic forms with a wide range of Application not only to soils but also manures, plant tissue, and food… And therefore this method still remains as a benchmark in agronomic research and regulation.</h4>
          </ul>
        </p>

        <ul>
          <li>
            For Phosphorous and Potassium: Mehlich-3 Method is considered the most versatile and comprehensive method for estimating plant-available phosphorus (P) and Potassium (K) as well as other nutrients such as Calcium (Ca), Magnesium (Mg), Sodium (Na), Sulfur (S) and other micronutrients: Zinc (Zn), Copper (Cu), Manganese (Mn), Iron (Fe)
          </li><br />
          <ul>
            <li>
                Soil Suitability: Well-suited for routine soil testing laboratories, especially when analyzing multiple nutrients at once and Works across a broad range of soil types and pH levels
            </li>
          </ul>
        </ul>
        <h3>
            <li>
            The process of extracting needed measurements includes:
            </li>
        </h3>
        <h4> Extractant Composition:</h4>
        <h4> Mehlich-3 uses a complex mixture of acids, salts, and chelating agents to simulate the nutrient uptake capacity of plant roots:</h4>
        <table className="report-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0.2 M Acetic Acid</td>
              <td>Weak acid that releases exchangeable nutrients</td>
            </tr>
            <tr>
              <td>0.25 M NH₄NO₃ (Ammonium Nitrate)</td>
              <td>Replaces cations like K⁺, Ca²⁺, Mg²⁺ on exchange sites</td>
            </tr>
            <tr>
              <td>0.015 M NH₄F (Ammonium Fluoride)</td>
              <td>Releases phosphorus bound to aluminum and iron oxides</td>
            </tr>
            <tr>
              <td>0.013 M HNO₃ (Nitric Acid)</td>
              <td>Increases extraction strength (acidifies)</td>
            </tr>
            <tr>
              <td>0.001 M EDTA</td>
              <td>Chelates micronutrients (Zn, Cu, Fe, Mn) for extraction</td>
            </tr>
          </tbody>
        </table>

        <h3>Extraction Steps</h3>
        <ul>
            <h4>1.Sample Preparation:</h4>
            <ul>
                <li>Soil is air-dried and sieved (&lt; 2 mm)</li>
            </ul>
            <h4>2.Soil-to-Solution Ratio:</h4>
            <ul>
                <li>Typically 1:10 (e.g., 2.5 g of soil with 25 mL of Mehlich-3 extractant)</li>
            </ul>
            <h4>3.Shaking:</h4>
            <ul>
                <li>Mixture is shaken for 5 minutes to ensure contact between soil particles and the extractant.</li>
            </ul>
            <h4>4.Filtration:</h4>
            <ul>
                <li>The solution is filtered to remove solids.</li>
            </ul>
            <h4>5.Analysis:</h4>
            <ul>
                <li>The filtered extract is analyzed using ICP-OES (Inductively Coupled Plasma Optical Emission Spectroscopy) or colorimetry, especially for P.</li>
            </ul>
            
        </ul>
        <h4>
            <li>
                ⇒ The Mehlich-3 method is a modern, universal extraction technique that offers a practical, cost-effective solution for assessing available phosphorus and other nutrients in soils across various agricultural landscape. Its broad pH compatibility, multi-nutrient coverage, and high efficiency make it especially valuable for precision agriculture, soil fertility management, and large-scale agronomic studies.
            </li>
        </h4>
        <img src="https://www.mdpi.com/agronomy/agronomy-12-02907/article_deploy/html/images/agronomy-12-02907-g005.png" 
                    alt="Soil" className="centered-img-block" 
                    style={{ width: "500px", height: "300px" }}/>

        <h4>Advantages: </h4>
        <ul>
          <li>High precision and reliability.</li>
          <li>Measures both total and available forms of nutrients.</li>
          <li>Considered the benchmark for calibration and regulatory testing.</li>
        </ul>

        <h4>Limitations: </h4>
        <ul>
          <li>Requires soil sampling, drying, and transportation to the lab.</li>
          <li>Cost per sample can be high.</li>
          <li>Time-consuming process (results take days).</li>
          <li>Limited spatial resolution unless very high sample density is used.</li>
          <li>Not suitable for on-site or rapid field analysis.</li>
          <li>For Mehlich method, ICP-OES machine required for full-spectrum analysis, which may not be available in all labs.</li>
        </ul>

        <h4>Use Cases: </h4>
        <ul>
          <li>Research institutions.</li>
          <li>Soil fertility baseline studies.</li>
          <li>Validation of field-based methods.</li>
        </ul>

        <h3>2.2 Conductivity/Impedance-Based Sensors (e.g., JXCT)</h3>
        <h4>Operating Principle</h4>
        <p>
          Conductivity/impedance-based soil sensors estimate nutrient concentrations by measuring changes in the soil’s electrical properties. These properties include:
        </p>
        <li>Bulk Electrical Conductivity (EC): The ability of soil to conduct electrical current, which is influenced by factors such as water content, ionic concentration (i.e., dissolved nutrients like nitrate, potassium, phosphate), and temperature.</li>
        <li>Dielectric Constant: This represents how well the soil can store electrical energy in an electric field and is also affected by soil moisture and composition.</li>
        <p>When placed in the soil, the sensor applies a known electrical signal and measures the resulting response—either the impedance (resistance to alternating current) or conductivity. The variations in these responses reflect changes in soil chemistry and moisture levels.</p>
        <img src="https://europe1.discourse-cdn.com/arduino/optimized/4X/f/9/e/f9e280b74a705285ac83a4de3b9306e7c69c264b_2_690x398.jpeg" 
                    alt="Soil" className="centered-img-block" 
                    style={{ width: "500px", height: "300px" }}/>
        <h4>Nutrient Estimation via Empirical Models</h4>
        <p>These sensors don’t directly measure nutrient concentrations like nitrate (NO₃⁻), phosphate (PO₄³⁻), or potassium (K⁺). Instead, they use calibrated empirical models—mathematical relationships derived from lab-tested correlations between electrical measurements and known nutrient concentrations.</p>
        <h4>The general workflow:</h4>
        <ul>1. Sensor captures EC/impedance data in real time from the soil.</ul>
        <ul>2. Algorithms or regression models (specific to soil type, crop, and region) convert this data into estimated nutrient levels (N, P, K).</ul>
        <ul>3. The result is a fast, low-cost estimate of soil fertility conditions without the need for chemical reagents</ul>

        <h4>Advantages: </h4>
        <ul>
          <li>Low cost and easy deployment.</li>
          <li>Plug-and-play design, often waterproof and ruggedized.</li>
          <li>In-situ measurement without reagents.</li>
        </ul>

        <h4>Limitations</h4>
        <ul>
          <li>Lower specificity and accuracy than lab methods or ISEs.</li>
          <li>Performance affected by soil type, moisture, and compaction.</li>
          <li>Calibration may drift over time and across locations.</li>
        </ul>

        <h4>Use Cases</h4>
        <ul>
          <li>Routine field monitoring.</li>
          <li>Agricultural extension services.</li>
          <li>Decision support in low-budget operations</li>
        </ul>

        <h3>2.3 Optical Spectroscopy (NIRS, Multispectral, Hyperspectral)</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_blBl6nBUQVKHr9xI1jBHy2TSXErJE23mA&s" 
                    alt="Soil" className="centered-img-block" 
                    style={{ width: "500px", height: "300px" }}/>
        <h4>Principle:</h4>
        <ul>
          <li>Optical analysis refers to methods that examine how electromagnetic radiation (light) interacts with soil or plant materials — typically using reflectance, absorbance, or transmittance properties across specific wavelengths.</li>
          <li>The analysis can be linked to:
                <ul>
                    <li>Molecular bonds (e.g., N–H, C–H, O–H)</li>
                    <li>Spectral fingerprints of specific compounds</li>
                    <li>Physiological or biochemical changes associated with nutrient levels</li>
                </ul>
          </li>

          <li>
            <table className="report-table">
                <thead>
                    <tr>
                    <th>VIS (400–700nm)</th>
                    <th>NIR (700–1000nm)</th>
                    <th>SWIR (1000–2500nm)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>RGB/multispectral</td>
                        <td>NIRS + multi </td>
                        <td>Hyperspectral </td>
                    </tr>
                </tbody>
            </table>
          </li>
        </ul>

        <h4>Optical Techniques Overview</h4>
        <table className="report-table">
          <thead>
            <tr>
              <th>Technique</th>
              <th>Spectral Basis</th>
              <th>What It Measures</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NIRS (Near-Infrared Spectroscopy)</td>
              <td>700–2500 nm</td>
              <td>Absorption by chemical bonds</td>
              <td>Direct nutrient quantification in soil/tissue</td>
            </tr>
            <tr>
              <td>Multispectral Imaging</td>
              <td>3–10 discrete bands (e.g. RGB, NIR)</td>
              <td>Reflectance patterns</td>
              <td>Crop health, indirect signs of nutrient status</td>
            </tr>
            <tr>
              <td>Hyperspectral Imaging</td>
              <td>100–300+ continuous bands</td>
              <td>Fine spectral resolution</td>
              <td>High-precision mapping of nutrients, stress, composition</td>
            </tr>
            <tr>
              <td>VIS/NIR Spectroscopy</td>
              <td>400–1000 nm</td>
              <td>Vegetation indices, pigment analysis</td>
              <td>Plant stress, N deficiency detection</td>
            </tr>
          </tbody>
        </table>

        <h4>How It Works (Conceptually)</h4>
        <ul>
            <h4>
          <ul>1. Light Source (natural sunlight or artificial) shines on soil or plant.</ul>
          <ul>2. Sensor captures how light is absorbed or reflected at different wavelengths.</ul>
          <ul>3. These signals are processed into:
            <li>Spectral curves</li>
            <li>Indices (e.g., NDVI, Red Edge)</li>
            <li>Chemical estimation models (e.g., via chemometrics)</li>
          </ul>
          </h4>
          <h3>While optical methods do not directly "see" the atoms or ions (like P, K, or N), they measure spectral signatures related to the chemical or physical forms those elements are typically bound in — such as organic matter, ammonium compounds, or nutrient-induced physiological changes.</h3>
        </ul>

        <h4>Advantages: </h4>
        <ul>
          <li>Rapid and non-destructive.</li>
          <li>Capable of analyzing multiple parameters (moisture, organic matter, NPK).</li>
          <li>Handheld portable devices available.</li>
        </ul>

        <h4>Limitations: </h4>
        <ul>
          <li>Needs calibration dataset</li>
          <li>Soil color, texture, moisture can distort accuracy</li>
        </ul>

        <h4>Use Cases: </h4>
        <ul>
          <li>High-throughput soil scanning</li>
          <li>Integration into smart farming platforms.</li>
          <li>Remote site analysis with mobile labs.</li>
        </ul>
      </section>


    </div>
  );
};

export default Home2;
