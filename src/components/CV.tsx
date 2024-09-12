import { Page, Text, View, Document, StyleSheet, renderToBuffer } from '@react-pdf/renderer';
import type { PersonalData } from 'src/data/personal';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 16,
    backgroundColor: '#fff',
    spacing: 10,
    padding: 10,
  },
  header: {
    fontSize: 18,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheader: {
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export function CV(props: PersonalData) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>Gustavo Dantas</Text>
          <Text style={styles.subheader}>test</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>teste</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export async function getBuffer(props: PersonalData) {
  return await renderToBuffer(<CV {...props} />);
}

