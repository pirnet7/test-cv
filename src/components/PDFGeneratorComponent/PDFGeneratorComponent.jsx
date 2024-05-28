import { saveAs } from "file-saver";
import examplePdf from "./CV-Bruno.pdf";

const PDFGenerator = () => {
  const downloadPDF = () => {
    fetch(examplePdf)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "CV-Bruno.pdf");
      })
      .catch((error) => {
        console.error("Error fetching the PDF:", error);
      });
  };

  return (
    <>
      <a onClick={downloadPDF} className="nav-link">
        Download PDF
      </a>
    </>
  );
};

export default PDFGenerator;
