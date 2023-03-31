import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { database } from "../cosmos";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const clientPrincipal = req.headers["x-ms-client-principal"];
  if (!clientPrincipal) {
    context.res = {
      status: 401,
    };
    return;
  }
  const encoded = Buffer.from(clientPrincipal, "base64");
  const { userId } = JSON.parse(encoded.toString("ascii"));
  const createdAt = new Date();

  const { resource } = await database
    .container("Votes")
    .items.create({ userId, createdAt });

  context.res = {
    status: 201,
    body: {
      vote: resource,
    },
  };
};

export default httpTrigger;
