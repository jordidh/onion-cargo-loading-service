const logger = require("../../api/logger");

module.exports = function () {

  let operations = {
    GET,
    POST,
    PUT,
    DELETE,
  };

  function GET(req, res, next) {
    let containers = [
      {
        id: 1,
        code: 'C1',
        description: 'Container 1',
        width: 1,
        length: 1,
        height: 1,
        maxWeight: 1,
      }
    ];

    res.status(200).json(containers);
  }

  function POST(req, res, next) {
    logger.info(`About to create container: ${JSON.stringify(req.body)}`);
    res.status(201).json();
  }

  function PUT(req, res, next) {
    logger.info(`About to update container id: ${req.query.id}`);
    res.status(200).json();
  }

  function DELETE(req, res, next) {
    logger.info(`About to delete container id: ${req.query.id}`);
    res.status(200).json();
  }

  GET.apiDoc = {
    summary: "Fetch containers.",
    operationId: "getContainers",
    responses: {
      200: {
        description: "List of containers.",
        schema: {
          type: "array",
          items: {
            $ref: "#/definitions/Container",
          },
        },
      },
    },
  };

  POST.apiDoc = {
    summary: "Create container.",
    operationId: "createContainer",
    consumes: ["application/json"],
    parameters: [
      {
        in: "body",
        name: "container",
        schema: {
          $ref: "#/definitions/Container",
        },
      },
    ],
    responses: {
      201: {
        description: "Created",
      },
    },
  };

  PUT.apiDoc = {
    summary: "Update container.",
    operationId: "updateContainer",
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        type: "string",
      },
      {
        in: "body",
        name: "container",
        schema: {
          $ref: "#/definitions/Container",
        },
      },
    ],
    responses: {
      200: {
        description: "Updated ok",
      },
    },
  };

  DELETE.apiDoc = {
    summary: "Delete container.",
    operationId: "deleteContainer",
    consumes: ["application/json"],
    parameters: [
      {
        in: "query",
        name: "id",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "Delete",
      },
    },
  };

  return operations;
};
