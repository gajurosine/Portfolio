import React from 'react';
import resumePdf from '../../CV/resume-1.pdf'; 

function RESUME() {
  return (
    <div className='resume-content'>
      <div className='resume'>
        <div className='resume-dev'>
          <h1 className='years'>4+ Years of Experience</h1>
          <p className='para-exp'>My RESUME</p>

          {/* ✅ Embedded PDF viewer */}
          <iframe
            src={resumePdf}
            className="resume-iframe"
            title="Rosine Resume"
            width="100%"
            height="600px"
          ></iframe>

          {/* ✅ Optional Download Button */}
          <a href={resumePdf} download className="download-btn">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default RESUME;
