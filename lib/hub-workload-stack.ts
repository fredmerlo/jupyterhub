import { ProjectIamBinding } from "@cdktf/provider-google/lib/project-iam-binding";
import { ServiceAccount } from "@cdktf/provider-google/lib/service-account";
import { ServiceAccountIamBinding } from "@cdktf/provider-google/lib/service-account-iam-binding";
import { Construct } from "constructs";

export class HubWorkload extends Construct {

  constructor(scope: Construct, id: string, props: any) {
    super(scope, id);

    const {project, projectId} = props;

    const juptyerhubSa = new ServiceAccount(this, "jupyter-hub-sa", { 
      accountId: "juptyerhub",
      displayName: "juptyerhub",
      project,
      description: "Jupyter Hub Service Account",
    });

    new ProjectIamBinding(this, "jupyter-hub-sa-binding", {
      project,
      role: "roles/storage.objectAdmin",
      members: [
        `serviceAccount:${juptyerhubSa.email}`,
      ],
    });

    new ServiceAccountIamBinding(this, "jupyter-hub-sa-workload-identity-binding", {
      serviceAccountId: `projects/${project}/serviceAccounts/${juptyerhubSa.email}`,
      role: "roles/iam.workloadIdentityUser",
      members: [
        `principal://iam.googleapis.com/projects/${projectId}/locations/global/workloadIdentityPools/${project}.svc.id.goog/subject/ns/jupyterhub/sa/hub`
      ],
    });
  }
}
