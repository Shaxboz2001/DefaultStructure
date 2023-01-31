import { SomeInput } from "components";
import {
     useApi,
     useApiMutation,
     useApiMutationWithId,
} from "hooks/useApi/useApiHooks";
import React from "react";

const SomePage = () => {
     return (
          <div>
               <SomeInput />
          </div>
     );
};

export default SomePage;
