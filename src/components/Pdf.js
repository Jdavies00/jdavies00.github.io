import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container, Row, Col } from "reactstrap"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    
    <div className="pdfbackground">
      <Container>
        <Col>
          <Row>
            <Document className="resume"
              file="Resume/ResumeForSite.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
           </Row>
         </Col>
      </Container>
    </div>
    
  );
}
export default ResumePdf