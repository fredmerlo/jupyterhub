import { App } from "cdktf";
import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { Construct } from "constructs";
import { HubContainer } from "./lib/hub-container-stack";
import { HubStorage } from "./lib/hub-storage-stack";
import { HubWorkload } from "./lib/hub-workload-stack";
import { Backend } from "./lib/backend";

export class Main extends Backend {

  constructor(scope: Construct, id: string, props: any) {
    super(scope, id);

    new GoogleProvider(this, "google", {
      region: props.location,
    });

    new HubContainer(this, "gke-cluster", props);

    new HubStorage(this, "gcs-storage", props);

    new HubWorkload(this, "gcs-workload", props);
  }
}

const app = new App();

new Main(app, "ai-resume", {
  project: "ai-resume-450913",
  location: "us-central1",
  projectId: 734216777151,
});

app.synth();
