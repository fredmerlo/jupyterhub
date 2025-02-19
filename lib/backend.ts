import { GcsBackend, TerraformStack } from "cdktf";
import { Construct } from "constructs";

export class Backend extends TerraformStack {
  backend: GcsBackend;
  
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.backend = new GcsBackend(this, {
      bucket: "ai-resume-terraform-state",
      prefix: "terraform.state",
    });
    
  }
}
