import { AddRequest } from "@request/addRequest";
import { AddResponse } from "@response/addResponse";

export const add = (request: AddRequest): AddResponse => {
  return { result: +request.a + +request.b };
};
