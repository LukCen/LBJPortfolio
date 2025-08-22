/**
 * Interface for individual projects
 *
 * - `id`: id number (stringify before using in id/class binding)
 * - `img`: example image of the project running
 * - `title`: title to be used inside the component
 * - `desc`: longer description of the project
 * - `repo`: link to GitHub repo
 * - `url`: if active, direct link to the project
 */
export interface Project {
  id: number
  img: string
  title: string
  desc: string
  repo: string
  url: string | null
}
