import { Construct } from "constructs";
import { ContainerCluster } from "@cdktf/provider-google/lib/container-cluster";

export class HubContainer extends Construct {
  readonly cluster: ContainerCluster;

  constructor(scope: Construct, id: string, props: any) {
    super(scope, id);

    const {project, location} = props;

    this.cluster = new ContainerCluster(this, 'jupiter-hub-cluster', {
      project,
      location,
      name: "ai-resume-jupyter-hub",
      enableAutopilot: true,
      allowNetAdmin: true,
      deletionProtection: false,
    });
  }
}
