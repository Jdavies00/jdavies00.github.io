import React from 'react';
import ReactPDF from "./Pdf"
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function AboutMe() {

  

  return (
    <div>
     <ReactPDF />
    </div>
  );
}
export default AboutMe;