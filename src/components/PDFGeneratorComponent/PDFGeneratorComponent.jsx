import { saveAs } from "file-saver";
import examplePdf from "./cv.pdf"; // Dein vordefiniertes PDF

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
      <a onClick={downloadPDF}>Download PDF</a>
    </>
  );
};

export default PDFGenerator;
