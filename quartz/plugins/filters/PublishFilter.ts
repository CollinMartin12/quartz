import { QuartzFilterPlugin } from "../types"

export const PublishFilter: QuartzFilterPlugin = () => ({
  name: "PublishFilter",
  shouldPublish(_ctx, [_tree, vfile]) {
    const content = vfile.value?.toString() || ""
    const slug = (vfile.data as any)?.slug as string | undefined

    // Always allow special index pages like the blog index itself
    if (slug === "blog") {
      return true
    }

    // Only publish notes that explicitly contain the #publish tag
    return content.includes("#publish")
  },
})
