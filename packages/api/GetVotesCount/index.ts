import { AzureFunction, Context } from "@azure/functions";
import { database } from "../cosmos";

const httpTrigger: AzureFunction = async function (
  context: Context
): Promise<void> {
  const { resources } = await database
    .container("Votes")
    .items.readAll()
    .fetchAll();

  context.res = {
    body: {
      count: resources.length,
    },
  };
};

export default httpTrigger;
