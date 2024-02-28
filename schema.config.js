require("dotenv").config();
const schemaConfig = {
  defaultDatabase: 'mysql',
  databases: {
    postgres: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: '123456',
      database: 'testing'
    },
    mysql: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '123456',
      database: 'schema_builder'
    },
    sqlite: { database: './schema_builder.db' }
  },
  skipColumns: [ 'created_at', 'updated_at', 'deleted_at' ],
  validationSchemaType: 'joi',
  openApiConfig:{
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Swagger Faqstore",
        "description": "A sample API that uses a faqstore as an example to demonstrate features in the OpenAPI 3.0 specification",
        "termsOfService": "http://swagger.io/terms/",
        "contact": {
            "name": "Swagger API Team",
            "email": "apiteam@swagger.io",
            "url": "http://swagger.io"
        },
        "license": {
            "name": "Apache 2.0",
            "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
        }
    },
    "servers": [
        {
            "url": "http://localhost/api",
            "description": "The production API server",
            "variables": {
                "port": {
                  "enum": [
                    "8000",
                    "3000"
                  ],
                  "default": "8000"
                },
                "basePath": {
                    "enum":[
                        "v1",
                        "v2"
                    ],
                  "default": "v1"
                }
              }
            
        }
    ]
}
};
module.exports = schemaConfig;