import jsPDF from "jspdf";

const CertificateGenerator = ({ userName }) => {
  const generateCertificate = () => {
    const doc = new jsPDF("landscape");

    doc.setFillColor(10, 10, 10);
    doc.rect(0, 0, 300, 220, "F");

    doc.setTextColor(255, 255, 255);

    doc.setFontSize(28);

    doc.text(
      "Trading Foundations Certificate",
      105,
      40
    );

    doc.setFontSize(18);

    doc.text(
      "Awarded to",
      140,
      70
    );

    doc.setFontSize(26);

    doc.text(
      userName || "Trader",
      125,
      95
    );

    doc.setFontSize(16);

    doc.text(
      "For successfully completing the Trading Academy",
      75,
      130
    );

    doc.text(
      `Completion Date: ${new Date().toLocaleDateString()}`,
      100,
      160
    );

    doc.save("Trading-Certificate.pdf");
  };

  return (
    <button
      onClick={generateCertificate}
      className="px-8 py-4 bg-green-600 rounded-2xl font-semibold"
    >
      Download Certificate
    </button>
  );
};

export default CertificateGenerator;