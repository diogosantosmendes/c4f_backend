define({ "api": [
  {
    "type": "post",
    "url": "/chpass",
    "title": "03) Change password",
    "group": "Authentication",
    "name": "changePassword",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly updated</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "02) Login user",
    "group": "Authentication",
    "name": "userLogin",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>valid email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>must have at least one uppercase letter, one lowercase, one digit and a minimum 8 characters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>jwt valid for 8 hours and must be placed at &quot;Authorization&quot; header</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>user object with attributtes: id, name, email, photo, birthdate and country_code</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/register",
    "title": "01) Register user",
    "group": "Authentication",
    "name": "userRegister",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>valid user email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>must have at least one uppercase letter, one lowercase, one digit and a minimum 8 characters</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>valid user name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birthdate",
            "description": "<p>(optional) user birthdate</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>(optional) must follow E.164 recommendation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country_code",
            "description": "<p>(optional) must follow the standard ISO 3166 alpha-2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photo",
            "description": "<p>(optional) user profile photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>jwt valid for 8 hours and must be placed at &quot;Authorization&quot; header</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/businessarea",
    "title": "01) List",
    "group": "Business",
    "name": "listBusiness",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "business",
            "description": "<p>business area list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n \"business\": [\n {\n   \"id\": \"7d9db945-d3f4-471a-a0f4-37f69c171dea\",\n   \"name\": \"International Relationships\"\n },\n {\n   \"id\": \"7d9db945-d3f4-471a-a0f4-37f69c171dea\",\n   \"name\": \"Software Development\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/business.js",
    "groupTitle": "Business",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/company/:id/department",
    "title": "10) Add department",
    "group": "Company",
    "name": "addDepartment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>valid name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>(optional) valid email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>(optional) must follow E.164 recommendation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sponsor_email",
            "description": "<p>email of the department's sponsor, must be registered</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "department",
            "description": "<p>department created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n    \"department\": {\n        \"id\": \"2ecf4114-7e24-47ee-8d48-f0f361e30403\",\n        \"name\": \"Markting\",\n        \"company_id\": \"e9be456d-23cd-4997-8dd6-408e6b1fec86\",\n        \"email\": \"depart@hat.com\",\n        \"phone\": \"911234564\",\n        \"updated_at\": \"2018-05-17T17:51:48.759Z\",\n        \"created_at\": \"2018-05-17T17:51:48.759Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/company/:id/nearshore",
    "title": "05) Add nearshore",
    "group": "Company",
    "name": "addNearshore",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "country_code",
            "description": "<p>must follow the standard ISO 3166 alpha-2</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>(optional) address</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nearshore",
            "description": "<p>created nearshore</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n    \"nearshore\": {\n        \"id\": \"816a3a62-5755-4afe-9a27-7a09af5e5085\",\n        \"country_code\": \"PT\",\n        \"city\": \"Lisboa\",\n        \"address\": \"Parque das Nações nº12\",\n        \"company_id\": \"e9be456d-23cd-4997-8dd6-408e6b1fec86\",\n        \"updated_at\": \"2018-05-17T17:53:59.244Z\",\n        \"created_at\": \"2018-05-17T17:53:59.244Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/company/:id/websection",
    "title": "07) Add websection",
    "group": "Company",
    "name": "addWebsection",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>description of the section</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>(optional) code of the section layout</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>(optional) image filename to section</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nearshore",
            "description": "<p>created nearshore</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n    \"websection\": {\n        \"id\": \"2befd00b-3af0-4b83-a9d7-b49f4e7320d5\",\n        \"title\": \"who we are\",\n        \"text\": \"Some company\",\n        \"image\": \"picture.jpg\",\n        \"code\": 1,\n        \"company_id\": \"e9be456d-23cd-4997-8dd6-408e6b1fec86\",\n        \"updated_at\": \"2018-05-17T18:03:35.244Z\",\n        \"created_at\": \"2018-05-17T18:03:35.244Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/company",
    "title": "01) Create",
    "group": "Company",
    "name": "createCompany",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>valid name</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "business[]",
            "description": "<p>business area names</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>(optional) valid email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>(optional) must follow E.164 recommendation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>(optional) company description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logo",
            "description": "<p>(optional) logo filename</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "banner",
            "description": "<p>(optional) banner filename</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n   \"name\": \"Instituto Baldes de Massa\",\n   \"business\": [\"Software Solutions\"]\n }",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "company",
            "description": "<p>created company</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/company/:id",
    "title": "03) Get",
    "group": "Company",
    "name": "getCompany",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "company",
            "description": "<p>company profile</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n \"company\": {\n   \"id\": \"01f52a4c-fc49-4a97-bbe0-c75e4679cd33\",\n   \"name\": \"IBM\",\n   \"description\": null,\n   \"User\": {\n     \"id\": \"16acf8fc-087f-4ef3-9236-83ebf42e3147\",\n     \"name\": \"8b450a269a397b04ea10c4b4586a8535\"\n   },\n   \"BusinessArea\": [\n     {\n       \"id\": \"f8ae926f-39d1-43f5-bdfa-36a2c39c894c\",\n       \"name\": \"International Relationships\"\n     }\n   ],\n   \"Departments\": [],\n   \"Nearshores\": [],\n   \"Websections\": []\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/company/:id",
    "title": "04) Update",
    "group": "Company",
    "name": "getCompany",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>(optional) valid name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>(optional) company description</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "logo",
            "description": "<p>(optional) logo filename</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "banner",
            "description": "<p>(optional) banner filename</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>returns false if was successfuly updated</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/company",
    "title": "02) List",
    "group": "Company",
    "name": "listCompanies",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "company",
            "description": "<p>companies list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n \"company\": [\n {\n   \"id\": \"7d9db945-d3f4-471a-a0f4-37f69c171dea\",\n   \"name\": \"International Relationships\"\n },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/company/:cid/department/:did",
    "title": "11) Remove department",
    "group": "Company",
    "name": "removeDepartment",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>returns false if was successfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/company/:cid/nearshore/:nid",
    "title": "06) Remove nearshore",
    "group": "Company",
    "name": "removeNearshore",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>returns false if was successfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/company/:cid/websection/:wid",
    "title": "09) Remove websection",
    "group": "Company",
    "name": "removeNearshore",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>returns false if was successfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/company/:cid/websection/:wid",
    "title": "08) Update websection",
    "group": "Company",
    "name": "updateWebsection",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>description of the section</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>(optional) code of the section layout</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>(optional) image filename to section</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>returns false if was successfuly updated</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/company.js",
    "groupTitle": "Company",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/department/:id/user",
    "title": "01) Add user",
    "group": "Department",
    "name": "addUserToDepartment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":id",
            "description": "<p>department id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>user email to add</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_sponsor",
            "description": "<p>flag to add usr as sponsor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>returns true if was successfuly added</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/department.js",
    "groupTitle": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/department/:id/user",
    "title": "02) Get users",
    "group": "Department",
    "name": "getUsersfromDepartment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":id",
            "description": "<p>department id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p>users list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n    \"users\": [\n        {\n            \"id\": \"9c8db06b-ac5e-40a1-97ea-4e85ad3a7a65\",\n            \"name\": \"cf4a6fb4db779c1b361c2f8567f178c9\",\n            \"email\": \"00aad73d9d771cda1603febc3eefa84a\",\n            \"photo\": \"9c8db06b-ac5e-40a1-97ea-4e85ad3a7a65.jpg\"\n        },\n        {\n            \"id\": \"c3ed5136-0286-433c-b92a-e38be3fbb854\",\n            \"name\": \"8b450a269a397b04ea10c4b4586a8535\",\n            \"email\": \"2c55657e2a3b6a41610c61996ef6d1ca\",\n            \"photo\": \"9c8db06b-ac5e-40a1-97ea-4e85ad3a7a65.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/department.js",
    "groupTitle": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/department/:did/user/:uid",
    "title": "03) remove user",
    "group": "Department",
    "name": "removeUserFromDepartment",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":did",
            "description": "<p>department id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":uid",
            "description": "<p>user id to remove</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was successfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/department.js",
    "groupTitle": "Department",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/file/:id",
    "title": "02) Download",
    "group": "Files",
    "name": "fileDownload",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>filename</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/manage.js",
    "groupTitle": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/file",
    "title": "01) Upload",
    "group": "Files",
    "name": "fileUpload",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "name",
            "description": "<p>html input name must be &quot;file&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>new filename to file</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/manage.js",
    "groupTitle": "Files",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/skill",
    "title": "01) List",
    "group": "Skill",
    "name": "listSkill",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "skill",
            "description": "<p>skill list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response example:",
          "content": "{\n \"skill\": [\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/v1.0.0/skill.js",
    "groupTitle": "Skill",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/my/experience",
    "title": "03) Add experience",
    "group": "User",
    "name": "addExperience",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "institution",
            "description": "<p>institution,</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "function",
            "description": "<p>function name,</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "actual",
            "description": "<p>flag indicating if still doing function,</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "initDate",
            "description": "<p>init function date,</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "endDate",
            "description": "<p>end function date,</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>function description,</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "is_education",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly updated</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/my/link",
    "title": "01) Add link",
    "group": "User",
    "name": "addLink",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>personal profile</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "social",
            "description": "<p>social network array index</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly updated</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/my/skill",
    "title": "05) Add skill",
    "group": "User",
    "name": "addSkill",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>skill/tecnology name</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "level",
            "description": "<p>skill level, (1-5)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly updated</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/my/experience/:id",
    "title": "04) Remove experience",
    "group": "User",
    "name": "removeExperience",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":id",
            "description": "<p>experience id to remove</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/my/link/:id",
    "title": "02) Remove link",
    "group": "User",
    "name": "removeLink",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":id",
            "description": "<p>link id to remove</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "/my/skill/:id",
    "title": "06) Remove skill",
    "group": "User",
    "name": "removeSkill",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "< token >",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Accept-Version",
            "defaultValue": "1.0.0",
            "description": ""
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":id",
            "description": "<p>skill id to remove</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "result",
            "description": "<p>return true if was sucessfuly removed</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1.0.0/user.js",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code: 500 to business logic errors and 401 to unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>error description</p>"
          }
        ]
      }
    }
  }
] });
