import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

// This file holds ambient type declarations.
export type APIHandler = (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => void;
