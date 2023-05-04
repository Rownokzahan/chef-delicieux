import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        marginBottom: 16
    },

    header: {
        marginBottom: 8,
        marginHorizontal: 12
    },

    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PdfFile = () => {
    return <Document>
        <Page style={styles.body}>
            <Text style={styles.header} fixed>Differences between Uncontrolled and Controlled Components</Text>
            <Text style={styles.text}>
                Controlled components are those whose value is controlled by React, while uncontrolled components manage their own state. This difference can have a significant impact on how you structure your components and manage data flow within your application.
            </Text>

            <Text style={styles.header} fixed>How to Validate React Props using PropTypes</Text>
            <Text style={styles.text}>
                When building React components, it&apos;s important to validate the props being passed to them. PropTypes is a library that allows you to specify the type and shape of the props your component expects. This not only helps catch errors early on in development, but also makes your code more readable and maintainable.
            </Text>

            <Text style={styles.header} fixed>Difference between Node.js and Express.js</Text>
            <Text style={styles.text}>
                Node.js and Express.js are both popular frameworks for building web applications using JavaScript. While Node.js is a runtime environment that allows you to run JavaScript outside of the browser, Express.js is a web application framework built on top of Node.js. Understanding the differences between these two technologies can help you decide which one to use for your next project.
            </Text>

            <Text style={styles.header} fixed>What is a Custom Hook, and Why Will You Create a Custom Hook?</Text>
            <Text style={styles.text}>
                Custom hooks are a powerful feature of React that allow you to reuse logic across multiple components. They are functions that use React&apos;s built-in hooks, such as useState or useEffect, to encapsulate complex logic into a single, reusable hook. Creating custom hooks can help simplify your code and make it more modular, allowing you to focus on building the best user experience possible.
            </Text>

            <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                    `${pageNumber} / ${totalPages}`
                }
            />
        </Page>
    </Document>
};

export default PdfFile;