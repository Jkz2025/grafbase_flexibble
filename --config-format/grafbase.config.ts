import { graph, auth, config } from "@grafbase/sdk";

const g = graph.Standalone();

const User = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list(),
})

const Project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  crateBy: g.relation(() => User),

})

// finally we export the default config
export default config({
  graph: g
})