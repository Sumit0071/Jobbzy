import swaggerJSDoc from "swagger-jsdoc";
const swaggerDefinition = {
    openapi: "3.1.1",
    info: {
        title: "JobAPI",
        version: "1.0.0",
        description: "Job listing and handlin api description"
    },
};


const options = {
    swaggerDefinition,
    apis: ['./routes/*js']
};

const swaggerSpec = swaggerJSDoc( options );
export default swaggerSpec;