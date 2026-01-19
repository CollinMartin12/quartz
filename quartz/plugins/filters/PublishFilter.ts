import { QuartzFilterPlugin } from "../types"

export const PublishFilter: QuartzFilterPlugin = () => ({
  name: "PublishFilter",
  shouldPublish(_ctx, [_tree, vfile]) {
    const content = vfile.value?.toString() || ""
    // Check if file contains #publish tag
    return content.includes("#publish")
  },
})
