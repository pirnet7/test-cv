import {
  Document,
  Page,
  View,
  Image,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";

import img1 from "../../assets/cv/cv-website1.png";
import img2 from "../../assets/cv/cv-website2.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

const PDFGenerator = () => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.imageContainer}>
          <Image src={img1} style={styles.image} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.imageContainer}>
          <Image src={img2} style={styles.image} />
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <BlobProvider document={<MyDocument />}>
        {({ blob, url, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;

          return (
            <div>
              <a href={url} download="CV-Bruno">
                Download PDF
              </a>
            </div>
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default PDFGenerator;
