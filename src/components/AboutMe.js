import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
//  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function AboutMe() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <div>
      <Document
        file="/public/Resume/JAnthonyDaves.pdf"
        // onLoadSuccess={onDocumentLoadSuccess}
      >
        {/* <Page pageNumber={pageNumber} /> */}
      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p> */}
    </div>
  );
}
export default AboutMe;