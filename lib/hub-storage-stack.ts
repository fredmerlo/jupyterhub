import { Construct } from "constructs";
import { StorageBucket } from "@cdktf/provider-google/lib/storage-bucket";

export class HubStorage extends Construct {

  constructor(scope: Construct, id: string, props: any) {
    super(scope, id);

    const {project, location} = props;

    new StorageBucket(this, "jupyter-hub-bucket", {
      project,
      location,
      name: "ai-resume-jupyter-hub-shared",
      storageClass: "STANDARD",
      publicAccessPrevention: "enforced",
      uniformBucketLevelAccess: true,
      forceDestroy: true,
      versioning: {
        enabled: true,
      },
    });
  }
}
