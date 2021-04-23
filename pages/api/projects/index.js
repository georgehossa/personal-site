import { projects } from '../../../data';
export default async function(req, res) {
  res.status(200).json(projects);
}